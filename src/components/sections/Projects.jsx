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
            scrollToIndex(newIndex)
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
    <section id='projects' className=''>

        <div>
            <div className=''/>
            <div className=''/>
            <div className=''/>
        </div>


        <div className=''>

            <FadeIn delay={100}>
                <TitleHeader sub="My Work" title="Featured Projects" />
                <p>
                    A showcase of my best work spanning across different domains and tech stacks.
                </p>

            </FadeIn>

            

        </div>

    </section>
  )
}

export default Projects
