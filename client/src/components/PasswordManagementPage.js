import React, { useState } from 'react';
import axios from 'axios';

const PasswordManagementPage = () => {
    const [passwords, setPasswords] = useState([]);
    const [selectedPassword, setSelectedPassword] = useState(null);
    const [newPassword, setNewPassword] = useState('');

    const getPasswords = async () => {
        const response = await axios.get('/api/passwords');
        setPasswords(response.data);
    };

    const updatePassword = async () => {
        if (selectedPassword) {
            await axios.put(`/api/passwords/${selectedPassword._id}`, { password: newPassword });
            getPasswords();
        }
    };

    const deletePassword = async () => {
        if (selectedPassword) {
            await axios.delete(`/api/passwords/${selectedPassword._id}`);
            getPasswords();
        }
    };

    return (
        <div>
            <h1>Password Management</h1>
            <button onClick={getPasswords}>Refresh Passwords</button>
            <div>
                {passwords.map(password => (
                    <div key={password._id} onClick={() => setSelectedPassword(password)}>
                        {password.password}
                    </div>
                ))}
            </div>
            <div>
                <input type="text" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                <button onClick={updatePassword}>Update Password</button>
                <button onClick={deletePassword}>Delete Password</button>
            </div>
        </div>
    );
};

export default PasswordManagementPage;