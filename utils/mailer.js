const nodemailer = require('nodemailer');

exports.sendMail = async(toEmail) =>{
    const transporter = nodemailer.createTransport({
        host : process.env.SMTP_HOST,
        port : process.env.SMTP_PORT,
        auth : {
            user : process.env.SMTP_AUTH_USER,
            pass : process.env.SMTP_AUTH_PASS,
        }
    });

    const info = await transporter.sendMail({
        from : `${process.env.SMTP_AUTH_NAME} <${process.env.SMTP_AUTH_USER}>`,
        to : toEmail,
        subject : "nodemailer test !!!",
        text : "Is it working?",
        html : `<body>
                    <h1>Is it working?</h1>
                    <p>Hi, i sent you a message about a mean to send mail using VSCode.<br/>What do you think about it?</p>
                    <p>To be accurate, i am using a npm library called "nodemailer".<br/>I think it is very nice.</p>
                    <p>This is the script below</p>
                    <img src="C:\Users\Admin\Pictures\Screenshots\nms.png"/>
                </body>`
    });

    console.log("Message sent: %s", info.messageId);
}