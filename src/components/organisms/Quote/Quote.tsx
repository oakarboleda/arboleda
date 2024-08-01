import React from 'react'
import QuoteIcon from './QuoteIcon'

interface QuoteComponentProps {
  quote: string
  author: string
}

const QuoteComponent: React.FC<QuoteComponentProps> = ({ quote, author }) => {
  return (
    <blockquote className='flex relative gap-2.5 items-start self-center p-8 mt-28 ml-20 bg-gray-800 border border-gray-400 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full'>
      <QuoteIcon position='top-left' />
      <QuoteIcon position='bottom-right' />
      <p className='z-0 text-2xl font-medium text-white max-md:max-w-full'>{quote}</p>
      <footer className='absolute right-px gap-2.5 p-4 text-2xl text-white border border-gray-400 border-solid bottom-[-63px]'>
        - {author}
      </footer>
    </blockquote>
  )
}

export default QuoteComponent
