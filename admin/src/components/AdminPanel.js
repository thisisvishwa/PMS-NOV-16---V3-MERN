```javascript
import React from 'react';
import UserManagement from './UserManagement';
import PasswordManagement from './PasswordManagement';
import MFAManagement from './MFAManagement';

class AdminPanel extends React.Component {
    render() {
        return (
            <div id="adminPanel">
                <h1>Admin Panel</h1>
                <UserManagement />
                <PasswordManagement />
                <MFAManagement />
            </div>
        );
    }
}

export default AdminPanel;
```