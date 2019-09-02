import React from "react";
import { Button as _Button } from "@material-ui/core";

function HOC(WrappedComponent) {
  return props => {
    return (
      <WrappedComponent {...props}>Updated: {props.children}</WrappedComponent>
    );
  };
}

export default HOC(_Button);
