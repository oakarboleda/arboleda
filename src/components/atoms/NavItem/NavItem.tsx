import React from 'react'

interface NavItemProps {
  label: string
  isActive: boolean
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive }) => {
  return (
    <div className={`flex items-start ${isActive ? 'font-medium' : ''}`}>
      <span className='text-purple-400'>#</span>
      <span className={isActive ? 'text-white' : 'text-gray-400'}>{label}</span>
    </div>
  )
}

export default NavItem
