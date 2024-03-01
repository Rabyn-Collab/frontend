import { useCallback, useEffect, useMemo, useState } from "react";
import HomeChild from "./HomeChild"

const HomePage = () => {

  const [n, setN] = useState(0);

  const [show, setSHow] = useState(false);

  const handleClick = useCallback(() => {
    // console.log('kasjdksad');
    setSHow(!show);
  }, [show])



  const age = 90;
  console.log('parent render');
  return (
    <div>

      <button onClick={() => setN(n + 1)}>CountPlus</button>
      <br />

      <button onClick={handleClick}>CountPlus1</button>

      <HomeChild handleClick={handleClick} />

    </div>
  )
}
export default HomePage