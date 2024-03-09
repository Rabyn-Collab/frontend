import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { singleUser } from "../features/userSlice";

const HomePage = () => {

  const { users } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const nav = useNavigate();

  // email: val.email,
  // username: val.username,
  // subject: val.subject,
  // habits: val.habits,
  // country: val.country,
  // msg: val.msg,
  // imageRev: val.imageRev,
  // id: nanoid()
  return (
    <div className="p-10 flex flex-col gap-5">

      {users.map((user) => {
        return <div key={user.id} className="border border-black w-[300px] ">
          <img className="w-[300px]" src={user.imageRev} alt="" />

          <div className="p-2">
            <h1>{user.username}</h1>
            <h4>{user.email}</h4>
            <div className="mt-2 flex justify-end space-x-4">
              <button onClick={() => {
                dispatch(singleUser(user.id));
                nav(`/editForm/${user.id}`)
              }}><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
              <button><i className="fa-solid fa-trash fa-lg"></i></button>
            </div>
          </div>

        </div>
      })}








    </div>
  )
}
export default HomePage