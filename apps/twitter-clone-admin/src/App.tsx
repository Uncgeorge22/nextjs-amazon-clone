import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TweetsList } from "./tweets/TweetsList";
import { TweetsCreate } from "./tweets/TweetsCreate";
import { TweetsEdit } from "./tweets/TweetsEdit";
import { TweetsShow } from "./tweets/TweetsShow";
import { LikesList } from "./likes/LikesList";
import { LikesCreate } from "./likes/LikesCreate";
import { LikesEdit } from "./likes/LikesEdit";
import { LikesShow } from "./likes/LikesShow";
import { FollowersList } from "./followers/FollowersList";
import { FollowersCreate } from "./followers/FollowersCreate";
import { FollowersEdit } from "./followers/FollowersEdit";
import { FollowersShow } from "./followers/FollowersShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Twitter Clone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Tweets"
          list={TweetsList}
          edit={TweetsEdit}
          create={TweetsCreate}
          show={TweetsShow}
        />
        <Resource
          name="Likes"
          list={LikesList}
          edit={LikesEdit}
          create={LikesCreate}
          show={LikesShow}
        />
        <Resource
          name="Followers"
          list={FollowersList}
          edit={FollowersEdit}
          create={FollowersCreate}
          show={FollowersShow}
        />
      </Admin>
    </div>
  );
};

export default App;
