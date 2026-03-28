import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

export function Card({ children, className = '', padding = true }: CardProps) {
  return (
    <div className={`card ${padding ? 'p-6' : 'p-0'} ${className}`}>
      {children}
    </div>
  );
}

interface KpiCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  color?: 'blue' | 'green' | 'amber' | 'red' | 'slate';
}

const colorClasses = {
  blue: 'bg-blue-50 text-blue-700',
  green: 'bg-green-50 text-green-700',
  amber: 'bg-amber-50 text-amber-700',
  red: 'bg-red-50 text-red-700',
  slate: 'bg-slate-50 text-slate-700',
};

export function KpiCard({ title, value, icon, color = 'blue' }: KpiCardProps) {
  return (
    <div className="card flex items-center gap-4">
      {icon && (
        <div className={`p-3 rounded-lg ${colorClasses[color]}`} aria-hidden="true">
          {icon}
        </div>
      )}
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <p className="text-2xl font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}
