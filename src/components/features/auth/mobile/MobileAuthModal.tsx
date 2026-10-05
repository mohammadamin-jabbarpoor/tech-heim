"use client";

import MobileLoginForm from "./MobileLoginForm";
import MobileRegisterForm from "./MobileRegisterForm";
import { ArrowLeft } from "iconsax-react";
import { authClient } from "@/src/lib/auth/auth-client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function MobileAuthModal() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isRegisterPage = pathname === "/register";

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      errorCallbackURL: "/auth-error",
    });
  };

  const handleSwitchMode = (mode: "login" | "register") => {
    const query = searchParams.toString();

    router.replace(query ? `/${mode}?${query}` : `/${mode}`);
  };

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <div className="fixed inset-0 z-999 overflow-y-auto bg-white">
      <div className="mx-auto mt-4 mb-40 w-full max-w-full px-6">
        <div
          onClick={() => router.push(callbackUrl)}
          className="flex justify-start"
        >
          <ArrowLeft variant="Outline" size={24} color="#717171" />
        </div>

        <div className="mt-4 mb-6 flex justify-center">
          <h2 className="text-2xl font-medium text-primary-400">Tech Heim</h2>
        </div>

        <div className="flex h-10 w-full border-b-2 border-b-gray-300">
          <button
            onClick={() => handleSwitchMode("login")}
            className={`-mb-0.5 flex-1 border-b-2 text-sm font-light ${
              !isRegisterPage
                ? "border-b-primary text-primary"
                : "border-b-transparent text-gray-600"
            }`}
          >
            Log in
          </button>

          <button
            onClick={() => handleSwitchMode("register")}
            className={`-mb-0.5 flex-1 border-b-2 text-sm font-light ${
              isRegisterPage
                ? "border-b-primary text-primary"
                : "border-b-transparent text-gray-600"
            }`}
          >
            Create Account
          </button>
        </div>

        <div>
          {!isRegisterPage ? (
            <MobileLoginForm
              onSwitchToRegister={() => handleSwitchMode("register")}
              onClick={handleGoogleLogin}
            />
          ) : (
            <MobileRegisterForm
              onSwitchToLogin={() => handleSwitchMode("login")}
              onClick={handleGoogleLogin}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileAuthModal;
