import React, { useEffect } from "react";
import { useState } from "react";

const useFetchPerson = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  const fetchPerson = async () => {
    try {
      const resp = await fetch(url);
      // console.log(resp);
      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const user = await resp.json();
      setUser(user);
    } catch (error) {
      setIsError(true);
      // console.log(error);
    }
    // hide loading
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPerson();
  }, [url]);
  return {
    isLoading,
    user,
    isError,
  };
};

export default useFetchPerson;
