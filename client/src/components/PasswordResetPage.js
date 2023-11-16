import React, { useState } from 'react';
import axios from 'axios';

const PasswordResetPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const resetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/reset-password', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div id="password-reset-form">
            <h2>Reset Password</h2>
            <form onSubmit={resetPassword}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PasswordResetPage;