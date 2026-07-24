import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/auth";
import { getUserProfile } from "@/lib/services/user-profile.service";
import PersonalData from "@/components/account/personal-data/PersonalData";

async function AccountPage() {
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

  return <PersonalData user={user} />;
}

export default AccountPage;
