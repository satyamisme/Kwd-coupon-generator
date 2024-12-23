import React, { useState } from 'react';
import { CouponForm } from './components/CouponForm';
import { Coupon } from './components/Coupon';
import { PrintButton } from './components/PrintButton';
import { generateCouponNumber } from './utils/coupon';

interface CouponData {
  name: string;
  number: string;
  discount: number;
  purchaseAmount: number;
  validUntil: string;
  showQR: boolean;
  socialLinks: {
    linktree: string;
  };
}

export function App() {
  const [coupons, setCoupons] = useState<CouponData[]>([]);

  const handleSubmit = (data: any) => {
    const newCoupons = data.discountRanges.flatMap(range => 
      Array.from({ length: range.quantity }, () => ({
        ...data,
        number: generateCouponNumber(),
        discount: range.discount,
        purchaseAmount: range.min
      }))
    );
    setCoupons(newCoupons);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 print:p-0 print:bg-white">
      <div className="max-w-[210mm] mx-auto">
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KWD Coupon Generator</h1>
          <p className="text-lg text-gray-600">Generate coupons with dynamic discounts based on purchase amount</p>
        </div>

        {coupons.length === 0 ? (
          <CouponForm onSubmit={handleSubmit} />
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6 print:hidden">
              <button
                onClick={() => setCoupons([])}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Create New Coupons
              </button>
              <PrintButton />
            </div>
            
            <div className="print-grid">
              {coupons.map((coupon, index) => (
                <div key={index} className="coupon-container">
                  <Coupon {...coupon} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}