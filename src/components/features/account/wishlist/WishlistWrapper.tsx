import DesktopWishlist from "./DesktopWishlist";
import MobileWishlist from "./MobileWishlist";

function WishlistWrapper() {
  return (
    <div>
      <DesktopWishlist />
      <MobileWishlist />
    </div>
  );
}

export default WishlistWrapper;
