import AuthModal from "@/src/components/features/auth/desktop/AuthModal";
import MobileAuthModal from "@/src/components/features/auth/mobile/MobileAuthModal";
import { Suspense } from "react";

function RegisterPage() {
  return (
    <Suspense fallback={null}>
      <div>
        <div className="hidden md:block">
          <AuthModal />
        </div>
        <div className="md:hidden">
          <MobileAuthModal />
        </div>
      </div>
    </Suspense>
  );
}

export default RegisterPage;
