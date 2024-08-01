import React from 'react'

export type GalleryProps = {
  img?: string
  title?: string
  description?: string
  link?: string
}

export default function Gallery({ img, link, title, description }: GalleryProps) {
  return (
    <>
      <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
          <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col'>
            <a href='' className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
              <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>
                <img src='https://placeholder.co/300x300' alt='' className='object-cover w-full h-full' />
              </div>
              <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>
                Wines
              </h3>
            </a>
          </div>
          <div className='col-span-2 sm:col-span-1 md:col-span-2'>
            <a href='' className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'>
              <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>
                <img src='https://placeholder.co/300x300' alt='' className='object-cover w-full h-full' />
              </div>
              <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>
                Gin
              </h3>
            </a>
            <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
              <a href='' className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>
                  <img src='https://placeholder.co/300x300' alt='' className='object-cover w-full h-full' />
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>
                  Whiskey
                </h3>
              </a>
              <a href='' className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>
                  <img src='https://placeholder.co/300x300' alt='' className='object-cover w-full h-full' />
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>
                  Vodka
                </h3>
              </a>
            </div>
          </div>
          <div className='col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col'>
            <a href='' className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
              <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'>
                <img src='https://placeholder.co/300x300' alt='' className='object-cover w-full h-full' />
              </div>
              <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl'>
                Brandy
              </h3>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
