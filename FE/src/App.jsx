import React from 'react'
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import {Home,CreateImage} from './pages'
import { thunder } from './assets'

const App = () => {
  return (
   <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
       <Link to="/">
        <img src={thunder} alt='icon' className='w-28 object-contain rounded-xl'/>
       </Link>
       <Link to='/create-img' className='font-inter font-medium bg-[#6469ff] hover:bg-sky-700 text-white px-4 py-2 rounded-md'>
             Generate
       </Link>
    </header>
    <main className='sm:p-8 px-4 py- w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create-img' element={<CreateImage/>}/>
     </Routes>
    </main>
   </BrowserRouter>
  )
}

export default App;