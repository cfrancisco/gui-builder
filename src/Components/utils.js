import React from "react";

function applyTheme(WrappedComponent, hookStyle) {
  return props => {
    const classes = hookStyle();
    return (
      <WrappedComponent className={classes.root} {...props}>
        {props.children}
      </WrappedComponent>
    );
  };
}

export default applyTheme;
