// MIDDLEWARE
import { dbConnect } from "../../../../../middleware/db/dbConnect";
// MODELS
import CourseSchema from "../../../../../models/Course";
const Lections = ({ text }) => {
  return <h1>{text}</h1>;
};
export default Lections;

export const getStaticProps = (context) => {
  return {
    props: {
      text: "Hellouuuuu",
    },
  };
};
export const getStaticPaths = async () => {
  // Connect to DB
  dbConnect();
  // Fetch CourseArray
  const courseArray = await CourseSchema.find({});
  return {
    paths: courseArray.map((item) => {
      return {
        params: {
          id: `${item._id}`,
        },
      };
    }),
    fallback: true,
  };
};
