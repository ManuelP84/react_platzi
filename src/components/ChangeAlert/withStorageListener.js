import { useState } from "react";

const withStorageListener = (WrappedComponent) => {
  const WrappedComponentWithStorageListener = (props) => {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TASKS_V1") {
        console.log("There were some changes!");
        setStorageChange(true);
      }
    });

    const toggle = () => {
      props.sincronizeTasks();
      setStorageChange(false);
    };

    return <WrappedComponent show={storageChange} toggle={toggle} />;
  };
  return WrappedComponentWithStorageListener;
};

export { withStorageListener };
