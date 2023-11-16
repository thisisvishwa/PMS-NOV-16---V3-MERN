```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const passwordRoutes = require('./routes/passwords');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/password_management_system', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/passwords', passwordRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```