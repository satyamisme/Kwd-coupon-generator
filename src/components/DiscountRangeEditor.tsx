import React from 'react';

interface DiscountRange {
  min: number;
  max: number;
  discount: number;
}

interface DiscountRangeEditorProps {
  ranges: DiscountRange[];
  onChange: (ranges: DiscountRange[]) => void;
}

export const DiscountRangeEditor: React.FC<DiscountRangeEditorProps> = ({ ranges, onChange }) => {
  const addRange = () => {
    const lastRange = ranges[ranges.length - 1];
    const newRange = {
      min: lastRange.max + 1,
      max: lastRange.max + 50,
      discount: lastRange.discount + 5
    };
    onChange([...ranges, newRange]);
  };

  const updateRange = (index: number, field: keyof DiscountRange, value: number) => {
    const newRanges = ranges.map((range, i) => {
      if (i === index) {
        return { ...range, [field]: value };
      }
      return range;
    });
    onChange(newRanges);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Discount Ranges
      </label>
      <div className="space-y-2">
        {ranges.map((range, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="number"
              value={range.min}
              onChange={(e) => updateRange(index, 'min', Number(e.target.value))}
              className="w-24 rounded-md border-gray-300"
              placeholder="Min"
            />
            <input
              type="number"
              value={range.max}
              onChange={(e) => updateRange(index, 'max', Number(e.target.value))}
              className="w-24 rounded-md border-gray-300"
              placeholder="Max"
            />
            <input
              type="number"
              value={range.discount}
              onChange={(e) => updateRange(index, 'discount', Number(e.target.value))}
              className="w-24 rounded-md border-gray-300"
              placeholder="Discount"
            />
            <span className="text-sm text-gray-500 self-center">KWD</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addRange}
        className="text-sm text-blue-600 hover:text-blue-700"
      >
        + Add Range
      </button>
    </div>
  );
};