import { Product } from "@medusajs/medusa";

export type FeaturedProductType = {
  id: string;
  title: string;
  handle: string;
  thumbnail?: string;
};

export type ProductPreviewType = {
  id: string;
  title: string;
  subtitle: string | null;
  handle: string | null;
};

export type InfiniteProductPageType = {
  response: {
    products: Product[];
    count: number;
  };
};
