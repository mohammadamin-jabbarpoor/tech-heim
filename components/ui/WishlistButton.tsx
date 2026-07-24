"use client";

import { Heart } from "iconsax-react";
import { useWishlistStore, WishlistItem } from "@/store/wishlist-store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type WishlistButtonProps = {
  product: WishlistItem;
};

function WishlistButton({ product }: WishlistButtonProps) {
  const router = useRouter();

  const addToWishlist = useWishlistStore((state) => state.addToWishlist);

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );

  const isInWishlist = useWishlistStore((state) =>
    state.items.some((item) => item.id === product.id),
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) {
      removeFromWishlist(product.id);

      return;
    }

    addToWishlist(product);

    toast.success("Added to wishlist", {
      action: {
        label: "View Wishlist",
        onClick: () => {
          router.push("/account/wishlist");
        },
      },
      classNames: {
        actionButton: "!bg-primary !text-white hover:!bg-primary-600",
      },
      duration: 4000,
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      className="cursor-pointer"
    >
      <Heart
        variant={isInWishlist ? "Bold" : "Outline"}
        size={24}
        color="#063A88"
      />
    </button>
  );
}

export default WishlistButton;
