import React from 'react'

function HomeSectionCard() {
  return (
    <div className='cursor-pointer flex flex-col items-center 
    bg-white rounder-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>

        <div className='h-[13ewm] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt=''/>
        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-grey-900'>shirt</h3>
            <p className='mt-2 text-sm txt-grey-500'>Men t shirt and kurta</p>
        </div>

    </div>
  )
}

export default HomeSectionCard