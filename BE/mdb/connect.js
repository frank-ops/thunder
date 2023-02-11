import mongoose from "mongoose";

const conn = (url) =>{
mongoose.set('strictQuery',true);
mongoose.connect(url).then(()=>{console.log("db connection established")})
.catch((e)=>{console.log(" connection failed")})
}
export default conn;