import React from 'react'
import RadialGradient from '../backgrounds/RadialGradient'
import TitleHeader from './TitleHeader'
import FadeIn from '../animations/FadeIn'
import { expCards } from '@/data/education'

const Education = () => {
  return (
    <section className='relative py-20 bg-black overflow-hidden'>
        <RadialGradient variant='left' />

        <div className='w-full h-full md:px-20 px-5 flex flex-col items-center justify-center'>
            
            <FadeIn delay={200}>
                <TitleHeader title="Education & Achievements" sub="My Career Overview" />
            </FadeIn>

            <FadeIn delay={300}>
                <div className='relative mt-8'>
                    <div className='relative z-50 xl:space-y-32 space-y-15'>
                        {expCards.map((card) => (
                            <div key={card.title} className='text-white border border-white p-4'>
                                {card.title}
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
  )
}



export default Education
