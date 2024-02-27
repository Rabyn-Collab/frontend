import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";





const NavBarCompo = ({ setQuery }) => {
  return (
    <Navbar

      color="blue-gray"
      className=" rounded-none bg-black px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>

        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"

          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>

        <div>

        </div>
      </div>
    </Navbar>
  )
}
export default NavBarCompo



