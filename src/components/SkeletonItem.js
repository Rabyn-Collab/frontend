import {
  Button, Typography, CardBody,
  CardFooter,
  CardHeader, Card
} from "@material-tailwind/react";

const SkeletonItem = () => {
  return (
    <Card className="animate-pulse">
      <CardHeader
        shadow={false}
        floated={false}
        className="relative grid h-56 place-items-center bg-gray-300"
      >
        <div></div>
      </CardHeader>
      <CardBody>
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-3 w-56 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>

      </CardBody>

    </Card>
  )
}
export default SkeletonItem