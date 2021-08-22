import { jsonify } from "../../../../lib/jsonify";
import { dbConnect } from "../../../../middleware/db/dbConnect";
import CourseSchema from "../../../../models/Course";
const Lections = ({ text }) => {
  return <h1>{text}</h1>;
};
export default Lections;

export const getStaticProps = (context) => {
  console.log(context);
  return {
    props: {
      text: "Helloee",
    },
  };
};
export const getStaticPaths = async () => {
  dbConnect();
  const courseArray = await CourseSchema.find({});
  return {
    paths: courseArray.map((item) => {
      return {
        params: {
          id: `${item._id}`,
        },
      };
    }),
    fallback: false,
  };
};
