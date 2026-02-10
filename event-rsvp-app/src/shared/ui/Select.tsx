import React, { forwardRef } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, placeholder, id, className = '', ...props }, ref) => {
    const selectId = id || label.replace(/\s+/g, '-').toLowerCase();
    const errorId = `${selectId}-error`;

    return (
      <div className="space-y-1">
        <label htmlFor={selectId} className="block text-sm font-medium text-slate-700">
          {label}
          {props.required && <span className="text-red-500 mr-1" aria-hidden="true">*</span>}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`input-field ${error ? 'input-error' : ''} ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={errorId} className="text-xs text-red-600" role="alert">
            <span aria-hidden="true">⚠</span> {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
