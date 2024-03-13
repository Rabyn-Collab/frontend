import { useLocation } from "react-router"
import { useCategoryMovieQuery } from "../features/movieApi";
import MovieList from "../components/MovieList";

const CategoryPage = () => {

  const { pathname } = useLocation();




  const { isLoading, data, isError, error } = useCategoryMovieQuery(pathname);


  return (
    <>
      <MovieList isLoading={isLoading} data={data} isError={isError} error={error} />
    </>
  )
}
export default CategoryPage