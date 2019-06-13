﻿const express = require('express');
const config = require('../config.json');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
var nodemailer = require("nodemailer");
var crypto = require("crypto");
var moment = require("moment");
const User = db.User;
const ResetPassword = db.ResetPassword;
var ObjectID = require('mongodb').ObjectID;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.fromEmail,
        pass: config.emailPassword
    }
});
var users = {
    authenticate: function(req, res, next) {
        var email = req.body.email || '';
        var password = req.body.password || '';

        if (email == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
        }

        User.findOne({
            'email': email
        }, function(err, userFromDB) {
            if (userFromDB) {
                //comaper le mot de passe saisie par l'utilisateur et celle de la base de données
                if (bcrypt.compareSync(password, userFromDB.password)) {
                    res.status(200);
                    res.json({
                        "status": 200,
                        "message": "success"
                    });
                } else {
                    res.status(401);
                    res.json({
                        "status": 401,
                        "message": "Invalid credentials"
                    });
                }

            } else {
                console.log('Result does not exist');
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid credentials"
                });
            }
        });
    },

    register: function(req, res, next) {
        var userParam = req.body;
        // vérifier si l'email existe déjà                        
        if (!User.findOne({
                email: userParam.email
            })) {
            throw 'email "' + userParam.email + '" is already taken';
        }

        const user = new User(userParam);
        // crypter le mot de passe
        user.password = bcrypt.hashSync(userParam.password, 10);

        // enregistrer user
        user.save();
        res.json({
            "status": 200,
            "message": "success"
        });
    },

    forgotPassword: function(req, res, next) {

        var email = req.body.email || '';
        console.log(" aaaaaaaaaa    "+email);
        if (email == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
        }

        User.findOne({
                'email': email
            })
            .then(function(user) {
                console.log(" bbbbbbbbbbb   "+JSON.stringify(user));
                if (!user) {
                    return res.json({
                        status: "404",
                        message: 'No user found with that email address'
                    })
                }
                ResetPassword.findOne({
                        'userId': user.id
                    })
                    .then(function(resetPass) {
                        console.log(" ccccccccc   "+JSON.stringify(resetPass));
                        if (resetPass) {
                            resetPass.deleteOne({
                                'id': resetPass._id
                            });
                            console.log("1 document deleted");
                        }


                        token = crypto.randomBytes(32).toString('hex') //creating the token to be sent to the forgot password form (react)

                        const resetPassword = new ResetPassword();

                        //hashing the reset token  to store in the db node.js
                    bcrypt.hash(token, 10, (err, hashedResetToken) => {
                        resetPassword.resetPasswordToken = hashedResetToken;
                        resetPassword.userId = user.id;
                        resetPassword.expire = moment.utc().add(config.tokenExpiry, 'seconds');
                        
                        resetPassword.status=0;

                        console.log(" dddddddd  "+resetPassword);
                        resetPassword.save();

                        let mailOptions = {
                            to: user.email,
                            subject: 'Reset your account password',
                            html: '<h4><b>Reset Password</b></h4>' +
                                '<p>To reset your password, complete this form:</p>' +
                                '<a href=' + config.clientUrl + '/resetPassword/?userId=' + user.id + '&resetToken=' + token + '">' + config.clientUrl + '/resetPassword/?userId=' + user.id + '&resetToken=' + token + '</a>' +
                                '<br><br>' + 
                                '<p>--Team</p>'
                        }
                        smtpTransport.sendMail(mailOptions, function(error, response) {
                            if (error) {
                                console.log(error);
                                res.status(500);
                                res.json({
                                    "status": 500,
                                    "message": "failure"
                                });
                            } else {
                                console.log("Message sent ");
                                res.status(200);
                                res.json({
                                    "status": 200,
                                    "message": "success"
                                });
                            }
                        });

                    });
                    });
            });
    },
    resetPassword: function(req, res, next) {
        console.log("++++++++++++  "+JSON.stringify(req.body));
        const userId = req.body.userId;
        const token = req.body.resetToken;
        const password = req.body.password;
        ResetPassword.findOne({
                'userId': userId
            })
            .then(function(resetPassword) {
                console.log(" --------------  "+resetPassword.resetPasswordToken+"     **********    "+token);
                if (!resetPassword) {
                    res.status(401);
                    res.json({
                        "status": 401,
                        "message": "Invalid or expired reset token."
                    });

                }
                // the token and the hashed token in the db are verified befor updating the password
                bcrypt.compare(token, resetPassword.resetPasswordToken, (err, match) => {
                console.log(" 0000000  000000  "+match);
                    if (match == true) {
                        var hash = bcrypt.hashSync(password, 10);
                       console.log(" 11111111  "+hash);
                        User.updateOne({'_id': ObjectID(userId)},{$set :{'password': hash}})
                        .then((result) => {
                           console.log(" 22222222  "+JSON.stringify(result));
                            ResetPassword.updateOne(
                                {'_id': ObjectID(resetPassword.id)},
                                {$set:{'status': 1}}
                            ).
                            then((msg) => {
                                console.log(" 33333333  "+JSON.stringify(msg));
                                if (!msg) {
                                   
                                    res.status(500);
                                    res.json({
                                        "status": 500,
                                        "message": "Internal server error"
                                    });

                                } else
                                    res.json({
                                        "status": "200",
                                        "message": 'Password Updated successfully.'
                                    })
                            })
                        }).catch((error)=>
                        res.json({
                         "status": 500,
                         "message": "Internal server error  "+ error
                             })

                        )
                    }
                    else {
                        res.status(401);
                                    res.json({
                                        "status": 401,
                                        "message": "Reset token does not match"
                                    });
                    }
                    
                    
                
            })
    })
}
}

module.exports = users;