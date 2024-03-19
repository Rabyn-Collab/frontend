import SkeletonItem from "../../components/SkeletonItem";
import { useMovieVideoQuery } from "../../features/movieApi"

const Video = ({ id }) => {
  const { data, isLoading } = useMovieVideoQuery(id);
  if (isLoading) {
    return <SkeletonItem />
  }

  return (
    <div className=" ">
      {data && <iframe
        className="w-[50%] h-[300px]"
        allowFullScreen
        src={`https://www.youtube.com/embed/${data?.results[0]?.key}`} ></iframe>}

    </div >
  )
}
export default Video