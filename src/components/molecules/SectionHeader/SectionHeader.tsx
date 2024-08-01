import React from 'react'
import ViewAllLink from '@/components/atoms/ViewAll/ViewAll'
import Header from '@/components/atoms/Header/Header'

interface SectionHeaderProps {
  title: string
  link?: boolean
}

export default function SectionHeader({ title, link }: SectionHeaderProps) {
  return (
    <section className='flex flex-wrap space-x-4 w-full font-medium max-md:max-w-full py-10'>
      <Header title={title} />
      {link ? <ViewAllLink /> : null}
    </section>
  )
}
