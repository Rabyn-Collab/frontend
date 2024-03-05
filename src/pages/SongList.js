import { useDispatch, useSelector } from "react-redux"
import { addSong, removeSong } from "../features/songSlice";
import { nanoid } from "@reduxjs/toolkit";

const SongList = () => {

  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const handleAddSong = () => {
    dispatch(addSong(nanoid()));
  }

  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  }



  return (
    <div >
      <div className="flex gap-5 mb-5">
        <h1 className="text-xl text-blue-gray-500">Song Playlist </h1>

        <button onClick={handleAddSong} className="bg-blue-gray-500 text-white px-2 rounded-sm ">Add Song To The List</button>
      </div>

      {songs.map((song, i) => {
        return <div key={i} className="flex space-x-4 mb-3 items-center">
          <h1>{song}</h1>
          <div onClick={() => handleSongRemove(song)} className="border-2 cursor-pointer border-red-700 px-2 ">X</div>

        </div>
      })}


    </div>
  )
}
export default SongList