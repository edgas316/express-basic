var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', {title:'Contact'});
});

router.post('/send', function(req,res,next){
    var transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'edgas316@gmail.com',
            pass:'password'
        }
    })
    var mailOptions = {
        from:'Edwin Gasparian <edgas316@gmail.com>',
        to: 'edgas316@gmail.com',
        subject:'Website Submission',
        text:'You have a new submission with the following details...Name: ' +req.body.name+ ' Email: '+req.body.email+' Message: '+req.body.message,
        html:'<p> You got a new submission with the following details..</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
    }
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error)
            res.redirect('/')
        }else{
            console.log('Message Sent: ' + info.response)
            res.redirect('/')
        }
    })
})

module.exports = router;
