import { jsonify } from "../../../../lib/jsonify";
import { dbConnect } from "../../../../middleware/db/dbConnect";
import CourseSchema from "../../../../models/Course";
const Kurs = ({ course }) => {
  return <h1>{course.title}</h1>;
};

export const getStaticProps = async (context) => {
  const courseId = context.params.id;
  dbConnect();
  try {
    const course = await CourseSchema.findById(courseId);
    if (course) {
      return {
        props: {
          course: jsonify(course),
          error: false,
          errorText: "",
        },
      };
    } else {
      return {
        props: {
          course: {},
          error: true,
          errorText: "No course",
        },
      };
    }
  } catch (error) {
    return {
      props: {
        course: {},
        error: true,
        errorText: error,
      },
    };
  }
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
export default Kurs;
// [{ params: { id: "61227b9648dd08286c891850" } }]
