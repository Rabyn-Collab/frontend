import { memo } from "react";

const HomeChild = ({ data }) => {
  console.log('also render ' + data);
  return (
    <div>HomeChild</div>
  )
}
export default memo(HomeChild)