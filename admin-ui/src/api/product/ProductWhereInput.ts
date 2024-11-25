import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  colors?: JsonFilter;
  description?: JsonFilter;
  discountedPrice?: FloatFilter;
  id?: StringFilter;
  images?: JsonFilter;
  title?: StringFilter;
  titlePrice?: FloatFilter;
  variants?: JsonFilter;
};
