import React, { useState } from 'react';

const PasswordStrengthCheckerPage = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const checkPasswordStrength = (password) => {
        // This is a simple password strength checker, replace it with a more robust one
        if (password.length > 8) {
            setStrength('Strong');
        } else if (password.length > 5) {
            setStrength('Medium');
        } else {
            setStrength('Weak');
        }
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        checkPasswordStrength(event.target.value);
    }

    return (
        <div id="password-checker">
            <h2>Password Strength Checker</h2>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <p>Password Strength: {strength}</p>
        </div>
    );
}

export default PasswordStrengthCheckerPage;