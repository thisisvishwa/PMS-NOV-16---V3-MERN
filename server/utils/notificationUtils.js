```javascript
const nodemailer = require('nodemailer');

// Function to send password expiry notification
const sendNotification = async (userEmail, passwordExpiryDate) => {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    // Message object
    let message = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: 'Password Expiry Notification',
        text: `Your password will expire on ${passwordExpiryDate}. Please update your password.`,
        html: `<p>Your password will expire on <b>${passwordExpiryDate}</b>. Please update your password.</p>`
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(message);

    console.log('Message sent: %s', info.messageId);
};

module.exports = {
    sendNotification
};
```