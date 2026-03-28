import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className = '', ...props }, ref) => {
    const inputId = id || label.replace(/\s+/g, '-').toLowerCase();
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="space-y-1">
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700">
          {label}
          {props.required && <span className="text-red-500 mr-1" aria-hidden="true">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`input-field ${error ? 'input-error' : ''} ${className}`}
          aria-invalid={!!error}
          aria-describedby={[error ? errorId : '', hint ? hintId : ''].filter(Boolean).join(' ') || undefined}
          {...props}
        />
        {hint && !error && (
          <p id={hintId} className="text-xs text-slate-500">{hint}</p>
        )}
        {error && (
          <p id={errorId} className="text-xs text-red-600 flex items-center gap-1" role="alert">
            <span aria-hidden="true">⚠</span> {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const inputId = id || label.replace(/\s+/g, '-').toLowerCase();
    const errorId = `${inputId}-error`;

    return (
      <div className="space-y-1">
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-700">
          {label}
          {props.required && <span className="text-red-500 mr-1" aria-hidden="true">*</span>}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={`input-field min-h-[100px] ${error ? 'input-error' : ''} ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-xs text-red-600" role="alert">
            <span aria-hidden="true">⚠</span> {error}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
