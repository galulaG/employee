const express = require ("express");
const User = require ("../models/user");
const jwt = require("jsonwebtoken");
const router = express.Router();


router.post("/new", (req, res) => {
    let newObj = new User({
        username : req.body.username,
        password : req.body.password,
    });

    newObj.save((error) => {
        if (error) {
            res.status(500).send(error);
        }
        else {
            res.json(newObj);
        }
    });
});


router.post("/login", (req, res) => {

    //findOne ini pakemongoose
    User.findOne({ username : req.body.username, password : req.body.password}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else if (!result){
            res.status(404).json({ message : "User not Found!" });
        }
        else {
            const payload = {
                id : result._id,
                name : result.username
            };

            const token = jwt.sign(payload, "secretkey", { expiresIn : 30});
            res.json ({ token : token });
        }
    });

});


  

module.exports =(function(){
    return router;
})();


