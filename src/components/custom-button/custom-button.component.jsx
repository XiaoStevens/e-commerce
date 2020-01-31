import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ isGoogleSign, children, ...otherProps }) => (
  <button
    className={`${isGoogleSign ? "google-sign-in" : ""}  custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
