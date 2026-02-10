import React, { useState, useEffect } from 'react';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { getAllUsers, updateUserRole, blockUser } from '../services/admin.service';
import { Table } from '@/shared/ui/Table';
import { Badge } from '@/shared/ui/Badge';
import { Button } from '@/shared/ui/Button';
import { Spinner } from '@/shared/ui/Spinner';
import { Shield, Ban, RotateCcw } from 'lucide-react';
import type { AppUser } from '@/features/auth/types';

export function UserManagementPage() {
  const { t } = useI18n();
  const { toast } = useToast();
  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    setLoading(true);
    const data = await getAllUsers();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => { loadUsers(); }, []);

  const handleRoleChange = async (user: AppUser) => {
    const newRole = user.role === 'admin' ? 'client' : 'admin';
    try {
      await updateUserRole(user.uid, newRole);
      setUsers((prev) => prev.map((u) => u.uid === user.uid ? { ...u, role: newRole } : u));
      toast('success', `תפקיד עודכן ל-${newRole}`);
    } catch {
      toast('error', t.errors.generic);
    }
  };

  const handleBlock = async (user: AppUser) => {
    const newBlocked = !user.blocked;
    try {
      await blockUser(user.uid, newBlocked);
      setUsers((prev) => prev.map((u) => u.uid === user.uid ? { ...u, blocked: newBlocked } : u));
      toast('success', newBlocked ? 'המשתמש נחסם' : 'המשתמש שוחרר');
    } catch {
      toast('error', t.errors.generic);
    }
  };

  const columns = [
    {
      key: 'name',
      header: t.auth.name,
      render: (u: AppUser) => u.name || '-',
    },
    {
      key: 'email',
      header: t.auth.email,
      render: (u: AppUser) => <span dir="ltr" className="text-xs">{u.email}</span>,
    },
    {
      key: 'role',
      header: 'תפקיד',
      render: (u: AppUser) => (
        <Badge variant={u.role === 'admin' ? 'info' : 'gray'}>
          {u.role}
        </Badge>
      ),
    },
    {
      key: 'status',
      header: t.common.status,
      render: (u: AppUser) => (
        <Badge variant={u.blocked ? 'error' : 'success'}>
          {u.blocked ? 'חסום' : 'פעיל'}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: t.common.actions,
      render: (u: AppUser) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleRoleChange(u)}
            className="p-1 rounded hover:bg-blue-50 text-blue-600"
            title={t.admin.changeRole}
            aria-label={`${t.admin.changeRole} ${u.name}`}
          >
            <Shield size={16} />
          </button>
          <button
            onClick={() => handleBlock(u)}
            className="p-1 rounded hover:bg-red-50 text-red-500"
            title={u.blocked ? 'שחרר' : t.admin.blockUser}
            aria-label={`${u.blocked ? 'שחרר' : t.admin.blockUser} ${u.name}`}
          >
            <Ban size={16} />
          </button>
        </div>
      ),
    },
  ];

  if (loading) return <Spinner className="py-20" />;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t.admin.users}</h1>
        <Button variant="ghost" size="sm" icon={<RotateCcw size={14} />} onClick={loadUsers}>
          רענן
        </Button>
      </div>

      <div className="card p-0 overflow-hidden">
        <Table columns={columns} data={users} keyExtractor={(u) => u.uid} />
      </div>
    </div>
  );
}
