import path from "path";
import fs from "fs";
import { IArticle } from "../interfaces";
import { Request } from "express";
import { GetRandomArticleIndex } from "../utils/helpers";


const imagesPath = path.join(__dirname, '../images');
const images = fs.readdirSync(imagesPath);

const articlesPath = path.join(__dirname, '../data/articles.json');
const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8')) as IArticle[];

export function GetImagesService(req:Request) {
  const data = images.map(file => {
    const randomIndex = GetRandomArticleIndex(articles)
    const _article = articles[randomIndex];
    return {
      ..._article,
      image: `${req.protocol}://${req.get('host')}/assets/${file}`
    }
  })

  return data;
}


export function UploadService(req:Request) {
  const path = req.file?.path.split("/")[2] as string;
  images.push(path);
  
  return GetImagesService(req)
}