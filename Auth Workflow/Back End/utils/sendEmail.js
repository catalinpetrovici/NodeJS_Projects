const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig');

const sendEmailEthereal = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"Node.js Server 👻" <petrovicicatalin24@yahoo.com>', // sender address
    to,
    subject,
    html,
    // to: 'petrovicicatalin24@yahoo.com', // list of receivers
    // subject: 'Hello ✔', // Subject line
    // text: 'Salutare! Acest mesaj a fost trimis de Node.js.',
    // html: '<b>Salutare! Acest mesaj a fost trimis de Node.js.</b>', // html body
  });
};

module.exports = sendEmailEthereal;
