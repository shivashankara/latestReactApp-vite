import UseTimmer from "../CustomHooks/useTimmer";

interface CountDownProps {
  initialsec: number;
}

function CountDown({ initialsec }: CountDownProps) {
  const { isActive, reset, second, start, stop } = UseTimmer(initialsec,true);

  return (
    <>
      <h2>Count Down</h2>
      <p>{second}s</p>
      <button onClick={start} disabled={isActive || second<=0}>
        start
      </button>
      <button onClick={stop} disabled={!isActive}>
        stop
      </button>
      <button onClick={reset}>reset</button>
    </>
  );
}
export default CountDown;
