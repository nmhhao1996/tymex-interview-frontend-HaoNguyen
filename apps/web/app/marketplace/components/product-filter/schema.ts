import { z } from "zod";
import { Tier, Theme } from "../../../../models";

export const TimeOptions = {
  desc: "Lastest",
  asc: "Oldest",
};

export const PriceOptions = {
  desc: "High to low",
  asc: "Low to high",
};

export const formSchema = z.object({
  q: z.string().optional().nullable(),
  price: z.array(z.number()).optional().nullable(),
  tier: z.nativeEnum(Tier).optional().nullable(),
  theme: z.nativeEnum(Theme).optional().nullable(),
  time_sort: z
    .enum(Object.keys(TimeOptions) as [string, ...string[]])
    .optional()
    .nullable(),
  price_sort: z
    .enum(Object.keys(PriceOptions) as [string, ...string[]])
    .optional()
    .nullable(),
});

export const querySchema = z
  .object({
    q: z.string().optional(),
    price_gte: z
      .string()
      .optional()
      .transform((v) => (v === undefined || isNaN(+v) ? undefined : +v)),
    price_lte: z
      .string()
      .optional()
      .transform((v) => (v === undefined || isNaN(+v) ? undefined : +v)),
    tier: z
      .string()
      .optional()
      .transform((v) =>
        z.nativeEnum(Tier).safeParse(v).success ? v : undefined
      ),
    theme: z
      .string()
      .optional()
      .transform((v) =>
        z.nativeEnum(Theme).safeParse(v).success ? v : undefined
      ),
    _sort: z.string().optional(),
    _order: z.string().optional(),
  })
  .transform((v) => {
    const data: z.infer<typeof formSchema> = {
      q: v.q,
      price:
        v.price_gte !== undefined && v.price_gte !== undefined
          ? [v.price_gte!, v.price_lte!]
          : undefined,
      tier: v.tier as Tier,
      theme: v.theme as Theme,
    };

    const order = v._order?.split(",") ?? [];
    v._sort?.split(",").forEach((sort, index) => {
      if (sort === "time") {
        data.time_sort = order[index];
      }
      if (sort === "price") {
        data.price_sort = order[index];
      }
    });

    return data;
  });

export const formTransformer = formSchema.transform((v) => {
  return {
    q: v.q || undefined,
    price_gte: v.price?.[0] ?? undefined,
    price_lte: v.price?.[1] ?? undefined,
    tier: v.tier ?? undefined,
    theme: v.theme ?? undefined,
    _sort: (() => {
      const sort = [] as string[];
      if (v.time_sort) {
        sort.push("time");
      }
      if (v.price_sort) {
        sort.push("price");
      }
      return sort.filter(Boolean).join(",") || undefined;
    })(),
    _order: (() => {
      const order = [] as string[];
      if (v.time_sort) {
        order.push(v.time_sort);
      }
      if (v.price_sort) {
        order.push(v.price_sort);
      }
      return order.filter(Boolean).join(",") || undefined;
    })(),
  };
});
