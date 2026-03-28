import React, { useState, useEffect, useMemo } from 'react';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { getGuestsByEvent, deleteGuest } from '../services/guests.service';
import { Table } from '@/shared/ui/Table';
import { Badge } from '@/shared/ui/Badge';
import { Button } from '@/shared/ui/Button';
import { Spinner } from '@/shared/ui/Spinner';
import { GuestFormModal } from './GuestFormModal';
import { ImportCsvModal } from './ImportCsvModal';
import { Plus, Upload, Download, Trash2, RotateCcw } from 'lucide-react';
import type { GuestData, GuestStatus } from '../types';

interface Props {
  eventId: string;
}

const statusBadgeMap: Record<GuestStatus, { variant: 'success' | 'error' | 'warning' | 'info'; label: string }> = {
  yes: { variant: 'success', label: '' },
  no: { variant: 'error', label: '' },
  pending: { variant: 'warning', label: '' },
  maybe: { variant: 'info', label: '' },
};

export function GuestsTable({ eventId }: Props) {
  const { t } = useI18n();
  const { toast } = useToast();
  const [guests, setGuests] = useState<GuestData[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);

  const loadGuests = async () => {
    setLoading(true);
    const data = await getGuestsByEvent(eventId);
    setGuests(data);
    setLoading(false);
  };

  useEffect(() => {
    loadGuests();
  }, [eventId]);

  const filtered = useMemo(() => {
    let result = guests;
    if (filter !== 'all') {
      if (filter === 'notSent') {
        result = result.filter((g) => !g.sentAt);
      } else {
        result = result.filter((g) => g.status === filter);
      }
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (g) =>
          g.firstName.toLowerCase().includes(q) ||
          g.lastName.toLowerCase().includes(q) ||
          g.phone.includes(q) ||
          g.email.toLowerCase().includes(q)
      );
    }
    return result;
  }, [guests, filter, search]);

  const handleDelete = async (guest: GuestData) => {
    if (!confirm(`למחוק את ${guest.firstName} ${guest.lastName}?`)) return;
    try {
      await deleteGuest(eventId, guest.id);
      setGuests((prev) => prev.filter((g) => g.id !== guest.id));
      toast('success', 'המוזמן נמחק');
    } catch {
      toast('error', t.errors.generic);
    }
  };

  const exportCsv = () => {
    const header = 'שם פרטי,שם משפחה,טלפון,אימייל,סטטוס,כמות,הערה,קבוצה\n';
    const rows = guests.map((g) =>
      `"${g.firstName}","${g.lastName}","${g.phone}","${g.email}","${g.status}","${g.partySize}","${g.note || ''}","${g.group || ''}"`
    ).join('\n');
    const blob = new Blob(['\uFEFF' + header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'guests.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Build status labels from i18n
  const statusLabels: Record<GuestStatus, string> = {
    yes: t.guests.statuses.yes,
    no: t.guests.statuses.no,
    pending: t.guests.statuses.pending,
    maybe: t.guests.statuses.maybe,
  };

  const columns = [
    {
      key: 'name',
      header: t.guests.firstName,
      render: (g: GuestData) => `${g.firstName} ${g.lastName}`,
    },
    {
      key: 'phone',
      header: t.guests.phone,
      render: (g: GuestData) => <span dir="ltr">{g.phone}</span>,
    },
    {
      key: 'email',
      header: t.guests.email,
      render: (g: GuestData) => <span dir="ltr" className="text-xs">{g.email}</span>,
    },
    {
      key: 'group',
      header: t.guests.group,
      render: (g: GuestData) => g.group || '-',
    },
    {
      key: 'status',
      header: t.guests.status,
      render: (g: GuestData) => {
        const badge = statusBadgeMap[g.status];
        return <Badge variant={badge.variant}>{statusLabels[g.status]}</Badge>;
      },
    },
    {
      key: 'partySize',
      header: t.guests.partySize,
      render: (g: GuestData) => g.status === 'yes' ? g.partySize : '-',
    },
    {
      key: 'actions',
      header: t.common.actions,
      render: (g: GuestData) => (
        <button
          onClick={(e) => { e.stopPropagation(); handleDelete(g); }}
          className="p-1 rounded hover:bg-red-50 text-red-500"
          aria-label={`${t.common.delete} ${g.firstName}`}
        >
          <Trash2 size={16} />
        </button>
      ),
    },
  ];

  if (loading) return <Spinner className="py-12" />;

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary" size="sm" icon={<Plus size={14} />} onClick={() => setShowAddModal(true)}>
            {t.guests.add}
          </Button>
          <Button variant="secondary" size="sm" icon={<Upload size={14} />} onClick={() => setShowImportModal(true)}>
            {t.guests.importCsv}
          </Button>
          <Button variant="ghost" size="sm" icon={<Download size={14} />} onClick={exportCsv}>
            {t.guests.exportCsv}
          </Button>
          <Button variant="ghost" size="sm" icon={<RotateCcw size={14} />} onClick={loadGuests}>
            רענן
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="input-field py-1.5 text-sm w-auto"
            aria-label={t.common.filter}
          >
            <option value="all">{t.guests.filters.all} ({guests.length})</option>
            <option value="yes">{t.guests.filters.confirmed}</option>
            <option value="no">{t.guests.filters.declined}</option>
            <option value="pending">{t.guests.filters.pending}</option>
            <option value="notSent">{t.guests.filters.notSent}</option>
          </select>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.common.search + '...'}
            className="input-field py-1.5 text-sm w-48"
            aria-label={t.common.search}
          />
        </div>
      </div>

      {/* Table */}
      <div className="card p-0 overflow-hidden">
        <Table
          columns={columns}
          data={filtered}
          keyExtractor={(g) => g.id}
          emptyMessage={t.common.noData}
        />
      </div>

      <p className="text-xs text-slate-400">
        סה״כ: {guests.length} | מוצגים: {filtered.length}
      </p>

      {/* Modals */}
      {showAddModal && (
        <GuestFormModal
          eventId={eventId}
          onClose={() => setShowAddModal(false)}
          onSaved={loadGuests}
        />
      )}
      {showImportModal && (
        <ImportCsvModal
          eventId={eventId}
          existingGuests={guests}
          onClose={() => setShowImportModal(false)}
          onImported={loadGuests}
        />
      )}
    </div>
  );
}
