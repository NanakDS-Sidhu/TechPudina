// components/Modal.js
"use client"
import { useState } from 'react';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = async (e) => {
        // You can perform any action here with the subject and body values.
        // For example, you can send them to an API or update your application state.
        // For now, we'll just log them.
        console.log('Subject:', subject);
        console.log('Body:', body);
        e.preventDefault();
        try {
            const response = await fetch("/api/hire-request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    subject : subject,
                    body : body,
                    sp_id : "650920a00206b38ef32ce5cd"
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("Login success", responseData);
            router.push("/");

        } catch (error) {
            console.log("Login failed", error.message);
        }

        // Close the modal
        closeModal();
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Open Modal
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Add a semi-transparent gray background */}
                    <div className="fixed inset-0 bg-gray-500 opacity-50 z-40"></div>

                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            <p className="text-2xl font-semibold">Contact Form</p>
                            <div className="mb-4 mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    className="border rounded w-full py-2 px-3"
                                    type="text"
                                    id="subject"
                                    placeholder="Enter subject"
                                    value={subject}
                                    onChange={handleSubjectChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                                    Body
                                </label>
                                <textarea
                                    className="border rounded w-full py-2 px-3"
                                    id="body"
                                    placeholder="Enter message body"
                                    rows="4"
                                    value={body}
                                    onChange={handleBodyChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer py-4 px-6">
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                                Submit
                            </button>
                            <button
                                onClick={closeModal}
                                className="modal-close px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
