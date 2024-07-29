import http from "@/api/interseptors";
import { saveAccessToken } from "@/helpers/auth-helpers";

export const auth = async (data)=>{
    try{
        const response = await http.post('/login', data)
        if(response.status === 200){
            saveAccessToken(response?.data?.access_token)
        }
        return response.status
    }catch(error){
        console.log(error)
    }
}