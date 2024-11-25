import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FOLLOWERS_TITLE_FIELD } from "./FollowersTitle";

export const FollowersShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Followers"
          target="followerId"
          label="FollowersItems"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
