import React from 'react'
import { skills } from '@/data/skills'
import * as Icons from 'lucide-react'
import FadeIn from '../animations/FadeIn'

const Skills = () => {
    const skillCategories = {
    'Frontend Development': [
        skills.find(s => s.name === 'React.js'),
        skills.find(s => s.name === 'Next.js'),
        skills.find(s => s.name === 'JavaScript'),
        skills.find(s => s.name === 'TypeScript'),
        skills.find(s => s.name === 'Tailwind CSS'),
        skills.find(s => s.name === 'Responsive Design'),
    ].filter(Boolean),
    'Backend & APIs': [
        skills.find(s => s.name === 'Node.js'),
        skills.find(s => s.name === 'REST APIs'),
    ].filter(Boolean),
    'Databases': [
        skills.find(s => s.name === 'PostgreSQL'),
        skills.find(s => s.name === 'MongoDB'),
        skills.find(s => s.name === 'Prisma'),
    ].filter(Boolean),
    'Tools & Deployment': [
        skills.find(s => s.name === 'Git & GitHub'),
        skills.find(s => s.name === 'Postman'),
        skills.find(s => s.name === 'Vercel'),
        skills.find(s => s.name === 'AWS'),
    ].filter(Boolean),
    'AI & ML': [
        skills.find(s => s.name === 'Generative AI'),
        skills.find(s => s.name === 'CNN'),
    ].filter(Boolean),
    };

    // Get Proficiency percentage

    const getProficiencyPercentage = (level) => {
        const levels = {
            'Expert': 95,
            'Advanced': 80,
            'Intermediate': 65,
        }
        return levels[level] || 50;
    }


    //Get level color
    const getLevelColor = (level) => {
    const colors = {
        'Expert': 'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',
        'Advanced': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
        'Intermediate': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30',
    };
        return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500';
    };


  return (
    <div>
      Skills
    </div>
  )
}

export default Skills
