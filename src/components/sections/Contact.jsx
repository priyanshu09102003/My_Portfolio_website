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
    <div>
      Contact
    </div>
  )
}

export default Contact
