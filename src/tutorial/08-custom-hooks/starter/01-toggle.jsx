import useToggle from "./useToggle";
const ToggleExample = () => {
  const { show, handleToggle } = useToggle(false);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={handleToggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
