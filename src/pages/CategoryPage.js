import { useLocation, useNavigate, useParams } from "react-router"
import { useCategoryMovieQuery } from "../features/movieApi";
import MovieList from "../components/MovieList";

const CategoryPage = ({ cat }) => {

  const { category } = useParams();
  const nav = useNavigate();
  const {
    isLoading,
    data,
    isError,
    error,
    isFetching
  } = useCategoryMovieQuery(cat ?? { category: category }, {
    // pollingInterval: 3000
  });




  return (
    <>
      <MovieList isLoading={isLoading} data={data} isError={isError} error={error} isFetching={isFetching} />
      <div className="flex space-x-7 mb-5 justify-center">
        <button disabled>Prev</button>
        <h1>{data?.page}</h1>
        <button onClick={() => nav(`/movie/${category}/${data.page + 1}`)}>Next</button>
      </div>
    </>
  )
}
export default CategoryPage