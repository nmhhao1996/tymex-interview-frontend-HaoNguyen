import { renderHook } from "@testing-library/react";
import { useFilterData } from "../hooks";
import { useSearchParams } from "next/navigation";
import qs from "../../../../../lib/query-string";
import { Tier } from "../../../../../models";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

jest.mock("../../../../../lib/query-string", () => ({
  parse: jest.fn(),
}));

describe("useFilterData", () => {
  it("should return empty filter and hasFilter as false when searchParams are empty", () => {
    (useSearchParams as jest.Mock).mockReturnValue("");
    (qs.parse as jest.Mock).mockReturnValue({});

    const { result } = renderHook(() => useFilterData());

    expect(result.current.filter).toEqual({});
    expect(result.current.hasFilter).toBe(false);
  });

  it("should return parsed filter and hasFilter as true when searchParams are valid", () => {
    const validParams = { tier: Tier.Basic };
    (useSearchParams as jest.Mock).mockReturnValue("?tier=Basic");
    (qs.parse as jest.Mock).mockReturnValue(validParams);

    const { result } = renderHook(() => useFilterData());

    expect(result.current.filter).toEqual(validParams);
    expect(result.current.hasFilter).toBe(true);
  });

  it("should return empty filter and hasFilter as false when searchParams are invalid", () => {
    (useSearchParams as jest.Mock).mockReturnValue("?invalid=params");
    (qs.parse as jest.Mock).mockReturnValue({ invalid: "params" });

    const { result } = renderHook(() => useFilterData());

    expect(result.current.filter).toEqual({});
    expect(result.current.hasFilter).toBe(false);
  });

  it("should return filter including price and hasFilter as true when searchParams contains price_gte & price_lte", () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      "?price_gte=100&price_lte=200",
    );
    (qs.parse as jest.Mock).mockReturnValue({
      price_gte: "100",
      price_lte: "200",
    });

    const { result } = renderHook(() => useFilterData());

    expect(result.current.hasFilter).toBe(true);

    expect(result.current.filter).toEqual({
      price: [100, 200],
    });
  });

  it("should return filter including time_sort and price_sort and hasFilter as true when searchParams contains _sort=createdAt,price and _order=asc,desc", () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      "?_sort=createdAt,price&_order=asc,desc",
    );
    (qs.parse as jest.Mock).mockReturnValue({
      _sort: "createdAt,price",
      _order: "asc,desc",
    });

    const { result } = renderHook(() => useFilterData());

    expect(result.current.hasFilter).toBe(true);

    expect(result.current.filter).toEqual({
      time_sort: "asc",
      price_sort: "desc",
    });
  });
});
