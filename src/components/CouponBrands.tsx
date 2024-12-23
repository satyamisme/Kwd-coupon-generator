import React from 'react';
import { BRANDS } from '../constants/brands';

export const CouponBrands = () => (
  <div>
    <p className="font-semibold text-[7px] mb-0.5">Brands:</p>
    <p className="text-[6px] text-gray-600 leading-tight">
      {BRANDS.join(', ')}
    </p>
  </div>
);