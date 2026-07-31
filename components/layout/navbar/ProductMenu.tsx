import { ProductMenuItems } from "@/data/productMenuItems";
import Link from "next/link";

type ProductMenuProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProductMenu({ setIsOpen }: ProductMenuProps) {
  return (
    <ul className="mt-2 ml-4 space-y-2 text-gray-700">
      {ProductMenuItems.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.title}>
            {item.disabled ? (
              <button
                type="button"
                disabled
                className="flex items-center gap-1 opacity-50 cursor-not-allowed"
              >
                <Icon variant="Outline" size={16} color="#505050" />
                <span className="font-light text-sm">{item.title}</span>
              </button>
            ) : (
              <Link
                href={`/products?category=${item.href!}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1"
              >
                <Icon variant="Outline" size={16} color="#505050" />
                <span className="font-light text-sm">{item.title}</span>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default ProductMenu;
