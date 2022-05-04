import { url_api } from "../utils/constants";

export async function loginApi(formData){
  try {
    const url =`${url_api}/auth/login`;
    const params ={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(formData),
    };
    const response = await fetch(url,params);
    console.log('response desde login api',response)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error);
    return null
  }
}