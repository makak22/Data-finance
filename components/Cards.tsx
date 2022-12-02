import React from 'react'
import Image from 'next/image'
import Single from '../public/assets/single.png'
import Double from '../public/assets/double.png'
import Triple from '../public/assets/single.png'

export default function Cards() {
  return (
    <div id="price" className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <Image className='mx-auto mt-[-3rem] bg-white' src={Single} alt='' width={60} />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up  to 2 GB</p>
                </div>
                <button className='text-[#00df9a] bg-black w-[200px] font-medium rounded-md my-6 px-6 mx-auto py-3'>Start Trial</button>
            </div> 
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <Image className='mx-auto mt-[-3rem] bg-transparent' src={Double} alt='double' width={60} />
                <h2 className='text-2xl font-bold text-center py-8'>Partenership</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up  to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] font-medium rounded-md my-6 px-6 mx-auto py-3'>Start Trial</button>
            </div> 
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <Image className='mx-auto mt-[-3rem] bg-white' src={Triple} alt='triple' width={60} />
                <h2 className='text-2xl font-bold text-center py-8'>Enterprise</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up  to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] font-medium rounded-md my-6 px-6 mx-auto py-3'>Start Trial</button>
            </div> 
        </div>
    </div>
  )
}
