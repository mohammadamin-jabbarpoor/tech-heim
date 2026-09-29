"use client";

import { authClient } from "@/src/lib/auth/auth-client";
import { Edit, ProfileCircle } from "iconsax-react";

function MobileProfile() {
  const { data: session } = authClient.useSession();

  return (
    <div>
      <p className="font-light text-sm mb-2">User</p>
      <div className="flex items-center justify-between p-2 bg-gray-50">
        <div className="flex items-center justify-center gap-2">
          <ProfileCircle variant="Outline" size={32} color="#b4b4b4" />
          <p className="font-medium text-sm line-clamp-1">
            {session?.user.name}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Edit size={16} color="#0C68F4" />
          <p className="font-light text-xs text-primary line-clamp-1">
            Personal data
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileProfile;
