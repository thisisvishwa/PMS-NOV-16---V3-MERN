```javascript
const User = require('../models/User');
const Password = require('../models/Password');

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const user = await User.findByIdAndDelete(userId);
        return user;
    } catch (error) {
        throw error;
    }
};

const resetUserPassword = async (userId, newPassword) => {
    try {
        const user = await User.findById(userId);
        user.password = newPassword;
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
};

const manageMFA = async (userId, mfaStatus) => {
    try {
        const user = await User.findById(userId);
        user.mfaStatus = mfaStatus;
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllUsers,
    deleteUser,
    resetUserPassword,
    manageMFA
};
```