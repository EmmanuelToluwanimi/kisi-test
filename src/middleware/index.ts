import multer from "multer";
import { generateRandomNumber } from "../utils/helpers";

const storage = multer.diskStorage({
  destination: "./src/images",
  filename: (req, file, cb) => {
    cb(null, generateRandomNumber()+file.originalname);
  },
});

export const uploadImage = multer({ storage: storage });