import React from 'react'
import Button from './button'
import Image from 'next/image'

export default function Cta() {
  return (
    
    <div className="bg-white  dark:bg-gray-900">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-gradient-to-r from-primary-800 to-secondary-800 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                <span className="block">Give me a call</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-secondary-300 text-black dark:text-white">
                Call me now at 828-579-6104 or send me an email to bzandstra90@gmail.com.
              </p>
              <div className='mt-6'>
              <Button/>
              </div>
            </div>
          </div>
          
             <div className="aspect-w-3 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
              <Image 
              src='/phone.jpg'
              alt='person with a phone'
              width='640'
              height='480'
              />
              </div>
        </div>
      </div>
    </div>

  )
}
