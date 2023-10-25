const baseUrl = process.env.NODE_ENV === 'production' ? "https://www.kisi-api.com/api/images" : `http://localhost:6600/api/images`;

interface IServiceResponse {
  status?: string;
  statusCode?: number;
  message?: string;
  data:any
}


export async function GetImagesApi():Promise<IServiceResponse> {
  try {
    const res = await fetch(baseUrl);
    return await res.json();
  } catch (error) {
    throw error;
  }
}

export async function UploadImageApi(params:FormData):Promise<IServiceResponse> {
  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      body: params,
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
}