import React from 'react'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({project}) => {
  const navigate = useNavigate()
  const {title, description, image, technologies, demoUrl, category, githubUrl} = project;

  return (
    <div className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300'>

        <div className='relative h-64 overflow-hidden'>

            <img src={image} alt={title} className='w-full h-full object-contain transition-transform duration-700 group-hover:scale-110' />

            <div className='absolute bottom-4 right-4 flex items-center gap-3'>

              {demoUrl &&  (
                <a href={demoUrl} target='_blank' rel='noopener noreferrer'
                  className='p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:cursor-pointer'
                  title='Visit'
                >
                  <ExternalLink className='w-4 h-4 text-white' />
                </a>
              )}

              {githubUrl &&  (
                <a href={githubUrl} target='_blank' rel='noopener noreferrer'
                  className='p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:cursor-pointer'
                  title='View Code'
                >
                  <SiGithub className='w-4 h-4 text-white' />
                </a>
              )}

            </div>

            <div className='absolute top-4 left-4'>
              <span className='px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full '>
                {project.category}
              </span>
            </div>
          
        </div>

        <div className='p-6 space-y-4'>

          <div>
            <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-[#A8FF8D] transition-colors duration-300 cursor-pointer'>
              {title}
            </h3>
            <p className='text-white/60 text-sm leading-relaxed line-clamp-2'>
              {description}
            </p>
          </div>

          <div className='flex flex-wrap gap-2'>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className='px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/40 rounded-lg hover:bg-primary/20 transition-colors duration-300 hover:cursor-pointer'
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Read more button */}
          <button
            onClick={() => navigate(`/project/${project.id}`)}
            className='mt-2 px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:cursor-pointer'
          >
            Read More
          </button>

        </div>
    </div>
  )
}

export default ProjectCard