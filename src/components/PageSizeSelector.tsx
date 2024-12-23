import React from 'react';

interface PageSizeSelectorProps {
  value: 'A4' | 'A5' | 'custom';
  onChange: (size: 'A4' | 'A5' | 'custom') => void;
}

export const PageSizeSelector: React.FC<PageSizeSelectorProps> = ({ value, onChange }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">
      Page Size
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as 'A4' | 'A5' | 'custom')}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    >
      <option value="A4">A4 (210 × 297 mm)</option>
      <option value="A5">A5 (148 × 210 mm)</option>
      <option value="custom">Custom Size</option>
    </select>
  </div>
);