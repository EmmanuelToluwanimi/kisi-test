import { Router } from "express";
import { ROUTES } from "../utils/constants";
import { GetAllImages, UploadImageController } from "../controller";
import { uploadImage } from "../middleware";


const { IMAGES, INDEX } = ROUTES;

const router = Router();

router.get(INDEX, GetAllImages);
router.post(INDEX, uploadImage.single("file"), UploadImageController);


export default router;