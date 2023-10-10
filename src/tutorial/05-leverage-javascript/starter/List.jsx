import { Person } from "./Person";
import React from "react";
import { people } from "../../../data";
const List = () => {
  return (
    <div>
      {people.map((item) => {
        return <Person key={item.id} {...item} />;
      })}
    </div>
  );
};

export default List;
