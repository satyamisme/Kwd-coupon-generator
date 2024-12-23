import React from 'react';
import { formatDateToText } from '../utils/dateFormat';

interface CouponTermsProps {
  validUntil: string;
  purchaseAmount: number;
}

export const CouponTerms: React.FC<CouponTermsProps> = ({ validUntil, purchaseAmount }) => {
  return (
    <div className="text-right w-full">
      <div className="mb-1">
        <p className="font-semibold text-[6px] mb-0.5">Requirements:</p>
        <ul className="text-[6px] text-gray-600 leading-tight list-none">
          <li>• Min. purchase: {purchaseAmount} KWD</li>
          <li>• Original receipt required</li>
          <li>• Valid ID must be presented</li>
        </ul>
      </div>
      
      <div>
        <p className="font-semibold text-[6px] mb-0.5">Price Ranges:</p>
        <ul className="text-[6px] text-gray-600 leading-tight list-none">
          <li>• 1-20 KWD: Min. 10 KWD purchase</li>
          <li>• 21-50 KWD: Min. 20 KWD purchase</li>
          <li>• 51-100 KWD: Min. 50 KWD purchase</li>
        </ul>
      </div>
      
      <div className="mt-1">
        <p className="font-semibold text-[6px] mb-0.5">Validity:</p>
        <ul className="text-[6px] text-gray-600 leading-tight list-none">
          <li>• Valid until: {formatDateToText(validUntil)}</li>
          <li>• Valid for in-store purchases only</li>
          <li>• No cash value</li>
          <li>• Non-transferable</li>
        </ul>
      </div>
    </div>
  );
};