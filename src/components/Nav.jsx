import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-[10vh] bg-[#ffffff] w-full flex px-[19vh] py-2 gap-28 shadow-md'>
        <div className='flex text-[2.5vh] items-center font-semibold text-zinc-700 gap-12'>
            <img className='w-[15.5vh] max-sm:absolute max-sm:left-8  object-cover object-center' src="https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png" alt="" /> 
            <Link>Internships <i className="text-2xl ri-arrow-drop-down-line"></i></Link>  
            <Link>Jobs <i className="text-2xl ri-arrow-drop-down-line"></i></Link>  
            <Link>Courses <i className="text-2xl ri-arrow-drop-down-line"></i></Link>  
        </div>
      
        <div className='flex items-center gap-12 font-semibold text-[2.5vh] text-zinc-700'>
            <Link className='flex gap-2'> 
                <i className="text-xl ri-search-line"></i>
                <h1>Search</h1>
            </Link>
            <Link to="/login" className='px-3 text-[#00a5ec] border-2 rounded border-[#00a5ec]'>Login</Link>
            <Link to="/studentRegistration" className='px-2 py-1 text-white text-[16px] rounded bg-[#00a5ec]'>Candidate Sign-up</Link>
            <Link to="/employeRegistration" className='px-2 py-1 text-white text-[16px] rounded bg-[#00a5ec]'>Employer Sign-up</Link>

        </div>
    </div>
  )
}

export default Nav
