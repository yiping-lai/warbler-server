const express=require("express");
const router=express.Router({mergeParams:true}); // allow grabbing id from the full router

const {createMessage, getMessage, deleteMessage}=require("../handlers/messages");

router.route("/").post(createMessage);

router.route("/:message_id")
	.get(getMessage)
	.delete(deleteMessage);

module.exports=router;