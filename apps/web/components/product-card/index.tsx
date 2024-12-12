import { Heart } from "lucide-react";
import { Category, Product } from "../../models";
import Ethereum from "../ui/icons/Ethereum";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export { default as ProductCardSkeleton } from "./skeleton";

type ProductCardProps = {
  product: Product;
};

const backgroundGradient = {
  [Category.Mythic]: "bg-mythic-category-gradient",
  [Category.Legendary]: "bg-legendary-category-gradient",
  [Category.Epic]: "bg-epic-category-gradient",
  [Category.Rare]: "bg-rare-category-gradient",
} as Record<Category, string>;

export default function ProductCard({
  product,
}: ProductCardProps): JSX.Element {
  return (
    <div className="rounded-lg p-4 bg-product-card space-y-3">
      <div
        className={`rounded pb-0 aspect-square space-y-2 overflow-hidden bg-default-category-gradient`}
      >
        <div
          className={twMerge("p-2", backgroundGradient[product.category] ?? "")}
        >
          <div className="flex justify-between items-center">
            <div className="p-2.5 text-xs text-white rounded bg-product-card">
              {product.category}
            </div>
            <Heart
              className="text-white"
              fill={product.isFavorite ? "#fff" : "transparent"}
            />
          </div>
          <Image
            height={250}
            width={250}
            src={`/img/products/${product.imageId}.png`}
            alt={""}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-white">{product.title}</span>
        <div className="text-white flex text-sm items-center gap-1">
          <Ethereum />
          {product.price}
        </div>
      </div>

      <div className="flex items-center">
        <div className="relative">
          <div className="rounded-full overflow-hidden bg-white">
            <Image
              src={product.author.avatar}
              alt={""}
              height={24}
              width={24}
            />
          </div>
          <div
            className={twMerge(
              "absolute h-2 w-2 bottom-0 right-0 rounded-full",
              product.author.onlineStatus === "online" && "bg-green-500",
              product.author.onlineStatus === "busy" && "bg-red-500",
              product.author.onlineStatus === "idle" && "bg-orange-400"
            )}
          ></div>
        </div>
        <span className="text-white text-xs ml-2">{`${product.author.firstName} ${product.author.lastName}`}</span>
      </div>
    </div>
  );
}
