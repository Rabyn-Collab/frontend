
import {

  Typography,

} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { getPopular, getTopRated, getUpComing } from "../../app/apis_cre.";

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography

        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to={getPopular} className=" hover:text-blue-500">Popular</NavLink>
      </Typography>
      <Typography

        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to={getTopRated} className=" hover:text-blue-500">TopRated</NavLink>
      </Typography>


      <Typography

        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to={getUpComing} className=" hover:text-blue-500">UpComing</NavLink>

      </Typography>

    </ul>
  )
}
export default NavList