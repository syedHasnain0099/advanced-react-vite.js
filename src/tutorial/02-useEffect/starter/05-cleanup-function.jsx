import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    console.log("hmm, this is interesting");
    // const initID = setInterval(() => {
    //   console.log("This is interval");
    // }, 1000);
    // return () => clearInterval(initID);
  }, []);
  // useEffect(() => {
  //   // console.log('hmm, this is interesting');
  //   const someFunc = () => {
  //     // some logic here
  //   };
  //   window.addEventListener("scroll", someFunc);
  //   return () => window.removeEventListener("scroll", someFunc);
  // }, []);
  return <h1>hello there</h1>;
};
export default CleanupFunction;
