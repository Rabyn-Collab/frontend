import { getNowPlaying, imageUrl } from "../app/apis_cre.";
import MovieList from "../components/MovieList";
import SkeletonCompo from "../components/SkeletonCompo";

import { useCategoryMovieQuery } from "../features/movieApi"

const HomePage = () => {


  const { isLoading, data, isError, error } = useCategoryMovieQuery(getNowPlaying);

  if (isLoading) {
    return <SkeletonCompo />
  }





  return (
    <>
      <MovieList isLoading={isLoading} data={data} isError={isError} error={error} />

    </>
  )



}
export default HomePage