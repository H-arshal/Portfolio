import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import '../stylesheet/ContactMe.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);

    const showToast = useCallback((type, message) => {
        setToast({ type, message });
        setTimeout(() => setToast(null), 4000);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        showToast('info', 'Sending message...');

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            subject: formData.subject || 'No subject',
            message: formData.message,
            time: new Date().toLocaleString('en-IN', {
                dateStyle: 'full',
                timeStyle: 'short',
            }),
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            showToast('success', 'Message sent successfully!');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            showToast('error', 'Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section">
            {/* Toast notification */}
            {toast && (
                <div className={`contact-toast contact-toast--${toast.type}`}>
                    <span className="contact-toast__icon">
                        {toast.type === 'success' && '✓'}
                        {toast.type === 'error' && '✕'}
                        {toast.type === 'info' && '⋯'}
                    </span>
                    <span className="contact-toast__message">{toast.message}</span>
                </div>
            )}

            <div className="contact-container">
                <div className="contact-header">
                    <h2>Let's <span>Talk</span></h2>
                    <p>Have a project in mind, or just want to say hi? Fill out the form and I'll get back to you as soon as possible.</p>
                </div>
                <form className="contact-form" onSubmit={handleForm}>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="contact-name">Name</label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="contact-email">Email</label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="contact-phone">Phone <span className="optional-label">(optional)</span></label>
                            <input
                                type="tel"
                                id="contact-phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="contact-subject">Subject</label>
                            <input
                                type="text"
                                id="contact-subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Collaboration"
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="contact-message">Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? (
                            <>
                                <span className="btn-spinner"></span>
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactMe;
