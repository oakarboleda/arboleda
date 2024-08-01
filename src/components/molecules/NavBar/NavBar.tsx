import React from 'react'
import NavItem from '@/components/atoms/NavItem/NavItem'

export type NavbarProps = {
  name: string
}
const navItems = [
  { label: 'home', isActive: true },
  { label: 'works', isActive: false },
  { label: 'about-me', isActive: false },
  { label: 'contacts', isActive: false }
]
export default function Navbar({ name }: NavbarProps) {
  return (
    <header className='flex flex-wrap gap-5 justify-between items-end pt-8 pb-2 w-full text-base whitespace-nowrap max-md:max-w-full'>
      <div className='flex gap-2 items-center font-bold text-white'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/888efdb44765f6ba8c61b2088ef66ecd0e4b9b21a1a1eab293da70a86ec86749?apiKey=b67354e9a4e14c66bcfea601ac77d5bf&'
          alt=''
          className='object-contain shrink-0 self-stretch my-auto w-4 aspect-square'
        />
        <span className='self-stretch my-auto'>{name}</span>
      </div>
      <nav className='flex gap-5 items-start min-w-[240px]'>
        {navItems.map(item => (
          <NavItem key={item.label} label={item.label} isActive={item.isActive} />
        ))}
        {/*<LanguageSelector />*/}
      </nav>
    </header>
  )
}
