import React from 'react';
import { PRICE_RANGES } from '../constants/discounts';

interface PriceRangeSelectorProps {
  value: number;
  onChange: (amount: number) => void;
}

export const PriceRangeSelector: React.FC<PriceRangeSelectorProps> = ({ value, onChange }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">
      Purchase Amount (KWD)
    </label>
    <input
      type="number"
      min="1"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    />
    <div className="mt-2 text-sm text-gray-500">
      <p className="font-medium mb-1">Discount Tiers:</p>
      <div className="grid grid-cols-2 gap-2">
        {PRICE_RANGES.map((range, index) => (
          <div 
            key={index}
            className={`p-2 rounded ${
              value >= range.min && value <= range.max 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-gray-50'
            }`}
          >
            <p className="text-xs">
              {range.max === Infinity 
                ? `${range.min}+ KWD` 
                : `${range.min}-${range.max} KWD`}
            </p>
            <p className="font-medium">{range.discount} KWD OFF</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);