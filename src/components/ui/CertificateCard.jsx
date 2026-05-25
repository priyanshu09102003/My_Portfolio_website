import React from 'react'
import { ExternalLink } from 'lucide-react'

const CertificateCard = ({ certificate }) => {
  const { name, issuer, type, image, viewUrl } = certificate;

  return (
    <div className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300'>

      {/* Certificate Image */}
      <div className='relative h-48 overflow-hidden bg-white/5'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-3'
        />

        {/* Issuer badge */}
        <div className='absolute top-3 left-3'>
          <span className='px-3 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-sm border border-white/20 rounded-full'>
            {type}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className='p-5 space-y-4'>

        {/* Certificate Name — full, smaller than project titles */}
        <p className='text-sm font-semibold text-white leading-snug group-hover:text-[#A8FF8D] transition-colors duration-300'>
          {name}
        </p>

        <div className='flex items-center justify-between'>

          {/* Issuer */}
          <span className='text-xs text-white/40 font-medium'>
            {issuer}
          </span>

          {/* View Button */}
          {viewUrl && (
            <a
              href={viewUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-primary/20 hover:border-primary/40 hover:text-[#A8FF8D] transition-all duration-300'
            >
              <ExternalLink className='w-3 h-3' />
              View
            </a>
          )}

        </div>

      </div>

    </div>
  )
}

export default CertificateCard