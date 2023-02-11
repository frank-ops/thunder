import express from 'express'
import * as dotenv from 'dotenv'
import { Configuration,OpenAIApi } from 'openai';

dotenv.config();
const router = express.Router();
const configuration= new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
})
const ai= new OpenAIApi(configuration);
router.route('/').get((req,res)=>{
    res.send("Hello I'm Thunder")
})
router.route('/').post(async(req,res)=>{
try{
    const {prompt} = req.body;
    const airesponse=await ai.createImage({
        prompt ,
        n:1,
        size:"1024x1024",
        response_format:"b64_json"
    });

    const image=airesponse.data.data[0].b64_json;
    res.status(200).json({photo:image});
}
catch(err){
        console.log("error found")
}
})
export default router;