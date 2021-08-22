import { jsonify } from "../../../../../lib/jsonify";
import { dbConnect } from "../../../../../middleware/db/dbConnect";
import CourseSchema from "../../../../../models/Course";
const Lection = ({ text }) => {
  return <h1>hiii</h1>;
};
export default Lection;

export const getStaticProps = async (context) => {
  console.log("AAAAA", context);
  return {
    props: {
      text: "Helloaaaa",
    },
  };
};
export const getStaticPaths = async () => {
  dbConnect();
  const courseArray = await CourseSchema.find({});
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
    fallback: false,
  };
};
// : [
//     { params: { id: "61227b9648dd08286c891850", lectionid: "1" } },
//     { params: { id: "61227b9648dd08286c891850", lectionid: "2" } },
//   ],
