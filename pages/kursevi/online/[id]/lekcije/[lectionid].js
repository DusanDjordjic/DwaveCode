// MIDDLEWARE
import { dbConnect } from "../../../../../middleware/db/dbConnect";
// MODELS
import CourseSchema from "../../../../../models/Course";
const Lection = ({ text }) => {
  return <h1>{text}</h1>;
};
export default Lection;

export const getStaticProps = async (context) => {
  return {
    props: {
      text: "Helloaaaa",
    },
  };
};
export const getStaticPaths = async () => {
  // Connect to DB
  dbConnect();
  // Fetch CourseArray
  const courseArray = await CourseSchema.find({});
  // Make Paths from corses Ids and Lections Ids
  let paths = [];
  courseArray.forEach((course) => {
    course.lections.forEach((lection) => {
      paths.push({
        params: { id: `${course._id}`, lectionid: `${lection._id}` },
      });
    });
  });
  return {
    paths,
    fallback: true,
  };
};
