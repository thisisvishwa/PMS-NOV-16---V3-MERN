import React, { useState } from 'react';
import axios from 'axios';

const PasswordExpiryNotificationsPage = () => {
    const [expiryDate, setExpiryDate] = useState('');
    const [message, setMessage] = useState('');

    const handleExpiryDateChange = (event) => {
        setExpiryDate(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/notifications', { expiryDate });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    }

    return (
        <div id="notification-settings">
            <h2>Password Expiry Notifications</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Set Password Expiry Date:
                    <input type="date" value={expiryDate} onChange={handleExpiryDateChange} required />
                </label>
                <button type="submit">Set</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default PasswordExpiryNotificationsPage;