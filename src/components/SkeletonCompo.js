import SkeletonItem from "./SkeletonItem";



const SkeletonCompo = () => {

  return (
    <div className="p-4 grid grid-cols-4 gap-5">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />


    </div>
  );
}


export default SkeletonCompo