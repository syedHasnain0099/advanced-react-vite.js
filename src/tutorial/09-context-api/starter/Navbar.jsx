import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";
export const NavBarContext = createContext();
//setting up custome hook

export const useAppContext = () => useContext(NavBarContext);
const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavBarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavBarContext.Provider>
  );
};
export default Navbar;
