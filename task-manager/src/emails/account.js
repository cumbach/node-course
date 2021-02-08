const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'whookid472@hotmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'whookid472@hotmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. Let me know why you cancelled.`,
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
}
