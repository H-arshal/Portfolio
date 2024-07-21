import React, { useState } from 'react';
import profileImage from '../images/Harshal.png';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'; // Import toastr CSS

function ContactMe() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state

    const handleForm = async (e) => {
        e.preventDefault();
        const formData = {
            name:name,
            email: mail,
            message: msg,
        };

        setLoading(true); // Set loading to true

        // Show loading toastr
        const loadingToastId = toastr.info('Sending message...', '', {
            closeButton: false,
            timeOut: 0, // Disable auto-close
            extendedTimeOut: 0, // Disable extended auto-close
            tapToDismiss: false, // Disable tap to dismiss
            // positionClass: 'toast--center' // Positioning
        });

        try {
            const response = await fetch('http://localhost:8080/contact/sendEmails', {
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
            // Remove loading toastr
            toastr.clear(loadingToastId);
            setLoading(false); // Set loading to false
        }
    };

    return (
        <div className="ContactMe">
            <div className="sub-container">
                <h1>Let's <span>Talk</span></h1>
                <p>You can contact me from here !!!</p>
                <form onSubmit={handleForm}>
                    <div className="entry-field">
                        <label>Your Name :
                            <input
                                type='text'
                                name='name'
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter your Name here!!!'
                                required
                            />
                        </label>
                    </div>
                    <div className="entry-field">
                        <label>Your Email :
                            <input
                                type='email'
                                name='email'
                                id='email'
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                placeholder='Enter your E-mail here!!!'
                                required
                            />
                        </label>
                    </div>
                    <div className="entry-field">
                        <label>Your Message :
                            <textarea
                                name='message'
                                id='message'
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                                placeholder='Enter your Message here!!!'
                                required
                            ></textarea>
                        </label>
                    </div>
                    <button
                        type='submit'
                        value='Submit'
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
            <div className="about-container">
                <img src={profileImage} alt="Harshal Moon" className="profile-image" />
            </div>
        </div>
    );
}

export default ContactMe;
