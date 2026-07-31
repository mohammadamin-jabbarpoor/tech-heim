"use client";

import { authClient } from "@/lib/auth/auth-client";
import MobileLoginForm from "./MobileLoginForm";
import MobileRegisterForm from "./MobileRegisterForm";
import { useState } from "react";
import { ArrowLeft } from "iconsax-react";

type AuthMode = "login" | "register";

type AuthModalProps = {
  onClose: () => void;
};

function MobileAuthModal({ onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>("login");

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      errorCallbackURL: "/auth-error",
    });
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-dvh bg-white overflow-y-auto">
      <div className="w-full mt-4 mb-40 px-6">
        <div onClick={onClose} className="flex justify-start">
          <ArrowLeft variant="Outline" size={24} color="#717171" />
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <h2 className="font-medium text-2xl text-primary-400">Tech Heim</h2>
        </div>
        <div className="w-full h-10 flex border-b-2 border-b-gray-300">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 font-light text-sm border-b-2 -mb-0.5 ${
              mode === "login"
                ? "text-primary border-b-primary"
                : "text-gray-600 border-b-transparent"
            }`}
          >
            Log in
          </button>

          <button
            onClick={() => setMode("register")}
            className={`flex-1 font-light text-sm border-b-2 -mb-0.5 ${
              mode === "register"
                ? "text-primary border-b-primary"
                : "text-gray-600 border-b-transparent"
            }`}
          >
            Create Account
          </button>
        </div>
        <div>
          {mode === "login" ? (
            <MobileLoginForm
              onClose={onClose}
              onSwitchToRegister={() => setMode("register")}
              onClick={handleGoogleLogin}
            />
          ) : (
            <MobileRegisterForm
              onClose={onClose}
              onSwitchToLogin={() => setMode("login")}
              onClick={handleGoogleLogin}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileAuthModal;
