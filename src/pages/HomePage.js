import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { singleUser } from "../features/userSlice";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const HomePage = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

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
              <Button size="sm" onClick={() => {
                dispatch(singleUser(user.id));
                nav(`/editForm/${user.id}`)
              }}><i className="fa-solid fa-pen-to-square fa-lg"></i></Button>
              <Button color="pink" size="sm" onClick={handleOpen}><i className="fa-solid fa-trash fa-lg"></i></Button>
            </div>
          </div>

        </div>
      })}

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>





    </div>
  )
}
export default HomePage