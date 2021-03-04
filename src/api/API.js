import  axios  from "axios";

const serverInstance = axios.create({
    baseURL: "http://127.0.0.1:2497/api/cvshopping"
});
export default serverInstance;
