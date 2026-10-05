import AuthModal from "@/src/components/features/auth/desktop/AuthModal";
import MobileAuthModal from "@/src/components/features/auth/mobile/MobileAuthModal";

function LoginPage() {
  return (
    <div>
      <div className="hidden md:block">
        <AuthModal />
      </div>
      <div className="md:hidden">
        <MobileAuthModal />
      </div>
    </div>
  );
}

export default LoginPage;
