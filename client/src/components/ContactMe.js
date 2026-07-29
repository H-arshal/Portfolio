import React, { useState } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import '../stylesheet/ContactMe.css';
const url = process.env.REACT_APP_API_URL;

function ContactMe() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            email: mail,
            message: msg,
        };

        setLoading(true);

        const loadingToastId = toastr.info('Sending message...', '', {
            closeButton: false,
            timeOut: 0,
            extendedTimeOut: 0,
            tapToDismiss: false,
        });

        try {
            const response = await fetch(`${url}/contact/sendEmails`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toastr.success('Message sent successfully!');
                setName('');
                setMail('');
                setMsg('');
            } else {
                toastr.error('Failed to send message. Please try again.');
            }
        } catch (error) {
            toastr.error('An error occurred. Please try again.');
        } finally {
            toastr.clear(loadingToastId);
            setLoading(false); 
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2>Let's <span>Talk</span></h2>
                    <p>Have a project in mind, or just want to say hi? Fill out the form and I'll get back to you as soon as possible.</p>
                </div>
                <form className="contact-form" onSubmit={handleForm}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            placeholder="Tell me about your project..."
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactMe;
