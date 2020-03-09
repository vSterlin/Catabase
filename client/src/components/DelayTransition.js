import React from "react";

import history from "../history";

const DelayTransition = WrappedComponent => props => {

  const redirectWithDelay = (delayTime, redirectTo) => {
    setTimeout(() => {
      history.push(redirectTo);
    }, delayTime);
  };

  return <WrappedComponent {...props} redirectWithDelay={redirectWithDelay} />;
};

export default DelayTransition;
