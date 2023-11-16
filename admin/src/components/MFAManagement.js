```javascript
import React, { useState } from 'react';
import axios from 'axios';

const MFAManagement = () => {
    const [email, setEmail] = useState('');
    const [mfaStatus, setMfaStatus] = useState('');

    const handleMFAChange = async () => {
        try {
            const response = await axios.put('/api/admin/mfa', { email, mfaStatus });
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div id="mfaManagement">
            <h2>Manage Multi-factor Authentication (MFA)</h2>
            <form onSubmit={handleMFAChange}>
                <label>
                    User Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>
                    MFA Status:
                    <select value={mfaStatus} onChange={e => setMfaStatus(e.target.value)} required>
                        <option value="">Select Status</option>
                        <option value="enabled">Enabled</option>
                        <option value="disabled">Disabled</option>
                    </select>
                </label>
                <button type="submit">Change MFA Status</button>
            </form>
        </div>
    );
};

export default MFAManagement;
```