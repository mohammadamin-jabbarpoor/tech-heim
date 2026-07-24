import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import AccountBreadcrumb from "@/components/account/AccountBreadcrumb";

import AccountSidebar from "@/components/account/account-sidebar/AccountSidebar";

async function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <AccountBreadcrumb />
      <div className="flex gap-6 mb-20">
        <aside className="flex-2">
          <AccountSidebar />
        </aside>
        <main className="flex-8 mt-6">{children}</main>
      </div>
    </>
  );
}

export default AccountLayout;
