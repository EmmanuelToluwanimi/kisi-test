import { IArticle, ResponsePacket } from "../interfaces";


/**
 * Handles management of all failed requests
 * @param res http response object
 */
export function errorResponse({
  res,
  message,
  error,
  status,
  statusCode = 500,
}: ResponsePacket) {
  res.status(statusCode).json({ status, message, ...(error && { error }) });
}

/**
 * Handles sending responses to the front end.
 * @param res http response object
 */
export async function okResponse({
  res,
  message,
  data,
  status,
  statusCode = 200,
}: ResponsePacket) {
  res.status(statusCode).json({ status, message, ...(data && { data }) });
}

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1000000).toString();
};

export function GetRandomArticleIndex(params:IArticle[]) {
  return Math.floor(Math.random() * params.length);
  
}