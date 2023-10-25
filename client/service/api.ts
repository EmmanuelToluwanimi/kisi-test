

export async function GetImagesApi():Promise<IServiceResponse> {
  try {
    const res = await fetch("http://localhost:1234/api/images");
    return await res.json();
  } catch (error) {
    throw error;
  }
}

export async function UploadImageApi(params:FormData):Promise<IServiceResponse> {
  try {
    const res = await fetch("http://localhost:1234/api/images", {
      method: "POST",
      body: params,
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
}