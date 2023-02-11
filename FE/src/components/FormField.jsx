import React from 'react'

const FormField = ({labelname,type,name,placeholder,value,handlechange,issurpriseme,handlesurpriseme}) => {
  return (
    <div>
        <div className='flex items-center gap-2 mb-2'>
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-900"
            >
             {labelname}
            </label>
            {issurpriseme && 
            <button
            type="button"
            onClick={handlesurpriseme}
            className="font-semibold text-xs bg-[#ececf1] hover:bg-zinc-500 hover:text-white py-1 px-2 rounded-[5px] text-black"
            >
            surprise me
            </button>
            }
        </div>
        <input
               type={type}
               id={name}
               name={name}
               placeholder={placeholder}
               value={value}
               onChange={handlechange}
               required
               className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
            >

            </input>
    </div>
  )
}

export default FormField