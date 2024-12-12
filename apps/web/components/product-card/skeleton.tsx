export default function ProductCardSkeleton(): JSX.Element {
  return (
    <div className="rounded-lg p-4 bg-product-card space-y-3">
      <div
        className={`rounded pb-0 aspect-square space-y-2 overflow-hidden bg-gray-500 animate-pulse`}
      ></div>
      <div className="bg-gray-500 w-[10%] h-[24px] animate-pulse"></div>

      <div className="bg-gray-500 w-[45%] h-[24px] animate-pulse"></div>
    </div>
  );
}
