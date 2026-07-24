import { authClient } from "@/lib/auth/auth-client";
import { ProfileCircle } from "iconsax-react";

function AccountProfile() {
  const { data: session } = authClient.useSession();

  return (
    <div className="flex items-center justify-start gap-4 mt-2">
      <ProfileCircle variant="Outline" size={60} color="#b4b4b4" />
      <p className="font-medium">{session?.user.name}</p>
    </div>
  );
}

export default AccountProfile;
