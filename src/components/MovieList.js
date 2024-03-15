import { useLocation, useNavigate } from "react-router"
import { imageUrl } from "../app/apis_cre."
import SkeletonCompo from "./SkeletonCompo"
import { useEffect } from "react";

const MovieList = ({ data, isLoading, isError, error, isFetching }) => {

  const nav = useNavigate();

  const { pathname } = useLocation();


  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);



  if (isLoading || isFetching) {
    return <SkeletonCompo />
  }



  return (
    <div className="p-4 grid grid-cols-4 gap-x-5 gap-y-6">

      {data && data.results.length === 0 ?
        <h1 className="col-span-4"> There are no movies that matched your query.</h1> : data.results.map((movie) => {
          return <div key={movie.id} className="shadow-2xl hover:scale-105 duration-300 delay-100 transition-all cursor-pointer">
            <img src={`${imageUrl}${movie.poster_path}`} alt="" />
            <div className="p-3 space-y-1">
              <h1 className="font-bold text-xl">{movie.title}</h1>
              <p>{movie.overview.substring(0, 100) + '....'}</p>
            </div>


          </div>
        })}


      <button onClick={() => nav('/popular/movie')}>GO TO new Pagwe</button>




    </div>
  )
}
export default MovieList