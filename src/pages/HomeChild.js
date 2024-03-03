import { memo } from "react";

const HomeChild = ({ person }) => {
  console.log('also child render ' + person);
  return (
    <div>HomeChild</div>
  )
}
export default memo(HomeChild)