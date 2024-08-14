import React, { useState } from 'react';

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        inquiryType: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(false);
        setErrorMessage('');

        try {
            const response = await fetch('https://formspree.io/f/xovalajn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Form submission successful:', result);
                // Clear the form after successful submission
                setFormData({ name: '', contact: '', email: '', inquiryType: '', message: '' });
                setIsSubmitted(true);
            } else {
                console.error('Form submission failed:', response.statusText);
                setErrorMessage('Form submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('An error occurred while submitting the form. Please try again later.');
        }
    };

    return (
        <div id="Inquiry" className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Inquiry</h2>
            {isSubmitted && (
                <div className="mb-4 text-green-600 font-bold text-center">
                    Form submitted successfully!
                </div>
            )}
            {errorMessage && (
                <div className="mb-4 text-red-600 font-bold text-center">
                    {errorMessage}
                </div>
            )}
            <form onSubmit={handleSubmit} action='https://formspree.io/f/xovalajn' method='POST'>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Contact Info</label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Phone Number"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Inquiry Type</label>
                    <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value="">Select Inquiry Type</option>
                        <option value="government">Government Services</option>
                        <option value="agriculture">Agriculture Support</option>
                        <option value="health">Health</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Describe your inquiry"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Submit Inquiry
                </button>
            </form>
        </div>
    );
};

export default InquiryForm;
