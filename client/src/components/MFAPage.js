```javascript
import React, { useState } from 'react';
import axios from 'axios';

const MFAPage = () => {
    const [mfaCode, setMfaCode] = useState('');
    const [message, setMessage] = useState('');

    const handleMfaSetup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/mfa/setup', { mfaCode });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div id="mfa-setup">
            <h2>Multi-factor Authentication Setup</h2>
            <form onSubmit={handleMfaSetup}>
                <label htmlFor="mfaCode">Enter your MFA code:</label>
                <input
                    type="text"
                    id="mfaCode"
                    value={mfaCode}
                    onChange={(e) => setMfaCode(e.target.value)}
                    required
                />
                <button type="submit">Setup MFA</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default MFAPage;
```