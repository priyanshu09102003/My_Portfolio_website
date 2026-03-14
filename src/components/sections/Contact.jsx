import React, { useState } from 'react'
import { SiGmail, SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si'
import { MapPin, Send, MessageSquare } from 'lucide-react'
import { PERSONAL_INFO , SOCIAL_LINKS } from '@/utils/constants'
import emailjs from '@emailjs/browser'
import FadeIn from '../animations/FadeIn'
import ComputersCanvas from '../canvas/Computers'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState({type: '', message: ''});

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

   const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.message){
        setStatus({type: 'error', message: 'Please fill in all the fields'});
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(formData.email)){
        setStatus({type: 'error', message: "Please enter a valid email"})
        return;
    }

    setLoading(true);

    emailjs.send(
        'service_wsyd3do',
        'template_wm7mb0h',
        {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        },
        'BX0D0BzcnVxFPHmMg'
    )
    .then(() => {
        setLoading(false);
        setStatus({type: 'success', message: "Message sent successfully! I'll respond back to you soon."});
        setFormData({name: '', email: '', message: ''});
        setTimeout(() => setStatus({type: '', message: ''}), 5000);
    })
    .catch(() => {
        setLoading(false);
        setStatus({type: 'error', message: 'Something went wrong. Please try again.'});
    });
};

    const socialIcons = {
        github: SiGithub,
        linkedin: SiLinkedin,
        whatsapp: SiWhatsapp
    }
  return (
    <section id='contact' className='relative py-20 bg-black overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>

            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 opacity-20 rounded-full blur-3xl'/>

            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/40 opacity-20 rounded-full blur-3xl' />

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl'/>

        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <FadeIn delay={100}>

                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                        <MessageSquare className='w-4 h-4 text-primary' />
                        <span className='text-sm text-primary font-medium tracking-wider'>Get In Touch</span>
                    </div>

                    <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
                        Let's Work Together
                    </h2>
                    <p className='text-lg text-white/60  max-w-2xl mx-auto  text-center mt-6'>
                        Open to new opportunities, collaborations, and exciting projects - let's connect and build something great together.
                    </p>
                </div>

            </FadeIn>

            <div className='flex flex-col md:grid md:grid-cols-2 gap-12'>

                <FadeIn delay={200}>

                    <div className='bg-white/5 border border-white/10 rounded-2xl p-8'>
                        <form onSubmit={handleSubmit} className='space-y-6'>

                            <div>
                                <label htmlFor="name" className='block text-lg font-medium text-white/80 mb-2'>
                                    Name
                                </label>

                                <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} 
                                className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 ' placeholder='Your Name'/>
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-lg font-medium text-white/80 mb-2'>Email</label>

                                <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 ' 
                                placeholder='your_name@example.com'/>
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-lg font-medium text-white/80 mb-2' >Message</label>

                                <textarea id='message' name='message' value={formData.message} onChange={handleChange} rows={5} placeholder='Your message ...'
                                className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none' 
                                />
                            </div>


                            <button
                                type='submit'
                                disabled={loading}
                                className='w-full px-5 py-3 bg-linear-to-r from-primary/10 to-primary text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed'
                            >
                                {loading ? (
                                    <>
                                        <span>Sending...</span>
                                        <svg className='w-5 h-5 animate-spin' viewBox='0 0 24 24' fill='none'>
                                            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'/>
                                            <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v8z'/>
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <span>Send message</span>
                                        <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                                    </>
                                )}
                            </button>

                            {status.message && (
                                <div
                                    className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-green-500/10  border border-green-500/40 text-green-400' : 'bg-red-500 border border-red-500/20 text-white'}`}
                                >

                                    {status.message}

                                </div>
                            )}

                        </form>
                    </div>

                </FadeIn>

                
                <div className='flex flex-col gap-0 mt-5 md:mt-0'>

                    <div className='space-y-5'>

                        <div>
                            <h3 className='text-2xl font-semibold text-white mb-3'>
                                Let's Connect
                            </h3>
                        </div>

                        <div className='space-y-2'>
                            <div className='group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300'>
                                <div className='flex items-center gap-4'>
                                    <div className='p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl'> 
                                        <SiGmail className='w-6 h-6 text-primary' />
                                    </div>
                                    <div className='flex-1'>
                                        <a href={`mailto: ${PERSONAL_INFO.email}`}
                                        className='text-white hover:text-[#A8FF8D] font-medium transition-colors'
                                        >
                                            {PERSONAL_INFO.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                           <div className='relative z-10'>
                            <p className='text-sm text-white/50 mt-3'>You can also find me on : </p>
                            <div className='flex gap-4 mt-3'>
                                {Object.entries(SOCIAL_LINKS).slice(0, 3).map(([platform, url]) => {
                                    const Icon = socialIcons[platform]
                                    if (!Icon) return null
                                    return (
                                        <a
                                            key={platform}
                                            href={url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/20 hover:border-primary/50 hover:scale-110 transition-all duration-300 group hover:cursor-pointer'
                                        >
                                            <Icon className='w-5 h-5 text-white/70 group-hover:text-primary transition-colors' />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                            
                        </div>

                    </div>

                    {/* 3D Model */}
                    <div className='h-[480px] relative -mt-10 md:-mt-16 lg:-mt-26 z-0'>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='w-64 h-64 bg-blue-500/25 rounded-full blur-3xl' />
                        </div>
                        <ComputersCanvas />
                    </div>

                </div>

            </div>
        </div>

    </section>
  )
}

export default Contact
