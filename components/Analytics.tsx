import React from 'react'
import Laptop from '../public/assets/laptop.jpg'
import Image from 'next/image'

export default function Analytics() {
  return (
    <div id="company" className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image className='mx-auto my-4' src={Laptop} alt='' width={600} height={600} />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analystics Centrally</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non imperdiet urna. Vestibulum nec vulputate leo. Vestibulum ut interdum libero. Integer sollicitudin facilisis suscipit. Mauris tellus nibh, mollis id magna nec, 
                fermentum congue felis. Aliquam tristique id purus non consectetur. Sed hendrerit faucibus odio, aliquam dignissim felis aliquet in. Ut non pellentesque lectus, non interdum mauris. Nulla pellentesque metus vitae libero lacinia scelerisque. 
                Nam efficitur auctor quam sed varius. Phasellus molestie arcu eget interdum rhoncus.
            </p>
            <button className='text-[#00df9a] bg-black w-[200px] font-medium mx-auto rounded-md py-3 my-6 md:mx-0'>Get Started</button>
        </div>
        </div>
    </div>
  )
}
