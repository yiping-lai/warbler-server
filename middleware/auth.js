require('dotenv').config(); 
const jwt=require("jsonwebtoken");

// make sure the user is logged in --- Authentication
exports.loginRequired=function(req,res,next){
	try{
		// Bearer asdfjkl;jsdf
		const token=req.headers.authorization.split(" ")[1];		
		jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
			if(decoded){
				return next();
			}else{
				return next({
					status:401,
					message:"Please log in first"
				});
			}
		});
	}catch(e){
		return next({
			status:401,
			message:"Please log in first"
		});		
	}
}

// make sure the user has the right --- Authorization
exports.ensureCorrectUser=function(req,res,next){
	try{
		const token=req.headers.authorization.split(" ")[1];
		jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
			if(decoded && decoded.id===req.params.id){
				return next();
			}else{
				return next({
					status:401,
					message:"Unauthorized"
				});
			}
		});
	}catch(e){
		return next({
			status:401,
			message:"Unauthorized"
		});		
	}		 
}