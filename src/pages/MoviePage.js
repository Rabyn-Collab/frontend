import { useParams } from "react-router";
import MovieList from "../components/MovieList";
import { useCategoryMovieQuery } from "../features/movieApi";

const MoviePage = () => {

  const { category, page } = useParams();

  const {
    isLoading,
    data,
    isError,
    error,
    isFetching
  } = useCategoryMovieQuery({ category: category, page: page });



  return (
    <>
      <MovieList isLoading={isLoading} data={data} isError={isError} error={error} isFetching={isFetching} />
    </>
  )
}
export default MoviePage