import { useState } from "react";

const ErrorExample = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h4>You clicked {counter} times</h4>
      <button className="btn" onClick={handleCounter}>
        Click me
      </button>
    </>
  );
};

export default ErrorExample;
