"use client";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { authClient } from "@/src/lib/auth/auth-client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function AuthModal() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isRegisterPage = pathname === "/register";

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleSwitchMode = (mode: "login" | "register") => {
    const query = searchParams.toString();

    router.replace(query ? `/${mode}?${query}` : `/${mode}`);
  };

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-white">
      <div className="w-150 rounded-xl bg-white px-20 py-10 shadow-xl">
        <div className="flex h-11 w-full border-b-2 border-b-gray-300">
          <button
            onClick={() => handleSwitchMode("login")}
            className={`-mb-0.5 flex-1 cursor-pointer border-b-2 text-xl font-light ${
              !isRegisterPage
                ? "border-b-primary text-primary"
                : "border-b-transparent text-gray-600"
            }`}
          >
            Log in
          </button>

          <button
            onClick={() => handleSwitchMode("register")}
            className={`-mb-0.5 flex-1 cursor-pointer border-b-2 text-xl font-light ${
              isRegisterPage
                ? "border-b-primary text-primary"
                : "border-b-transparent text-gray-600"
            }`}
          >
            Create Account
          </button>
        </div>

        {!isRegisterPage ? (
          <LoginForm
            onSwitchToRegister={() => handleSwitchMode("register")}
            onClick={handleGoogleLogin}
          />
        ) : (
          <RegisterForm
            onSwitchToLogin={() => handleSwitchMode("login")}
            onClick={handleGoogleLogin}
          />
        )}
      </div>
    </div>
  );
}

export default AuthModal;
