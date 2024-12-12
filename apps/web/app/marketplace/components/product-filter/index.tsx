"use client";
import { Search, X } from "lucide-react";
import Input from "../../../../components/ui/input";
import Slider from "../../../../components/ui/slider";
import Select, { Option } from "../../../../components/ui/select";
import { Theme, Tier } from "../../../../models";
import z from "zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "../../../../lib/query-string";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../components/ui/button";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import productService from "../../../../services/product";
import {
  formSchema,
  TimeOptions,
  PriceOptions,
  formTransformer,
} from "./schema";
import { useFilterData } from "./hooks";

type ProductFilterProps = {
  onFilterChange?: () => void;
};

export default function ProductFilter({ onFilterChange }: ProductFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { filter: filterData, hasFilter } = useFilterData();

  const { data: maxPrice } = useQuery({
    queryKey: ["maxPrice"],
    queryFn: productService.getMaxPrice,
  });

  const { control, handleSubmit, reset, watch } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      q: undefined,
      price: undefined,
      tier: undefined,
      theme: undefined,
      time_sort: undefined,
      price_sort: undefined,
    },
  });

  const watchedPrice = watch("price");

  const ceiledMaxPrice =
    maxPrice !== undefined ? Math.ceil(maxPrice) : undefined;

  useEffect(() => {
    reset(filterData, {
      keepDefaultValues: true,
    });
  }, [filterData, reset]);

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      <div className="space-y-6">
        <div className="relative flex items-center">
          <Search className="text-input absolute left-4 h-6 w-6" />
          <Controller
            control={control}
            name="q"
            render={({ field }) => (
              <Input
                placeholder="Quick search"
                className="pl-12"
                value={field.value ?? ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>

        {ceiledMaxPrice !== undefined && (
          <div className="space-y-2" data-testid="price-slider">
            <label className="text-white font-semibold">PRICE</label>
            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <Slider
                  range
                  handleRender={(origin, props) => (
                    <Tooltip
                      defaultVisible
                      visible={props.dragging}
                      overlay={props.value}
                      placement="top"
                      zIndex={999999}
                      styles={{
                        inner: {
                          backgroundImage: "var(--primary-gradient)",
                          color: "white",
                          borderWidth: 0,
                        },
                      }}
                      key={props.index}
                    >
                      {origin}
                    </Tooltip>
                  )}
                  min={0.01}
                  max={ceiledMaxPrice}
                  step={0.0}
                  onChange={field.onChange}
                  value={field.value ?? undefined}
                />
              )}
            />
            <div>
              <span className="text-white">{watchedPrice?.[0] || 0} ETH</span>
              <span className="text-white float-right">
                {watchedPrice?.[1] || ceiledMaxPrice} ETH
              </span>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <label className="text-white font-semibold">TIER</label>

          <Controller
            control={control}
            name="tier"
            render={({ field }) => (
              <Select
                placeholder="All"
                value={field.value ?? undefined}
                onChange={(value) => field.onChange(value)}
              >
                {Object.entries(Tier).map(([key, value]) => (
                  <Option key={key} value={value}>
                    {value}
                  </Option>
                ))}
              </Select>
            )}
          />
        </div>

        <div className="space-y-2">
          <label className="text-white font-semibold">THEME</label>
          <Controller
            control={control}
            name="theme"
            render={({ field }) => (
              <Select
                placeholder="All"
                value={field.value ?? undefined}
                onChange={(value) => field.onChange(value)}
              >
                {Object.entries(Theme).map(([key, value]) => (
                  <Option key={key} value={value}>
                    {value}
                  </Option>
                ))}
              </Select>
            )}
          />
        </div>

        <div className="space-y-2">
          <label className="text-white font-semibold">TIME</label>
          <Controller
            control={control}
            name="time_sort"
            render={({ field }) => (
              <Select
                allowClear={false}
                defaultValue={TimeOptions["desc"]}
                placeholder="All"
                value={field.value ?? undefined}
                onChange={(value) => field.onChange(value)}
              >
                {Object.entries(TimeOptions).map(([key, value]) => (
                  <Option key={key} value={key}>
                    {value}
                  </Option>
                ))}
              </Select>
            )}
          />
        </div>

        <div className="space-y-2" data-testid="price-sorter">
          <label className="text-white font-semibold">PRICE</label>
          <Controller
            control={control}
            name="price_sort"
            render={({ field }) => (
              <Select
                placeholder="Default"
                value={field.value ?? undefined}
                onChange={(value) => field.onChange(value)}
              >
                {Object.entries(PriceOptions).map(([key, value]) => (
                  <Option key={key} value={key}>
                    {value}
                  </Option>
                ))}
              </Select>
            )}
          />
        </div>

        <div className="flex gap-10">
          {hasFilter && (
            <Button
              variant="link"
              className="px-0 h-11 flex items-center text-white gap-3"
              onClick={_onReset}
            >
              <div className="flex rounded-full h-5 w-5 bg-yellow-300 items-center justify-center">
                <X className="text-black" size={12} strokeWidth={4} />
              </div>
              <span>Reset filter</span>
            </Button>
          )}
          <Button className="w-32 h-11" type="submit">
            Search
          </Button>
        </div>
      </div>
    </form>
  );

  function _onSubmit(data: z.infer<typeof formSchema>) {
    const transformedData = formTransformer.parse(data);
    const oldQuery = qs.parse(searchParams);
    const newQuery = { ...oldQuery, ...transformedData };
    router.push(`${pathname}?${qs.stringify(newQuery)}`, {
      scroll: false,
    });
    onFilterChange?.();
  }

  function _onReset() {
    reset(
      {},
      {
        keepDefaultValues: true,
      }
    );
    onFilterChange?.();
    router.push(pathname, {
      scroll: false,
    });
  }
}
