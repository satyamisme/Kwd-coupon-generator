import React, { useState } from 'react';
import { Printer } from 'lucide-react';
import { INITIAL_PRICE_RANGES } from '../constants/discounts';
import { PriceRangeEditor } from './PriceRangeEditor';
import { CouponOptionsEditor } from './CouponOptions';
import { DEFAULT_OPTIONS, CouponOptions } from '../constants/options';

interface CouponFormProps {
  onSubmit: (data: {
    name: string;
    validUntil: string;
    showQR: boolean;
    options: CouponOptions;
    discountRanges: Array<{
      min: number;
      max: number;
      discount: number;
      minPurchase: number;
      quantity: number;
    }>;
    socialLinks: {
      linktree: string;
    };
  }) => void;
}

export const CouponForm: React.FC<CouponFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: 'LAKKI PHONE',
    validUntil: new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
    showQR: true,
    options: DEFAULT_OPTIONS,
    discountRanges: INITIAL_PRICE_RANGES.map(range => ({ ...range, quantity: 1 })),
    socialLinks: {
      linktree: 'lakkiphones'
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl bg-white p-6 rounded-lg shadow-sm">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Generate Coupons</h2>
        <p className="text-sm text-gray-600">Create discount coupons for all branches</p>
      </div>

      {formData.options.enableExpiration && (
        <div>
          <label htmlFor="validUntil" className="block text-sm font-medium text-gray-700">
            Valid Until
          </label>
          <input
            type="date"
            id="validUntil"
            value={formData.validUntil}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setFormData({ ...formData, validUntil: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      )}

      <PriceRangeEditor 
        ranges={formData.discountRanges}
        onChange={(ranges) => setFormData({ ...formData, discountRanges: ranges })}
      />

      <CouponOptionsEditor
        options={formData.options}
        onChange={(options) => setFormData({ ...formData, options })}
      />

      <div className="flex items-center">
        <input
          type="checkbox"
          id="showQR"
          checked={formData.showQR}
          onChange={(e) => setFormData({ ...formData, showQR: e.target.checked })}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="showQR" className="ml-2 block text-sm text-gray-700">
          Include Linktree QR Code
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <Printer className="mr-2 h-4 w-4" />
        Generate Coupons
      </button>
    </form>
  );
};