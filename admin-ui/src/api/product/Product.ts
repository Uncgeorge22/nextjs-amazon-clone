import { Category } from "../category/Category";
import { JsonValue } from "type-fest";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedPrice: number;
  id: string;
  images: JsonValue;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  variants: JsonValue;
};
