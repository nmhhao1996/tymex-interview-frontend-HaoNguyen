import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { querySchema } from "./schema";
import { useMemo } from "react";
import qs from "query-string";

export function useFilterData(): {
  filter: Partial<z.infer<typeof querySchema>>;
  hasFilter: boolean;
} {
  const searchParams = useSearchParams();

  const filter = useMemo(() => {
    const parsedRes = querySchema.safeParse(qs.parse(searchParams.toString()));
    if (parsedRes.success) {
      return parsedRes.data;
    }

    return {};
  }, [searchParams]);

  return {
    filter,
    hasFilter: Object.values(filter).some((val) => val !== undefined),
  }
}
