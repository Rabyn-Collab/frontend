import { memo } from "react";

const HomeChild = ({ handleClick }) => {
  console.log('also child render ' + handleClick);
  return (
    <div>HomeChild</div>
  )
}
export default memo(HomeChild)