const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { EMAIL_SECRET, MY_EMAIL } = process.env;

sgMail.setApiKey(EMAIL_SECRET);

const sendEmail = async (data) => {
  const email = { ...data, from: MY_EMAIL };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
