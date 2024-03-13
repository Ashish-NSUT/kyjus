const nodemailer = require('nodemailer');


const MailSender = async (email,body,title) => {
    try{

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })
        console.log("Hey!", email);

        const mail = await transporter.sendMail({
            from: "Kyjus",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })

        console.log(mail);
        console.log("hi");

        return mail;

    }catch(err) {
        console.log("error while sending mail: ",err);
    }
}

module.exports = MailSender;