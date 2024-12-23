import React from 'react';
import { Settings } from 'lucide-react';
import { CouponOptions } from '../constants/options';

interface CouponOptionsProps {
  options: CouponOptions;
  onChange: (options: CouponOptions) => void;
}

export const CouponOptionsEditor: React.FC<CouponOptionsProps> = ({ options, onChange }) => {
  const updateOption = (key: keyof CouponOptions) => {
    onChange({ ...options, [key]: !options[key] });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Settings className="w-4 h-4 text-gray-500" />
        <h3 className="text-sm font-medium text-gray-700">Additional Options</h3>
      </div>
      
      <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.enableBranchSpecific}
            onChange={() => updateOption('enableBranchSpecific')}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <span className="text-sm text-gray-700">Branch-specific coupons</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.enableExpiration}
            onChange={() => updateOption('enableExpiration')}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <span className="text-sm text-gray-700">Enable expiration date</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.enableCustomTerms}
            onChange={() => updateOption('enableCustomTerms')}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <span className="text-sm text-gray-700">Custom terms & conditions</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={options.enableCustomDesign}
            onChange={() => updateOption('enableCustomDesign')}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <span className="text-sm text-gray-700">Custom design options</span>
        </label>
      </div>
    </div>
  );
};