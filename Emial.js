const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email address from environment variable
    pass: process.env.EMAIL_PASS, // Your email password from environment variable
  },
});
// Function to send an email
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: to, // List of receivers
    subject: subject, // Subject line
    text: text, // Plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });
};

// Call the function to send an email to Martha
sendEmail("martaabayneh3@gmail.com", "Are you going?", "Go home, please");
