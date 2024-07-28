const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { EMAIL_SECRET, MY_EMAIL } = process.env;

sgMail.setApiKey(EMAIL_SECRET);

const email = {
  to: "naroh67089@qodiq.com",
  from: MY_EMAIL,
  subject: "Test email",
  html: "<p><strong>Test email</strong> from localhost:3000</p>",
};

sgMail
  .send(email)
  .then(() => console.log("Email send success"))
  .catch((error) => console.log(error.message));
