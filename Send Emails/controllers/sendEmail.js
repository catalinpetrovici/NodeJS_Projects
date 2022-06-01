const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'katlyn.kautzer16@ethereal.email',
      pass: 'hrN7sd4MyxCuVVDswk',
    },
  });

  let info = await transporter.sendMail({
    from: '"Node.js Server 👻" <petrovicicatalin24@yahoo.com>', // sender address
    to: 'petrovicicatalin24@yahoo.com, baz@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Salutare! Acest mesaj a fost trimis de Node.js.',
    html: '<b>Salutare! Acest mesaj a fost trimis de Node.js.</b>', // html body
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'test@mail.com', // Change to your recipient
    from: 'test@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
