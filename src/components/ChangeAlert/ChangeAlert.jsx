import React from "react";
import { withStorageListener } from "./withStorageListener";

const ChangeAlert = ({ show, toggle }) => {
  if (show) {
    return (
      <>
        <p>Is there any change????</p>
        <button onClick={() => toggle(false)}>Refresh!</button>
      </>
    );
  } else {
  }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
