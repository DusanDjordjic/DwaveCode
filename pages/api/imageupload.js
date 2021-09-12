import multer from "multer";
import nextConnect from "next-connect";

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/Blog");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({
  storage: fileStorageEngine,
});
const uploadMiddleware = upload.single("image");

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happend! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
apiRoute.use(uploadMiddleware);
apiRoute.post((req, res) => {
  res.status(200).json({ data: `/Blog/${req.file.filename}` });
});
export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
