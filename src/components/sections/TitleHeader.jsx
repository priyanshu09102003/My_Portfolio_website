import { Briefcase } from 'lucide-react'
import React from 'react'

const TitleHeader = ({title, sub}) => {
  return (
   <div className='flex flex-col items-center gap-5'>
        <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit'>

            <Briefcase className='w-6 h-6 text-primary' />
            <span className='text-sm text-primary font-medium'>
                {sub}
            </span>
        </div>

        <div className='text-3xl lg:text-5xl text-center'>

            {title}

        </div>
   </div>
  )
}

export default TitleHeader
