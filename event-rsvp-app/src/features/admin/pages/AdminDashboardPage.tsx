import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/shared/i18n';
import { getSystemStats, type SystemStats } from '../services/admin.service';
import { KpiCard } from '@/shared/ui/Card';
import { Spinner } from '@/shared/ui/Spinner';
import { Card } from '@/shared/ui/Card';
import { Users, Calendar, Shield, Database } from 'lucide-react';

export function AdminDashboardPage() {
  const { t } = useI18n();
  const [stats, setStats] = useState<SystemStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSystemStats().then((s) => {
      setStats(s);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner className="py-20" />;
  if (!stats) return null;

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">{t.admin.title}</h1>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard title={t.admin.activeUsers} value={stats.totalUsers} icon={<Users size={20} />} color="blue" />
        <KpiCard title={t.admin.activeEvents} value={stats.activeEvents} icon={<Calendar size={20} />} color="green" />
        <KpiCard title={t.events.title} value={stats.totalEvents} icon={<Database size={20} />} color="amber" />
        <KpiCard title={t.admin.compliance} value="OK" icon={<Shield size={20} />} color="green" />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/admin/users" className="card hover:shadow-md transition-shadow text-center">
          <Users size={24} className="mx-auto mb-2 text-primary-600" />
          <span className="font-medium text-sm">{t.admin.users}</span>
        </Link>
        <Link to="/admin/templates" className="card hover:shadow-md transition-shadow text-center">
          <Database size={24} className="mx-auto mb-2 text-primary-600" />
          <span className="font-medium text-sm">{t.admin.templates}</span>
        </Link>
        <Link to="/admin/compliance" className="card hover:shadow-md transition-shadow text-center">
          <Shield size={24} className="mx-auto mb-2 text-primary-600" />
          <span className="font-medium text-sm">{t.admin.compliance}</span>
        </Link>
        <Link to="/admin/abuse" className="card hover:shadow-md transition-shadow text-center">
          <Shield size={24} className="mx-auto mb-2 text-red-600" />
          <span className="font-medium text-sm">{t.admin.abuse}</span>
        </Link>
      </div>
    </div>
  );
}
