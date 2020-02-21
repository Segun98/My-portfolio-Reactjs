// const nodemailer = require('nodemailer')
// const mailGun = require('nodemailer-mailgun-transport')


// const auth = {
//     auth: {
        
//     }
// }

// const transporter = nodemailer.createTransport(mailGun(auth))


const sendMail = (email, text, cb) => {

    const mailOptions = {
        from: email,
        to: "shegunolanitori@gmail.com",
        subject: "Message from Portfolio Website",
        text

    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data)
        }
    })
}

module.exports = sendMail;