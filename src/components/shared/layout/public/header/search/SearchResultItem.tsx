import Image from "next/image";
import { SearchResultProp } from "./SearchModal";
import { getImageUrl } from "@/src/lib/imageKit";

type SearchResultItemProps = {
  product: SearchResultProp;
};

function SearchResultItem({ product }: SearchResultItemProps) {
  const image = product.images[0];

  return (
    <div className="w-41 h-59.5 flex flex-col items-center justify-between p-2 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] bg-white">
      <div className="relative w-37.25 h-46.75">
        <Image
          src={getImageUrl(image.path)}
          alt={image.alt ?? product.title}
          fill
          className="object-contain"
        />
      </div>

      <p className="line-clamp-1">{product.title.slice(0, 18)}</p>
    </div>
  );
}

export default SearchResultItem;
