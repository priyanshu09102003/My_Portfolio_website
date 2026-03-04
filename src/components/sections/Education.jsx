import React from 'react'
import RadialGradient from '../backgrounds/RadialGradient'
import TitleHeader from './TitleHeader'
import FadeIn from '../animations/FadeIn'
import { educationData } from '@/data/education'


const Education = () => {
  return (
    <section className='relative py-20 bg-black overflow-hidden'>
        <RadialGradient variant='left' />
        <RadialGradient variant='about' />

        <div className='w-full h-full md:px-20 px-5 flex flex-col items-center justify-center space-y-6'>
            
            <FadeIn delay={200}>
                <TitleHeader title="Educational Background" sub="My Career Overview" />
            </FadeIn>

            <FadeIn delay={300}>
                <p className='text-sm text-white/70 leading-relaxed text-center max-w-xl'>
                    From classroom fundamentals to production-grade applications — a journey of continuous learning, building, and growing as a full-stack engineer and AI enthusiast.  
                </p>

            </FadeIn>
        </div>

        {/* Timeline */}

        <FadeIn delay={600}>
            <div className='relative mt-20'>
                <div className='timeline-glow absolute left-10 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32, 178, 166, 0.8)]'/> 

                {/* Education and Achievements */}

                <div className='space-y-12 relative'>
                    {educationData.map((edu, idx) => (
                        <div key={idx} className='relative flex items-start md:justify-center md:h-55'>

                            {/* Timeline DOT */}
                            <div className='absolute left-10 md:left-1/2 top-6 w-3 h-3 bg-primary rounded-full -translate-x-1/2'/>

                            {/* Content */}
                            <div className={`ml-20 mr-4 md:mr-0 md:ml-0 md:w-[40%] ${idx % 2 === 0 ? 'md:absolute md:right-[52%] md:pr-8 ' : 'md:absolute md:left-[52%] md:pl-8'}`}>

                                <FadeIn delay={idx * 200}>
                                <div className={`bg-white/5 border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer`}>

                                        <div className='p-3 bg-primary/10 rounded-xl w-fit mb-4'>
                                            <edu.icon className='w-5 h-5 text-primary' />
                                        </div>

                                        <span className='text-sm text-white/70 font-medium'>{edu.date}</span>
                                        <h3 className='text-xl font-bold'>{edu.title}</h3>
                                        <p className='text-sm font-semibold'>{edu.place}</p>
                                        <p className='text-sm mt-4 text-white/70'>{edu.description}</p>

                                        <div className='inline-flex items-center px-4 py-1.5 border border-primary/30 bg-primary/10 rounded-full w-fit mt-4'>
                                            <span className='text-sm text-primary font-medium'>{edu.highlight}</span>
                                        </div>
                                </div>
                                </FadeIn>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>
    </section>
  )
}



export default Education
