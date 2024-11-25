import { Likes } from "../likes/Likes";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likesItems?: Array<Likes>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
