import { useLocation, useParams } from "react-router"
import { useCategoryMovieQuery } from "../features/movieApi";
import MovieList from "../components/MovieList";

const CategoryPage = ({ cat }) => {

  const { category } = useParams();

  const {
    isLoading,
    data,
    isError,
    error,
    isFetching
  } = useCategoryMovieQuery(cat ?? category, {
    // pollingInterval: 3000
  });




  return (
    <>
      <MovieList isLoading={isLoading} data={data} isError={isError} error={error} isFetching={isFetching} />
    </>
  )
}
export default CategoryPage