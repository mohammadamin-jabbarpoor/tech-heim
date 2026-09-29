import PersonalData from "@/src/components/features/account/personal-data/PersonalData";
import { getUserProfile } from "@/src/features/account/queries/getUserProfile";
import { auth } from "@/src/lib/auth/auth";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function Personal() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/");
  }
  const user = await getUserProfile(session.user.id);

  if (!user) {
    redirect("/");
  }

  return (
    <div>
      <PersonalData user={user} />
    </div>
  );
}

export default Personal;
