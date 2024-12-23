import React from 'react';

interface PriceRange {
  min: number;
  max: number;
  discount: number;
  minPurchase: number;
  quantity: number;
}

interface PriceRangeEditorProps {
  ranges: PriceRange[];
  onChange: (ranges: PriceRange[]) => void;
}

export const PriceRangeEditor: React.FC<PriceRangeEditorProps> = ({ ranges, onChange }) => {
  const updateRange = (index: number, field: keyof PriceRange, value: number) => {
    const newRanges = ranges.map((range, i) => 
      i === index ? { ...range, [field]: value } : range
    );
    onChange(newRanges);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-700">Price Ranges & Quantities</h3>
      <div className="space-y-3">
        {ranges.map((range, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500">Min Price (KWD)</label>
                <input
                  type="number"
                  value={range.min}
                  onChange={(e) => updateRange(index, 'min', Number(e.target.value))}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500">Max Price (KWD)</label>
                <input
                  type="number"
                  value={range.max}
                  onChange={(e) => updateRange(index, 'max', Number(e.target.value))}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500">Discount (KWD)</label>
                <input
                  type="number"
                  value={range.discount}
                  onChange={(e) => updateRange(index, 'discount', Number(e.target.value))}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500">Min Purchase (KWD)</label>
                <input
                  type="number"
                  value={range.minPurchase}
                  onChange={(e) => updateRange(index, 'minPurchase', Number(e.target.value))}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500">Quantity</label>
              <input
                type="number"
                min="1"
                value={range.quantity}
                onChange={(e) => updateRange(index, 'quantity', Number(e.target.value))}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};