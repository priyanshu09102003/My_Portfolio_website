import React from 'react'
import {certificates} from '../../data/achievements'
import CertificateCard from '../ui/CertificateCard'
import FadeIn from '../animations/FadeIn'
import TitleHeader from './TitleHeader'

const Certificates = () => {
  return (
    <section id='achievements' className='relative py-15 bg-black overflow-hidden'>

      {/* Background blobs — matches Projects section style */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/3 left-0 w-96 h-96 bg-primary/40 opacity-20 rounded-full blur-3xl' />
        <div className='absolute bottom-1/3 right-0 w-96 h-96 bg-primary/40 opacity-20 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/3 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <FadeIn delay={0}>
          <TitleHeader sub="My Milestones" title="Certifications & Achievements" />
          <p className='text-lg text-white/60 max-w-2xl text-center mt-6 mx-auto'>
            Certifications, research publications, and hackathon wins , the proof of my work beyond just code — a track record built in public.
          </p>
        </FadeIn>

        {/* Certificates Grid */}
        <FadeIn delay={50}>
          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </FadeIn>

      </div>

    </section>
  )
}

export default Certificates