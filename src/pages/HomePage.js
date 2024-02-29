import { useMemo, useState } from "react";
import HomeChild from "./HomeChild"

const HomePage = () => {

  const [data, setData] = useState(0);
  const [c, setC] = useState(90);


  const calculateNumber = useMemo(() => {
    console.log('run this function');
    return data * 2;
  }, [data]);

  // console.log(calculateNumber);
  // const m = calculateNumber();

  console.log('parent render');
  return (
    <div>
      <h1>Depend On {calculateNumber}</h1>

      <button onClick={() => setData((prev) => prev + 1)}>{data}</button>
      <br />
      <button onClick={() => setC((c) => c + 1)}>Not Realted To Child</button>

      <h1>saldjaslkdjsalkdj</h1>
      {/* <HomeChild data={data} /> */}

    </div>
  )
}
export default HomePage