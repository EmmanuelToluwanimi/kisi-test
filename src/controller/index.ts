import { Request, Response } from "express";
import { errorResponse, okResponse } from "../utils/helpers";
import { GetImagesService, UploadService } from "../service";



export async function GetAllImages(req: Request, res: Response) {

  const data = GetImagesService(req);

  try {
    return okResponse({
      res,
      status: "success",
      statusCode: 200,
      message: "Successful request",
      data
    })

  } catch (error: any) {
    console.log(error?.message || error);
    return errorResponse({
      res,
      status: "fail",
      message: "Error occurred while registering user",
    })
  }

}

export async function UploadImageController(req: Request, res: Response) {

  const data = UploadService(req);
  
  try {
    return okResponse({
      res,
      status: "success",
      statusCode: 200,
      message: "Successful request",
      data
    })

  } catch (error: any) {
    console.log(error?.message || error);
    return errorResponse({
      res,
      status: "fail",
      message: "Error occurred while registering user",
    })
  }

}