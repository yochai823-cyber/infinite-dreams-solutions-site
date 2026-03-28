import React, { useState, FormEvent } from 'react';
import { useI18n } from '@/shared/i18n';
import { useToast } from '@/shared/ui/Toast';
import { addGuest, generateTokenHash } from '../services/guests.service';
import { validateGuestInput } from '@/shared/forms/validators';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { Button } from '@/shared/ui/Button';

interface Props {
  eventId: string;
  onClose: () => void;
  onSaved: () => void;
}

export function GuestFormModal({ eventId, onClose, onSaved }: Props) {
  const { t } = useI18n();
  const { toast } = useToast();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroup] = useState('');
  const [maxPartySize, setMaxPartySize] = useState(2);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const groupOptions = Object.entries(t.guests.groups).map(([value, label]) => ({ value, label }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validateGuestInput({ firstName, phone, email });
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setLoading(true);
    try {
      const tokenHash = generateTokenHash();
      await addGuest(eventId, { firstName, lastName, phone, email, group, maxPartySize }, tokenHash);
      toast('success', 'המוזמן נוסף');
      onSaved();
      onClose();
    } catch {
      toast('error', t.errors.generic);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen onClose={onClose} title={t.guests.add}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label={t.guests.firstName}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            error={errors.firstName}
          />
          <Input
            label={t.guests.lastName}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <Input
          label={t.guests.phone}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          dir="ltr"
          hint="05X-XXXXXXX"
          error={errors.phone || errors.contact}
        />
        <Input
          label={t.guests.email}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          dir="ltr"
          error={errors.email}
        />
        <Select
          label={t.guests.group}
          options={groupOptions}
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          placeholder="בחר קבוצה"
        />
        <Input
          label={t.guests.maxPartySize}
          type="number"
          min={1}
          max={20}
          value={maxPartySize}
          onChange={(e) => setMaxPartySize(Number(e.target.value))}
          dir="ltr"
        />
        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="secondary" onClick={onClose} type="button">
            {t.common.cancel}
          </Button>
          <Button variant="primary" loading={loading} type="submit">
            {t.common.save}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
