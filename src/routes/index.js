import React from "react";
import { Switch } from "react-router-dom";

import MyRoute from "./MyRoute";
import Login from "../pages/login";
import Page404 from "../pages/Page404";
import Teste from "../pages/Teste";

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} isClosed />
      <MyRoute path="/login" component={Login} />
      <MyRoute path="/teste" component={Teste} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
