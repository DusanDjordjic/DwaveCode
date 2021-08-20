import { dbConnect } from "../../middleware/db/dbConnect";
export default function (req, res) {
  if (req.method === "POST") {
    // Connect to database
    dbConnect();

    // Getting information from req.body
    const { name, email, password } = JSON.parse(req.body);
    try {
      // Chexk if user exists
      res.status(200).json({ message: "Hello", error: false });
    } catch (error) {
      res.status(400).json({ message: error, error: true });
    }
  } else {
    res.status(200).json({ message: "Not Post", error: true });
  }
}
