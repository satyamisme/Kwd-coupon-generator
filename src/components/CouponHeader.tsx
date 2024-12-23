import React from 'react';
import { Phone, Smartphone } from 'lucide-react';
import { HELPLINE } from '../constants/branches';

export const CouponHeader: React.FC = () => (
  <div className="flex items-center justify-between mb-1">
    <div className="flex items-center gap-1">
      <Smartphone className="w-5 h-5 text-red-600" />
      <div>
        <h1 className="text-sm font-bold text-red-600">LAKKI PHONE</h1>
        <p className="text-[6px] text-gray-600">Mobile Sales & Service</p>
      </div>
    </div>
    <div className="flex items-center text-[6px] text-gray-600">
      <Phone className="w-2 h-2 mr-0.5" />
      <span>Helpline: {HELPLINE}</span>
    </div>
  </div>
);