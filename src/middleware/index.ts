import multer from "multer";
import { generateRandomNumber } from "../utils/helpers";
import { destination } from "../utils/constants";

const storage = multer.diskStorage({
  destination,
  filename: (req, file, cb) => {
    cb(null, generateRandomNumber()+file.originalname);
  },
});

export const uploadImage = multer({ storage });