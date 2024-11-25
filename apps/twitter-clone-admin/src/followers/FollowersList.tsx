import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FOLLOWERS_TITLE_FIELD } from "./FollowersTitle";

export const FollowersList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FollowersItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="follower"
          source="followers.id"
          reference="Followers"
        >
          <TextField source={FOLLOWERS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="following" source="following" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
