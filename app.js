const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { EMAIL_SECRET } = process.env;

sgMail.setApiKey(EMAIL_SECRET);

const email = {
  to: "naroh67089@qodiq.com",
  from: "minkosergii@gmail.com",
  subject: "Test email",
  html: "<p><strong>Test email</strong> from localhost:3000</p>",
};

sgMail
  .send(email)
  .then(() => console.log("Email send success"))
  .catch((error) => console.log(error.message));
