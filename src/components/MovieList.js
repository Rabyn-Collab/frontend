import { imageUrl } from "../app/apis_cre."
import SkeletonCompo from "./SkeletonCompo"

const MovieList = ({ data, isLoading, isError, error }) => {

  if (isLoading) {
    return <SkeletonCompo />
  }

  return (
    <div className="p-4 grid grid-cols-4 gap-x-5 gap-y-6">

      {data && data.results.map((movie) => {
        return <div key={movie.id} className="shadow-2xl hover:scale-105 duration-300 delay-100 transition-all cursor-pointer">
          <img src={`${imageUrl}${movie.poster_path}`} alt="" />
          <div className="p-3 space-y-1">
            <h1 className="font-bold text-xl">{movie.title}</h1>
            <p>{movie.overview.substring(0, 100) + '....'}</p>
          </div>


        </div>
      })}




    </div>
  )
}
export default MovieList