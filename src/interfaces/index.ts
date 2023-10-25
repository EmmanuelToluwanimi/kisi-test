import { Request, Response } from "express";

/**
 * This defines what our responses should look like
 * @type
 */
export type ResponsePacket = {
  res: Response;
  data?: any;
  message: string;
  error?: any;
  status: string;
  statusCode?: number;
};

export interface IServiceResponse {
  status?: string;
  statusCode?: number;
  message?: string;
}

export interface IArticle {
  title: string;
  description: string;
}

export interface ImagesResponseInterface extends IArticle {
  image: string;
}