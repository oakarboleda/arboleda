import React from 'react'

interface QuoteIconProps {
  position: 'top-left' | 'bottom-right'
}

const QuoteIcon: React.FC<QuoteIconProps> = ({ position }) => {
  const positionClasses = {
    'top-left': 'absolute -top-3.5 left-[11px]',
    'bottom-right': 'absolute -bottom-3.5 right-[17px]'
  }

  return (
    <div className={`flex z-0 flex-col px-2 py-1 bg-gray-800 w-[41px] ${positionClasses[position]}`}>
      <img
        loading='lazy'
        src='https://cdn.builder.io/api/v1/image/assets/TEMP/9f613ab49b24d0ec380ce19b72fe860a228fdfcaa6b2810bc32ea8a56f40fcd4?apiKey=b67354e9a4e14c66bcfea601ac77d5bf&'
        alt=''
        className='object-contain aspect-[1.19] fill-gray-400 w-[25px]'
      />
    </div>
  )
}

export default QuoteIcon
