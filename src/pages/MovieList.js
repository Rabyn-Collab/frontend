import { useDispatch, useSelector } from "react-redux"
import { addSong, removeSong } from "../features/songSlice";
import { nanoid } from "@reduxjs/toolkit";
import { addMovie, removeMovie } from "../features/movieSlice";

const MovieList = () => {

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const handleAddMovie = () => {
    dispatch(addMovie(nanoid()));
  }

  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  }



  return (
    <div >
      <div className="flex gap-5 mb-5">
        <h1 className="text-xl text-purple-500">Movie Playlist </h1>

        <button onClick={handleAddMovie} className="bg-black text-white px-2 rounded-sm ">Add Song To The List</button>
      </div>

      {movies.map((song, i) => {
        return <div key={i} className="flex space-x-4 mb-3 items-center">
          <h1>{song}</h1>
          <div onClick={() => handleMovieRemove(song)} className="border-2 cursor-pointer border-red-700 px-2 ">X</div>

        </div>
      })}


    </div>
  )
}
export default MovieList