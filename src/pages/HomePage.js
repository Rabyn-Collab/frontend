import { useDispatch } from "react-redux"
import MovieList from "./MovieList"
import SongList from "./SongList"
import { reset } from "../features/commonAction";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div className="p-5 space-y-5">

      <button onClick={() => dispatch(reset())} className="bg-red-500 text-white px-2 py-1">Reset PlayLists</button>
      <SongList />
      <MovieList />


    </div>
  )
}
export default HomePage