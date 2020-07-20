var express = require('express');
const http = require('http')
var app= express();
var todocontroller = require('./controllers/todocontroller.js')

//set up template engine

app.set('view engine','ejs');

//static files

app.use(express.static('./public/assets'));


//fire controller 
todocontroller(app);




//listen to port 
app.listen(3000,'127.1.1.1',function(error){

	if(error){
		console.log("something wrong")
	}
	else{
		console.log("port listen to:127.1.1.1:"+3000);
	}
})
