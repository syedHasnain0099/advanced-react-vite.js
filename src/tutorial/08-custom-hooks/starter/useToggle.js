import React from "react";
import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const handleToggle = () => {
    setShow(!show);
  };
  return { show, handleToggle };
};

export default useToggle;
