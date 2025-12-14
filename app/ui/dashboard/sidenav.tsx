'use client';

import { PowerIcon } from '@heroicons/react/24/outline';
import AcmeLogo from '@/app/ui/acme-logo';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* Logo */}
      <div className="mb-2 flex h-20 items-center justify-center rounded-md bg-blue-600 p-4 md:h-40">
        <AcmeLogo />
      </div>

      {/* Navigation Links (FROM nav-links.tsx) */}
      <div className="flex grow flex-col gap-2">
        <NavLinks />
      </div>

      {/* Sign Out */}
      <div className="mt-auto flex items-center gap-3 px-3 py-2 text-sm font-semibold hover:bg-gray-200 rounded-md cursor-pointer">
        <PowerIcon className="w-5" />
        <p>Sign Out</p>
      </div>
    </div>
  );
}
