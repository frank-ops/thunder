import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import conn from './mdb/connect.js';
import  postRoutes from './routes/postRoutes.js'
import thunderRoutes from './routes/thunderRoutes.js'


dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use("/api/v1/post",postRoutes);
app.use('/api/v1/thunder',thunderRoutes)
const start =async ()=>{ 
try{
conn(process.env.MONGODB_URL)
app.get('/',async(req,res)=>{
    res.send("hello world!")
});
app.listen("8080")
}
catch(err){
    console.log("application failed")
}
}
start();
