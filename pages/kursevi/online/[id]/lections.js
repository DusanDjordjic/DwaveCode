// MODELS
import CourseSchema from "../../../../models/Course";
// MIDDLEWARE
import { dbConnect } from "../../../../middleware/db/dbConnect";
const Lections = ({ text }) => {
  return <h1>{text}</h1>;
};
export default Lections;

export const getStaticProps = async () => {
  return {
    props: {
      text: "Helloee",
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
