import React from 'react'
import Hero from '@/components/organisms/Hero/Hero'
import Quote from '@/components/organisms/Quote/Quote'
import SectionHeader from '@/components/molecules/SectionHeader/SectionHeader'
import Gallery from '@/components/organisms/Gallery/Gallery'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className='py-20 sm:py-32'>
        <Quote author='me' quote='I am a stupid quote' />
      </section>
      <section className='py-20 sm:py-32'>
        <SectionHeader title='projects' link={true} />
        <Gallery />
      </section>

      <section className='py-20 sm:py-32'>
        <SectionHeader title='skills' link={true} />
      </section>
      <section className='py-20 sm:py-32'>
        <SectionHeader title='about me' link={false} />
      </section>
      <section className='py-20 sm:py-32'>
        <SectionHeader title='contact' link={true} />
      </section>
    </main>
  )
}
