import axios from "axios";
const client = axios.create({
    baseURL: "https://api.github.com/user/",
});

export const getUserAPI =async(username)=>{
    const{data}=await client.get(username);
    console.log("data",data);
    return data;
};