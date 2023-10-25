

export interface IServiceResponse {
  status?: string;
  statusCode?: number;
  message?: string;
}


export interface IArticle {
  title: string;
  description: string;
}

export interface IResponseArticle {
  title: string;
  description: string;
  image: string;
}

export interface ImagesResponseInterface extends IArticle {
  image: string;
}