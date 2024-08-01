import React from 'react'

interface HeaderProps {
  title: string
}
export default function Header({ title }: HeaderProps) {
  return (
    <div className='flex flex-wrap gap-4 items-center text-3xl whitespace-nowrap max-md:max-w-full'>
      <div className='flex items-start self-stretch my-auto'>
        <span className='text-purple-400'>#</span>
        <span className='text-white'>{title}</span>
      </div>
      <div className='flex flex-1 shrink self-stretch my-auto h-px bg-purple-400 basis-0 min-w-[240px] w-[511px]' />
    </div>
  )
}
