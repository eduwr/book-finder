import React from "react";
import { Location } from "history";
import { Switch, Route, useLocation } from "react-router-dom";
import { Home } from "../pages";
import { DetailsModal } from "../components/organisms/DetailsModal";

type LocationState = { background?: Location<{} | null | undefined> };

const RouterSwitch = () => {
  const location = useLocation<{
    background?: Location<LocationState>;
  }>();
  const background = location.state?.background;
  return (
    <>
      <Switch location={background || location}>
        <Route path="/" exact component={Home}></Route>
      </Switch>
      {background && (
        <Route
          path="/book/:id"
          children={DetailsModal}
        />
      )}
    </>
  );
};

export default RouterSwitch;
