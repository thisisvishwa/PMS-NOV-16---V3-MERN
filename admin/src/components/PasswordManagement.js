import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PasswordManagement = () => {
    const [passwords, setPasswords] = useState([]);

    useEffect(() => {
        fetchPasswords();
    }, []);

    const fetchPasswords = async () => {
        const res = await axios.get('/api/passwords');
        setPasswords(res.data);
    };

    const deletePassword = async (id) => {
        await axios.delete(`/api/passwords/${id}`);
        fetchPasswords();
    };

    const resetPassword = async (id) => {
        await axios.put(`/api/passwords/reset/${id}`);
        fetchPasswords();
    };

    return (
        <div>
            <h2>Password Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Password</th>
                        <th>Date of Creation</th>
                        <th>Date of Last Update</th>
                        <th>Password Strength</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {passwords.map(password => (
                        <tr key={password._id}>
                            <td>{password.userId}</td>
                            <td>{password.password}</td>
                            <td>{new Date(password.dateOfCreation).toLocaleDateString()}</td>
                            <td>{new Date(password.dateOfLastUpdate).toLocaleDateString()}</td>
                            <td>{password.passwordStrength}</td>
                            <td>
                                <button onClick={() => deletePassword(password._id)}>Delete</button>
                                <button onClick={() => resetPassword(password._id)}>Reset</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PasswordManagement;