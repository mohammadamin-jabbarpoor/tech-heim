"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

function getErrorMessage(error: string | null) {
  switch (error) {
    case "access_denied":
      return {
        title: "Login Cancelled",
        description:
          "Google sign in was cancelled. You can try again whenever you're ready.",
      };

    case "account_not_linked":
      return {
        title: "Account Already Exists",
        description:
          "An account with this email already exists using another sign in method.",
      };

    default:
      return {
        title: "Authentication Failed",
        description: "Something went wrong while signing in. Please try again.",
      };
  }
}

function AuthErrorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const error = searchParams.get("error");

  const message = useMemo(() => getErrorMessage(error), [error]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-error">{message.title}</h1>

          <p className="mt-3 text-gray-600 leading-7">{message.description}</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => router.push("/")}
            className="flex-1 h-11 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
          >
            Try Again
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex-1 h-11 rounded-lg bg-primary text-white hover:bg-primary-600 transition-colors cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthErrorPage;
