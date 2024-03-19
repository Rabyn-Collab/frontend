import { useLocation, useParams } from "react-router";
import { useMovieDetailQuery } from "../../features/movieApi"
import Video from "./Video"
import SkeletonItem from "../../components/SkeletonItem";
import { imageUrl, originalImageUrl } from "../../app/apis_cre.";

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading } = useMovieDetailQuery(id);
  if (isLoading) {
    return <SkeletonItem />
  }

  return (
    <div style={{ backgroundImage: `url(${originalImageUrl}${data?.backdrop_path})` }} className="flex-1  text-white bg-no-repeat bg-cover px-2 space-y-2 " >


      <Video id={id} />
      {data && <div>
        <h1>{data.title}</h1>
        <p>{data.tagline}</p>
        <p>{data.overview}</p>
      </div>}
    </div>
  )
}
export default Detail