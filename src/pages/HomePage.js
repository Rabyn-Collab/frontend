import { imageUrl } from "../app/apis_cre.";
import SkeletonCompo from "../components/SkeletonCompo";

import { useCategoryMovieQuery } from "../features/movieApi"

const HomePage = () => {

  const { isLoading, data, isError, error } = useCategoryMovieQuery();

  if (isLoading) {
    return <SkeletonCompo />
  }


  return (
    <div className="p-4 grid grid-cols-4 gap-5">

      {data && data.results.map((movie) => {
        return <div key={movie.id} className="shadow-2xl hover:scale-95 duration-300 delay-100 transition-all cursor-pointer">
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
export default HomePage