import { getNowPlaying, imageUrl } from "../app/apis_cre.";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import SkeletonCompo from "../components/SkeletonCompo";

import { useCategoryMovieQuery } from "../features/movieApi"

const HomePage = () => {



  const { isLoading, data, isError, error } = useCategoryMovieQuery(getNowPlaying);


  if (isLoading) {
    return <SkeletonCompo />
  }





  return (
    <>

      <div style={{ backgroundImage: "url('/images/barbie.jpg')" }} className="w-full h-[300px] flex flex-col justify-center px-11 bg-cover bg-no-repeat" >

        <div className="mb-5">
          <h1 className="text-white font-bold text-[2.5rem]">Welcome .</h1>
          <p className="text-white font-bold text-2xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <div>
          <Search />
        </div>

      </div>

      <MovieList isLoading={isLoading} data={data} isError={isError} error={error} />

    </>
  )



}
export default HomePage