import { Facebook, Google } from "iconsax-react";

function AuthSocialButtons({ onGoogleClick }: { onGoogleClick: () => void }) {
  return (
    <div className="w-full flex items-center justify-between gap-6">
      <button
        type="button"
        onClick={onGoogleClick}
        className="w-full flex items-center justify-center py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Google variant="Bold" size={24} color="currentColor" />
          <p>Google</p>
        </div>
      </button>

      <button
        type="button"
        className="w-full flex items-center justify-center py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300"
      >
        <div className="flex items-center gap-2">
          <Facebook variant="Bold" size={24} color="currentColor" />
          <p>Facebook</p>
        </div>
      </button>
    </div>
  );
}

export default AuthSocialButtons;
