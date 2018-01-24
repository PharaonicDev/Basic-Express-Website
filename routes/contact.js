var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send',function(req, res, next){
 var transporter = nodemailer.createTransport({
  service : 'Gmail',
  auth: {
  	user: 'abubakr8911@gmail.com',
  	pass:'123'
  }
 });



 var mailOptions = {
 	from:'John Doe <johndoe@outlook.com>',
 	to:'abubakr8911@gmail.com',
 	subject:'WebsiteSubmission',
 	text:'You have A new submission with the following details...Name: '+req.body.name+ 'Email' + req.body.email +'Message:' +req.body.message,
   html:'<p> You got A new submission with the following details ..</p><ul><li>Name: +"req.body.name"</li><li>Email: +"req.body.email</li><li>Message:+"req.body.message"</li></ul>'
  };

  transporter.sendMail(mailOptions, function(error, info){
  	if(error){
  		console.log(error);
  		req.redirect('/');
  	}else{
  		console.log('Message Sent: ' + info.response);
  		req.redirect('/');
  	};
  });
});



module.exports = router;
