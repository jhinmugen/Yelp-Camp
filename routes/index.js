var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//Root route
router.get("/", function(req,res){
   res.render("landing"); 
});



//Register Route
router.get("/register", function(req,res){
    res.render("register");
});

router.post("/register", function(req,res){
    var newUser = new User({username: req.body.username});
    User.register(newUser,req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("register");
        }else{
            passport.authenticate("local")(req, res, function(){
                req.flash("sucess", "Welcome to YelpCamp" + user.username);
                res.redirect("/campgrounds");
            });
        }
    });
    
});
//Show login route
router.get("/login", function(req,res){
    res.render("login");
});

router.post("/login",passport.authenticate("local",
{
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}),function(req,res){});

//Logout Route
router.get("/logout", function(req,res){
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/campgrounds");
});


module.exports = router;