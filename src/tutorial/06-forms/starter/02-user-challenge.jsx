import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    setPeople([...people, newUser]);
  };
  const removeUserHandler = (itemId) => {
    const filteredArray = people.filter((item) => item.id !== itemId);
    setPeople(filteredArray);
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {people.map((item) => {
        return (
          <>
            <h4 key={item.id}>{item.name}</h4>
            <button
              type="btn"
              className="btn"
              onClick={() => removeUserHandler(item.id)}
            >
              Remove User
            </button>
          </>
        );
      })}
    </div>
  );
};
export default UserChallenge;
