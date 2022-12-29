var nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "your mail",
        pass: "your password ... if login unauthroized then create app password and use it"
    }
})

var mailOptin = {
    from: "sender mail",
    to: "receiver mail",
    subject: "Sending mail with node.js",
    text: "hi.. this is for test the mailsender"
}

transporter.sendMail(mailOptin, function(err, info) {
    if(err){
        console.log(err.message)
    } else {
        console.log(`mial sent: ${info.response}`)
    }
})