import React from 'react';
import { Printer } from 'lucide-react';

export const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="print:hidden px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
    >
      <Printer className="w-4 h-4" />
      Print Coupons
    </button>
  );
};