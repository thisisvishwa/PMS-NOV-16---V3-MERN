import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/register', { name, email, password });
            setMessage(res.data.message);
        } catch (err) {
            setMessage(err.response.data.message);
        }
    };

    return (
        <div id="register-form">
            <h2>Register</h2>
            <form onSubmit={registerUser}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegistrationPage;