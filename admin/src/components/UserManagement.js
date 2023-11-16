```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const res = await axios.get('/api/users');
        setUsers(res.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`/api/users/${id}`);
        fetchUsers();
    };

    const resetUserPassword = async (id) => {
        await axios.post(`/api/users/resetPassword/${id}`);
        fetchUsers();
    };

    return (
        <div>
            <h2>User Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => deleteUser(user._id)}>Delete User</button>
                                <button onClick={() => resetUserPassword(user._id)}>Reset Password</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
```