```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import UserManagement from './components/UserManagement';
import PasswordManagement from './components/PasswordManagement';
import MFAManagement from './components/MFAManagement';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AdminPanel} />
        <Route path="/users" component={UserManagement} />
        <Route path="/passwords" component={PasswordManagement} />
        <Route path="/mfa" component={MFAManagement} />
      </Switch>
    </Router>
  );
}

export default App;
```