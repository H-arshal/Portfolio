import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { ComicPanel } from './comic/ComicPanel';
import { IssueLabel } from './comic/IssueLabel';
import { ComicButton } from './comic/ComicButton';
import '../styles/ContactMe.css';


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
        showToast('info', 'TRANSMITTING...');

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
            showToast('success', 'TRANSMISSION SUCCESSFUL!');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            showToast('error', 'TRANSMISSION FAILED. RETRY.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section" id="contact">
            {/* Toast notification */}
            {toast && (
                <div className={`comic-toast comic-toast-${toast.type}`}>
                    <span className="text-display" style={{fontSize: '1.2rem', marginRight: '8px'}}>
                        {toast.type === 'success' && '✓'}
                        {toast.type === 'error' && '✕'}
                        {toast.type === 'info' && '⋯'}
                    </span>
                    <span className="text-body text-bold" style={{textTransform: 'uppercase'}}>{toast.message}</span>
                </div>
            )}

            <div className="contact-container">
                
                <div className="contact-header">
                    <IssueLabel issue="ISSUE #007" title="NEXT CHAPTER" />
                    <h2 className="text-display" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>TRANSMISSION</h2>
                    <p className="text-body" style={{maxWidth: '400px', marginTop: '1rem'}}>
                        Have a project in mind, or just want to connect? Send a secure transmission and I'll respond shortly.
                    </p>
                </div>

                <ComicPanel className="contact-panel">
                    <form className="contact-form" onSubmit={handleForm}>
                        <div className="form-row">
                            <div className="input-group">
                                <label className="text-technical" htmlFor="contact-name">NAME</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                    required
                                    className="comic-input"
                                />
                            </div>
                            <div className="input-group">
                                <label className="text-technical" htmlFor="contact-email">EMAIL</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    required
                                    className="comic-input"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-group">
                                <label className="text-technical" htmlFor="contact-phone">PHONE (OPTIONAL)</label>
                                <input
                                    type="tel"
                                    id="contact-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 234 567 8900"
                                    className="comic-input"
                                />
                            </div>
                            <div className="input-group">
                                <label className="text-technical" htmlFor="contact-subject">SUBJECT</label>
                                <input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Mission Details"
                                    className="comic-input"
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label className="text-technical" htmlFor="contact-message">MESSAGE</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your transmission..."
                                required
                                className="comic-input"
                                rows={6}
                            ></textarea>
                        </div>
                        
                        <ComicButton type="submit" variant="primary" disabled={loading} style={{marginTop: '1rem'}}>
                            {loading ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
                        </ComicButton>
                    </form>
                </ComicPanel>
            </div>
        </section>
    );
}

export default ContactMe;
