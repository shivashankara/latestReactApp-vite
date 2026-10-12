import UseTimmer from "../CustomHooks/useTimmer";

function Timmer() {
  const { isActive, reset, second, start, stop } = UseTimmer();

  return (
    <>
      <h2>Stop Watch</h2>
      <p>{second}s</p>
      <button onClick={start} disabled={isActive}>
        start
      </button>
      <button onClick={stop} disabled={!isActive}>
        stop
      </button>
      <button onClick={reset}>reset</button>
    </>
  );
}
export default Timmer;