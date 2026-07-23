"use client";

import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

type AuthMode = "login" | "register";

type AuthModalProps = {
  onClose: () => void;
};

function AuthModal({ onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-150 rounded-xl bg-white py-10 px-20">
        <div className="w-full h-11 flex border-b-2 border-b-gray-300">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 font-light text-xl border-b-2 -mb-0.5 cursor-pointer ${
              mode === "login"
                ? "text-primary border-b-primary"
                : "text-gray-600 border-b-transparent"
            }`}
          >
            Log in
          </button>

          <button
            onClick={() => setMode("register")}
            className={`flex-1 font-light text-xl border-b-2 -mb-0.5 cursor-pointer ${
              mode === "register"
                ? "text-primary border-b-primary"
                : "text-gray-600 border-b-transparent"
            }`}
          >
            Create Account
          </button>
        </div>
        {mode === "login" ? (
          <LoginForm
            onClose={onClose}
            onSwitchToRegister={() => setMode("register")}
          />
        ) : (
          <RegisterForm
            onClose={onClose}
            onSwitchToLogin={() => setMode("login")}
          />
        )}
      </div>
    </div>
  );
}

export default AuthModal;
