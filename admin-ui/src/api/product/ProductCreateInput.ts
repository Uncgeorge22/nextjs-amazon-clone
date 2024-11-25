import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors: InputJsonValue;
  description: InputJsonValue;
  discountedPrice: number;
  images?: InputJsonValue;
  title: string;
  titlePrice: number;
  variants: InputJsonValue;
};
