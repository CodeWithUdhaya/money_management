import axios from "./AxiosConfi";

export async function loginApi(user){

  try {
    return await axios.post("/public/login",user);
  } catch (error) {
    console.error("Error during login:", error.response.data);
    return error.response.data
  }
}

export async function  getExpenses(paramsObj) {
  
  try{
    return await axios.get("/user/expenses",{
      params:paramsObj,
      withCredentials: true, 
  })
  }
  catch(error){
    console.error("Error in getExpenses:",error.response.data);
    return error.response.data
  }
}