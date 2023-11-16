```javascript
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Password = require('../models/Password');
const adminUtils = require('../utils/adminUtils');

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific user
router.get('/users/:id', adminUtils.getUser, (req, res) => {
    res.json(res.user);
});

// Delete a user
router.delete('/users/:id', adminUtils.getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'Deleted User' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Reset a user's password
router.patch('/users/:id/resetPassword', adminUtils.getUser, adminUtils.resetUserPassword, (req, res) => {
    res.json({ message: 'Password Reset Successful' });
});

// Manage a user's MFA settings
router.patch('/users/:id/manageMFA', adminUtils.getUser, adminUtils.manageMFA, (req, res) => {
    res.json({ message: 'MFA Settings Updated' });
});

module.exports = router;
```