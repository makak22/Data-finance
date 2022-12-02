import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center text-white h-24 max-w-[1248px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Data Finance</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>About</li>
            <li className='px-4 my-4 border rounded-md bg-white text-black'>Contact</li>
        </ul>
        <div className='hover:cursor-pointer block md:hidden' onClick={handleNav}>
            { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        <div className={nav ? 'fixed top-0 left-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Data Finance</h1>
            <ul className='pt-12 p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li> 
            </ul>
        </div>
    </div>
  )
}
