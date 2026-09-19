import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="hidden md:block h-px w-full bg-linear-to-r from-[#0C68F4]/30 via-[#0C68F4]/70 to-[#0C68F4]/30" />
      <main className="mx-auto w-full min-w-0 max-w-full flex-1 px-6 sm:px-14.5 md:px-19.5 lg:px-24 xl:px-27 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-360">
        {children}
      </main>
    </>
  );
}
