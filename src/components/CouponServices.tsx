import React from 'react';
import { SERVICES } from '../constants/services';

export const CouponServices = () => (
  <div>
    <p className="font-semibold text-[7px] mb-0.5">Services:</p>
    <p className="text-[6px] text-gray-600 leading-tight">
      {SERVICES.join(', ')}
    </p>
  </div>
);