import React from 'react';

interface CouponDiscountProps {
  amount: number;
}

export const CouponDiscount: React.FC<CouponDiscountProps> = ({ amount }) => (
  <div className="mt-1">
    <p className="text-base font-bold text-green-600">{amount} KWD OFF</p>
    <p className="text-[6px] text-gray-600">Valid at all branches</p>
  </div>
);