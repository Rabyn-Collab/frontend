import { useNavigate, useParams } from "react-router";
import MovieList from "../components/MovieList";
import { useCategoryMovieQuery } from "../features/movieApi";

const MoviePage = () => {

  const { category, page } = useParams();
  const nav = useNavigate();

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

      <div className="flex space-x-7 mb-5 justify-center">
        <button onClick={() => nav(-1)}>Prev</button>
        {/* <button onClick={() => nav(`/movie/${category}/${data.page - 1}`, { replace: true })}>Prev</button> */}
        <h1>{data?.page}</h1>
        <button onClick={() => nav(`/movie/${category}/${data.page + 1}`)}>Next</button>
      </div>
    </>
  )
}
export default MoviePage