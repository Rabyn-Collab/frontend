import { useLocation, useParams } from "react-router";
import { useMovieDetailQuery } from "../../features/movieApi"
import Video from "./Video"
import SkeletonItem from "../../components/SkeletonItem";

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading } = useMovieDetailQuery(id);
  if (isLoading) {
    return <SkeletonItem />
  }

  return (
    <div className="p-10 space-y-4">
      <Video id={id} />
      {data && <div className="absolute top-0">
        <h1>{data.title}</h1>
        <p>{data.tagline}</p>
        <p>{data.overview}</p>
      </div>}
    </div>
  )
}
export default Detail