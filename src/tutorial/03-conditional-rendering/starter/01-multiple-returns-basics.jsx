import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) return <h2>It is loading</h2>;
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
