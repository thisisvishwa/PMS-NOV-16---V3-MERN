import React, { useState } from 'react';
import axios from 'axios';

const PasswordGenerationPage = () => {
    const [password, setPassword] = useState('');

    const generatePassword = async () => {
        try {
            const response = await axios.get('/api/passwords/generate');
            setPassword(response.data.password);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Password Generation</h2>
            <button onClick={generatePassword}>Generate Password</button>
            {password && <p>Your generated password is: {password}</p>}
        </div>
    );
};

export default PasswordGenerationPage;