import { CategoryItemType } from "@/app/types";

type ProductCategoryCardProps = {
  category: CategoryItemType;
  active: boolean;
  onClick: () => void;
};

function ProductCategoryCard({
  category,
  active,
  onClick,
}: ProductCategoryCardProps) {
  const Icon = category.icon;

  return (
    <button
      disabled={category.disabled}
      onClick={onClick}
      className={`w-20 p-2 transition-colors ${
        category.disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${active ? "border-b-2 lg:border-b-[3px] border-b-primary" : ""}`}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <Icon
          variant="Outline"
          color="#444444"
          className="w-6 h-6 md:w-9 md:h-9 lg:w-12 lg:h-12"
        />

        <span className="font-light text-base md:text-lg lg:text-xl text-gray-800">
          {category.title}
        </span>
      </div>
    </button>
  );
}

export default ProductCategoryCard;
