import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { FollowersTitle } from "./FollowersTitle";

export const FollowersCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="follower.id"
          reference="Followers"
          label="follower"
        >
          <SelectInput optionText={FollowersTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="followersItems" reference="Followers">
          <SelectArrayInput
            optionText={FollowersTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="following" source="following" />
      </SimpleForm>
    </Create>
  );
};
