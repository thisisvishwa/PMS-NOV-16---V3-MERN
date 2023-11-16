```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [passwords, setPasswords] = useState([]);

    useEffect(() => {
        getPasswords();
    }, []);

    const getPasswords = async () => {
        try {
            const res = await axios.get('/api/passwords');
            setPasswords(res.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div id="password-list">
            <h2>Your Stored Passwords</h2>
            {passwords.length > 0 ? (
                passwords.map((password) => (
                    <div key={password._id}>
                        <h3>{password.name}</h3>
                        <p>{password.password}</p>
                    </div>
                ))
            ) : (
                <p>No passwords stored yet.</p>
            )}
        </div>
    );
};

export default Dashboard;
```