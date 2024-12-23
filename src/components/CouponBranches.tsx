import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { BRANCH_LOCATIONS } from '../constants/branches';

export const CouponBranches = () => (
  <div className="mt-2">
    <p className="font-semibold text-[7px] mb-0.5">Our Branches:</p>
    <div className="space-y-1">
      {BRANCH_LOCATIONS.map(branch => (
        <div key={branch.id} className="text-[6px] text-gray-600">
          <div className="flex items-start gap-1">
            <MapPin className="w-2 h-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">{branch.name}</p>
              <p className="leading-tight">{branch.address}</p>
              <div className="flex items-center gap-0.5">
                <Phone className="w-1.5 h-1.5" />
                <span>{branch.phone}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);