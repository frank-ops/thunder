import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField,Loader } from '../components'
const CreateImage = () => {
    const navigate =useNavigate();
    const [form ,setForm]=useState({
        name:"",
        prompt:"",
        photo:""
    })
    const generateres = async () =>{
         if(form.prompt){
            try{
                setGenImg(true);
                const res=await fetch("http://localhost:8080/api/v1/thunder",{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      prompt: form.prompt,
                    }),
                  })
                  const data = await res.json();
                  setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
                  
            }
            catch(err){
                      console.log("Opps! something Wrong ....Sorry");
            }
            finally{
                setGenImg(false);
            }
         }
         else{
            alert("please enter the prompt")
         }
    }
    const handlesubmit =async (e) =>{
        e.preventDefault();
        if(form.prompt && form.photo){
            SetLoading(true)
            try{
                 const res= await fetch("http://localhost:8080/api/v1/post",{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                   body:JSON.stringify(form),
                 })
                 await res.json();
                 navigate('/');
            }
            catch(err){
                     alert("unable to share");
            }
            finally{
                SetLoading(false);
            }
        }
        else{
            alert("please enter the details completely")
        }
    }
    const handlechange = (e) =>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
    }
    const handlesurpriseme = () =>{
    const random=getRandomPrompt(form.prompt);
    setForm({...form,prompt:random})
    }
    const [genimg,setGenImg]=useState(false);
    const [loading,SetLoading]=useState(false);
  return (
    <section className='max-w-7xl mx-auto'>
        <>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>
                create
            </h1>
            <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>create visually appealing  and stunning images  by AI</p>
        </>
        <form className='mt-16  max-w-3xl ' onSubmit={handlesubmit}>
            <div className='flex flex-col gap-5'>
               <FormField
                   labelname='your Name' 
                   type='text'
                   name='name' 
                   value={form.name}
                   placeholder='franklin'   
                   handlechange={handlechange}
                   />
                   <FormField
                   labelname='prompt' 
                   type='text'
                   name='prompt' 
                   value={form.prompt}
                   placeholder=  'a painting of a fox in the style of Starry Night'
                   handlechange={handlechange}
                   issurpriseme
                   handlesurpriseme={handlesurpriseme}
                   />
                   <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus-ring-blue-500 focus:border-blue-500 w-64  h-64 flex justify-center items-center  '>
                        {
                            form.photo?(
                                <img src={form.photo}
                                alt ={form.prompt}
                                className="w-full h-full object-contain rounded-md "
                                />
                            ):(
                                <img src={preview}
                                alt ="preview "
                                className="w-9/12 h-9/12 object-contain"
                                />
                            )
                        }
                        {
                            genimg &&(
                             <div  className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                                <Loader/>
                             </div>
                            )
                        }
                   </div>
            </div>
            <div className='mt-5 flex gap-5'>
              <button
              type="button"
              onClick={generateres}
              className='text-center hover:bg-green-700  text-white font-medium rounded-md text-sm bg-green-600 w-full xs:w-auto px-10 py-2.5'
              >
                generate
              </button>
            </div>
            <div className='mt-10'>
                <p className='mt-2  text-[#666e75] text-[14px]'>you can share the created image in the community</p>
                <button type="submit" className='mt-3 text-center hover:bg-sky-700  text-white font-medium rounded-md text-sm bg-sky-600 w-full xs:w-auto px-10 py-2.5'>
                  {loading?'sharing':'share'}
                </button>
            </div>
        </form>
    </section>
  )
}

export default CreateImage