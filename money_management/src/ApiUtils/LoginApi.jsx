import axios from "../ApiUtils/AxiosConfi";

export async function loginApi(user){

  try {
    const response = await axios.post("https://money-management-latest-1.onrender.com/public/login", user);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error during login:", error.response.data);
    return error.response.data
  }
}