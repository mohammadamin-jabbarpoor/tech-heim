import AccountSidebar from "@/src/components/features/account/account-sidebar/AccountSidebar";
import AccountBreadcrumb from "@/src/components/features/account/AccountBreadcrumb";
import PublicHeader from "@/src/components/shared/layout/public/header/PublicHeader";
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
      <PublicHeader />

      {/* Divider */}
      <div className="hidden h-px w-full bg-linear-to-r from-[#0C68F4]/30 via-[#0C68F4]/70 to-[#0C68F4]/30 md:block" />

      {/* Account container */}
      <div className="mx-auto w-full max-w-360 px-6 md:px-19.5 lg:px-24 xl:px-27">
        {/* Breadcrumb */}
        <AccountBreadcrumb />

        {/* Content */}
        <div className="mt-6 mb-20 flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden w-64 shrink-0 md:block">
            <AccountSidebar />
          </aside>

          {/* Page Content */}
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}

export default AccountLayout;
