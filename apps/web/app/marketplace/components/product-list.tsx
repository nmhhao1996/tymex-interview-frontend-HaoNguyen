"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import productService from "../../../services/product";
import ProductCard, {
  ProductCardSkeleton,
} from "../../../components/product-card";
import { LoaderCircle, RotateCcw } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";

export default function ProductList(): JSX.Element {
  const searchParams = useSearchParams();
  const query = queryString.parse(searchParams.toString());

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["products", searchParams.toString()],
    queryFn: ({ pageParam }) => {
      return productService.getProducts({
        ...query,
        page: pageParam,
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    retry: false,
  });

  if (status === "pending") {
    return _renderSkeleton();
  }

  if (status === "error") {
    return _renderError();
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.pages.map((page) =>
          page.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
        <div className="flex justify-center"></div>
      </div>
      <div className="flex flex-col items-center">
        {isFetchingNextPage && <div></div>}
        {(hasNextPage || isFetchingNextPage) && (
          <Button
            className="h-16 w-80"
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? (
              <LoaderCircle className="w-10 h-10 text-white animate-spin" />
            ) : (
              "View more"
            )}
          </Button>
        )}
      </div>
    </div>
  );

  function _renderSkeleton() {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 16 }).map((_, index) => (
            <ProductCardSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      </div>
    );
  }

  function _renderError() {
    return (
      <div className="flex flex-col items-start gap-3">
        <p className="text-lg text-white">
          Oops! Something went wrong.
          <br />
          Our hamsters must have fallen off the wheel.
          <br />
          Please try again later!
        </p>
        <Button onClick={() => refetch()}>
          <RotateCcw />
        </Button>
      </div>
    );
  }
}
