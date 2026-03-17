import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '@/data/projects'
import { projectDetails } from '@/data/projectDetails'
import { useState } from 'react'
import { ExternalLink, Settings, Layers, ChevronDown, ChevronUp, ArrowLeft, FileText } from 'lucide-react'
import { SiGithub } from 'react-icons/si'

const ProjectDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState(null)

    const project = projects.find(p => p.id === parseInt(id))
    const details = projectDetails[parseInt(id)]

    if (!project) return (
        <div className='min-h-screen bg-black flex items-center justify-center'>
            <p className='text-white'>Project not found.</p>
        </div>
    )

    const toggle = (section) => {
        setActiveSection(prev => prev === section ? null : section)
    }

    return (
        <div className='min-h-screen bg-black text-white'>

            {/* Top bar */}
            <div className='sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-black/90 backdrop-blur-md border-b border-white/10'>
                <button
                    onClick={() => navigate(-1)}
                    className='flex items-center gap-2 text-white/70 hover:text-white transition-colors hover:cursor-pointer'
                >
                    <ArrowLeft className='w-4 h-4' />
                    <span className='text-sm'>Back to Projects</span>
                </button>
            </div>

            {/* Content */}
            <div className='max-w-5xl mx-auto px-4 sm:px-6 py-10'>

                {/* Header */}
                <div className='flex flex-col md:flex-row gap-8 mb-10'>

                    {/* Image */}
                    <div className='w-full md:w-1/2 h-56 md:h-80 rounded-2xl overflow-hidden bg-black/40 shrink-0 relative'>
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black hidden md:block' />
                    </div>
                    {/* Info */}
                    <div className='flex-1 flex flex-col justify-center'>
                        <span className='inline-flex w-fit px-3 py-1 text-xs font-medium text-white bg-white/10 border border-white/20 rounded-full mb-4'>
                            {project.category}
                        </span>
                        <h1 className='text-2xl md:text-3xl font-bold text-white mb-3 leading-tight'>
                            {project.title}
                        </h1>
                        <p className='text-white/60 text-sm md:text-base leading-relaxed mb-6'>
                            {details?.tagline || project.description}
                        </p>
                        <div className='flex flex-wrap gap-3'>
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-2 px-5 py-2.5 bg-primary text-black text-sm font-semibold rounded-full hover:bg-primary/80 transition-all duration-300'
                                >
                                    <ExternalLink className='w-4 h-4' />
                                    View Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-300'
                                >
                                    <SiGithub className='w-4 h-4' />
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='h-px bg-white/10 mb-8' />

                {/* Accordions */}
                <div className='space-y-3'>

                    <div className='border border-white/10 rounded-xl overflow-hidden'>
                        <button
                            onClick={() => toggle('Description')}
                            className='w-full flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 transition-all duration-200 hover:cursor-pointer'
                        >
                            <div className='flex items-center gap-3'>
                                <FileText className='w-4 h-4 text-primary' />
                                <span className='text-white font-medium text-sm'>Project Description</span>
                            </div>
                            {activeSection === 'Description' ? <ChevronUp className='w-4 h-4 text-white/50' /> : <ChevronDown className='w-4 h-4 text-white/50' />}
                        </button>
                        {activeSection === 'Description' && (
                            <div className='px-5 py-4 bg-black/20 border-t border-white/10'>
                                <p className='text-white/70 text-sm leading-relaxed'>{details?.tagline || project.description}</p>
                            </div>
                        )}
                    </div>

                    {details?.features && (
                        <div className='border border-white/10 rounded-xl overflow-hidden'>
                            <button
                                onClick={() => toggle('Features')}
                                className='w-full flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 transition-all duration-200 hover:cursor-pointer'
                            >
                                <div className='flex items-center gap-3'>
                                    <Settings className='w-4 h-4 text-primary' />
                                    <span className='text-white font-medium text-sm'>Features Overview</span>
                                </div>
                                {activeSection === 'Features' ? <ChevronUp className='w-4 h-4 text-white/50' /> : <ChevronDown className='w-4 h-4 text-white/50' />}
                            </button>
                            {activeSection === 'Features' && (
                                <div className='px-5 py-4 bg-black/20 border-t border-white/10'>
                                    <ul className='space-y-3'>
                                        {details.features.map((f, i) => (
                                            <li key={i} className='flex items-start gap-3'>
                                                <Settings className='w-4 h-4 text-primary mt-0.5 shrink-0' />
                                                <div>
                                                    <span className='text-white text-sm font-medium'>{f.title}</span>
                                                    <p className='text-white/55 text-xs leading-relaxed mt-0.5'>{f.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {details?.techStack && (
                        <div className='border border-white/10 rounded-xl overflow-hidden'>
                            <button
                                onClick={() => toggle('TechStack')}
                                className='w-full flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 transition-all duration-200 hover:cursor-pointer'
                            >
                                <div className='flex items-center gap-3'>
                                    <Layers className='w-4 h-4 text-primary' />
                                    <span className='text-white font-medium text-sm'>Tech Stack</span>
                                </div>
                                {activeSection === 'TechStack' ? <ChevronUp className='w-4 h-4 text-white/50' /> : <ChevronDown className='w-4 h-4 text-white/50' />}
                            </button>
                            {activeSection === 'TechStack' && (
                                <div className='px-5 py-4 bg-black/20 border-t border-white/10'>
                                    <ul className='space-y-3'>
                                        {details.techStack.map((t, i) => (
                                            <li key={i} className='flex items-start gap-3'>
                                                <Layers className='w-4 h-4 text-primary mt-0.5 shrink-0' />
                                                <div>
                                                    <span className='text-white text-sm font-medium'>{t.tech}</span>
                                                    <p className='text-white/55 text-xs leading-relaxed mt-0.5'>{t.reason}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ProjectDetails