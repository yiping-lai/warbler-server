require('dotenv').config(); // load env variables
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes=require("./routes/auth");
const messagesRoutes=require("./routes/message");
const {loginRequired, ensureCorrectUser}=require("./middleware/auth");
const errorHandler = require('./handlers/error');
const PORT = process.env.PORT || 3000;
const db=require("./models");

app.use(cors());
app.use(bodyParser.json());


app.use("/api/auth",authRoutes);
app.use("/api/users/:id/messages",loginRequired,ensureCorrectUser,messagesRoutes);
app.get("/api/messages",loginRequired, async function(req,res,next){
	try{
		let messages=await db.Message.find().sort({createdAt:"desc"}).populate("user",{username:true,profileImageUrl:true});
		return res.status(200).json(messages);
	}catch(err){
		return next(err);
	}
})

// error handling
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);


app.listen(PORT, function() {
  console.log(`Serving warbler app on port ${PORT}`);
});