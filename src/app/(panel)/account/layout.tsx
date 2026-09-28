import AccountSidebar from "@/src/components/features/account/account-sidebar/AccountSidebar";
import AccountBreadcrumb from "@/src/components/features/account/AccountBreadcrumb";
import { auth } from "@/src/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

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
