import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeSingleItem = (id) => {
    const removeItem = people.filter((item) => item.id !== id);
    setPeople(removeItem);
  };
  const clearList = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((item) => {
        const { id, name } = item;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              className="btn"
              type="button"
              onClick={() => removeSingleItem(id)}
            >
              Remove Item
            </button>
          </div>
        );
      })}
      <br />
      <br />
      <button className="btn" type="button" onClick={() => clearList()}>
        Clear List
      </button>
    </div>
  );
};

export default UseStateArray;
