import React, { useState } from 'react'
import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si'
import { MapPin, Send, MessageSquare } from 'lucide-react'
import { PERSONAL_INFO , SOCIAL_LINKS } from '@/utils/constants'
import FadeIn from '../animations/FadeIn'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState({type: '', message: ''});

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

        setStatus({type: 'success', message:'Message sent successfully!. I\'ll respond back to you soon.' })

        setFormData({name: '', email: '', message: ''});

        setTimeout(() => setStatus({type: '', message: ''}), 5000);
    }

    const socialIcons = {
        github: SiGithub,
        linkedin: SiLinkedin
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
                    <p>
                        Open to new opportunities, collaborations, and exciting projects - let's connect and build something great together.
                    </p>
                </div>

            </FadeIn>

            <div className=''>

                <FadeIn delay={200}>

                    <div>
                        <form onSubmit={handleSubmit} className=''>

                            <div>
                                <label htmlFor="name">Name</label>

                                <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} className='' placeholder='Your Name'/>
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>

                                <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} className='' placeholder='your_name@example.com'/>
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>

                                <textarea id='message' name='message' value={formData.message} onChange={handleChange} rows={5} className='' placeholder='Your message ...'/>
                            </div>


                            <button
                                type='submit'
                                className=''
                            >

                                <span>Send message</span>
                                <Send className='' />

                            </button>

                            {status.message && (
                                <div
                                    className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-green-500/10  border border-green-500/40 text-green-400' : 'bg-red-500 border border-red-500/20 text-red-400'}`}
                                >

                                    {status.message}

                                </div>
                            )}

                        </form>
                    </div>

                </FadeIn>

            </div>
        </div>

    </section>
  )
}

export default Contact
