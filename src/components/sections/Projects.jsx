import React, {useState, useRef} from 'react'
import { projects, categories } from '@/data/projects'
import { Briefcase, Sparkles, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight, Group, Workflow } from 'lucide-react'
import ProjectCard from '../ui/ProjectCard'
import FadeIn from '../animations/FadeIn'
import TitleHeader from './TitleHeader'




const Projects = () => {

    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const filteredProjects = activeCategory === "All"
        ?projects
        :projects.filter(project => project.category === activeCategory);

        //Reset carousel when the category is changed
        const handleCategoryChange = (category) => {
            setActiveCategory(category);
            setCurrentIndex(0);
            if(scrollContainerRef.current){
                scrollContainerRef.current.scrollTo({left: 0, behavior: 'smooth'})
            }
        };

        const scrollToIndex = (index)=> {
            setCurrentIndex(index);
            if(scrollContainerRef.current){
                const container = scrollContainerRef.current;
                const cardWidth = container.offsetWidth/3;
                container.scrollTo({
                    left: cardWidth * index,
                    behavior: 'smooth'
                })
            }
        }

        const nextSlide = () => {
            const maxIndex = Math.max(0, filteredProjects.length - 3);
            const newIndex = Math.min(currentIndex+1, maxIndex);
            scrollToIndex(newIndex)
        }

        const prevSlide = () => {
            const nextIndex = Math.max(currentIndex-1, 0);
            scrollToIndex(nextIndex)
        }

        //Category Icons mapping

        const categoryIcons = {
            'All': Target,
            'Fullstack & AI': Globe,
            'Team Ventures': Group,
            'Frontend & UI': Palette,
            'Neural Networks': Workflow
        };


  return (
    <section id='projects' className='relative py-15 bg-black overflow-hidden'>
        

        <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-1/3 right-0 w-96 h-96 bg-primary/40 opacity-20 rounded-full blur-3xl'/>

            <div className='absolute bottom-1/3 left-0 w-96 h-96 bg-primary/40 opacity-20 rounded-full blur-3xl'/>

            <div className='absolute top-1/2 right-1/3 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl'/>
        </div>


        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            <FadeIn delay={100}>
                <TitleHeader sub="My Work" title="Featured Projects" />
                <p className='text-lg text-white/60 mx-w-2xl text-center mt-6'>
                    A showcase of some of my best works spanning across different domains and tech stacks.
                </p>

            </FadeIn>


            {/* Category Filter */}

            <FadeIn delay={250}>
                <div className='flex flex-wrap justify-center gap-3 mb-16 mt-8'>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className = {`group relative px-6 py-2 rounded-full font-medium transition-all duration-300 hover:cursor-pointer ${activeCategory === category ? 'text-white' : 'text-white/60  hover:text-white'}`}
                        >

                            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === category ? 'bg-primary/10 opacity-100' : 'bg-white/5 border-white/10 group-hover:bg-white/10'}`} />

                            <div className='relative flex items-center gap-2'>

                                {React.createElement(categoryIcons[category], 
                                    {className: 'w-4 h-4'})}

                                    <span className='text-sm'>

                                        {category}

                                    </span>

                            </div>

                            {activeCategory === category && (
                                <div className='absolute inset-0 rounded-full bg-primary/70 blur-xl opacity-50 -z-10'/>
                            )}


                        </button>
                    ))}
                </div>
            </FadeIn>

            {/* Projects Carousel */}

            <FadeIn delay={500}>

                <div className='relative'>

                    <div
                        ref={scrollContainerRef}
                        className='overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar'
                    >

                        <div className=''>

                            {filteredProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className=''
                                >

                                    <ProjectCard />

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Navigation arrows */}

                    {filteredProjects.length > 3 && (
                        <>
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className=''
                                aria-label='Previous Projects'
                            >

                                <ChevronLeft className='' />

                            </button>

                            <button
                                onClick={nextSlide}
                                disabled={currentIndex >= filteredProjects.length - 3}
                                className=''
                                aria-label='Next Projects'
                            >

                                <ChevronRight className='' />

                            </button>

                        </>
                    )}


                    {/* Navigation Dots */}

                    {filteredProjects.length>3 && (
                        <div className=''>
                            {Array.from({length: Math.max(0, filteredProjects.length - 2)}).map((_, index) => (

                                <button
                                    key={index}
                                    onClick={() => scrollToIndex(index)}
                                    className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'bg-primary w-6 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/50'}`}

                                    aria-label={`Go to slide ${index+1}`}
                                />
                            ))}
                        </div>
                    )}

                </div>

            </FadeIn>

            

        </div>

    </section>
  )
}

export default Projects
