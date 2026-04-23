import React, {useState, useEffect} from 'react'
import {Code, Menu, X} from 'lucide-react'
import {NAV_LINKS, PERSONAL_INFO} from '../../utils/constants'
import { useScrollSpy , scrollToSection } from '@/hooks/useScrollSpy'
import { SiLeetcode, SiLinkedin } from 'react-icons/si'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll)
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'}`}
      style={{transform: 'translate3d(0, 0, 0)'}}
    >
      <div className='max-w-[1320px] mx-auto px-5'>
        <div className='flex items-center justify-between'>

          {/* Logo */}
          <div className='flex items-center gap-4'>
            <Code className='w-6 h-6 text-primary' />
            <button
              onClick={() => window.scrollTo({top: 0, behavior:'smooth'})}
              className='text-2xl font-bold bg-linear-to-r from-primary via-primary/60 to-primary/40 bg-clip-text text-transparent hover:opacity-80 transition-opacity hover:cursor-pointer'
              aria-label='home'
            >
              {PERSONAL_INFO.name.split(' ')[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-7'>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${activeSection === link.id ? 'text-white' : 'text-white/70 hover:text-white hover:cursor-pointer'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className='hidden md:flex items-center gap-2.5'>

            {/* Connect */}
            <button
              onClick={() => window.open('https://www.linkedin.com/in/priyanshu-paul-59221228a/')}
              className='px-4 py-2 cursor-pointer rounded-[17px] border border-primary/60 text-primary font-medium
                         hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_12px_rgba(141,255,105,0.2)]
                         transition-all duration-300'
            >
              <span className='flex items-center gap-2'>
                <SiLinkedin className='w-4 h-4' />
                Connect
              </span>
            </button>

            {/* View Stats  */}
            <button
              onClick={() => window.open('https://codolio.com/profile/priyanshupaul09')}
              className='px-4 py-2 cursor-pointer rounded-[17px] border border-primary/60 text-primary font-medium
                         hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_12px_rgba(141,255,105,0.2)]
                         transition-all duration-300'
            >
              <span className='flex items-center gap-2'>
                <SiLeetcode className='w-4 h-4' />
                View Stats
              </span>
            </button>

          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-4 text-white hover:text-white/80 transition-colors'
            aria-label='menu'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className='bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-4 space-y-2'>

          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300
                ${activeSection === link.id
                  ? 'text-primary bg-primary/10 border border-primary/20'
                  : 'text-white/70 hover:text-white hover:bg-white/5'}`}
            >
              {link.label}
            </button>
          ))}

          <div className='pt-2 space-y-2.5'>

            {/* Mobile Connect — ghost */}
            <button
              onClick={() => window.open('https://www.linkedin.com/in/priyanshu-paul-59221228a/', '_blank')}
              className='w-full px-7 py-3.5 rounded-[17px] border border-primary/60 text-primary font-medium text-base
                         hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_12px_rgba(141,255,105,0.2)]
                         transition-all duration-300'
            >
              <span className='flex items-center justify-center gap-2'>
                <SiLinkedin className='w-4 h-4' />
                Connect
              </span>
            </button>

            {/* Mobile View Stats — filled green */}
            <button
              onClick={() => window.open('https://codolio.com/profile/priyanshupaul09', '_blank')}
              className='w-full px-7 py-3.5 rounded-[17px] bg-primary text-black font-semibold text-base
                         hover:bg-primary/85 hover:shadow-[0_0_16px_rgba(141,255,105,0.35)]
                         transition-all duration-300'
            >
              <span className='flex items-center justify-center gap-2'>
                <SiLeetcode className='w-4 h-4' />
                View Stats
              </span>
            </button>

          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar