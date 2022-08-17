"use strict";

const UsersDB = require('../models/UsersDB');
const User = require('../models/User');
const req = require('express/lib/request');
const bcrypt = require('bcrypt-nodejs');

var usersDB = new UsersDB();

function getAllUsers(request, respond){
    usersDB.getAllUsers(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getSpecificUser(request, respond){
    var userID = request.params.user_id;
    usersDB.getSpecificUser(userID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getUserByUsername(request, respond){
    var userNAME = request.body.user_name;
    usersDB.getUserByUsername(userNAME, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getSignupAndLoginInfo(request, respond){
    usersDB.getSignupAndLoginInfo(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addUser(request, respond){
    var username = request.body.user_name;
    var password = request.body.password;
    password = bcrypt.hashSync(password, 10);
    var user = new User(null, request.body.user_name, request.body.password, request.body.first_name, 
        request.body.last_name, request.body.gender, request.body.date_of_birth, request.body.mobile_number, 
        request.body.email_address);
        console.log(user);
    usersDB.addUser(user, username, password, function (error, result){
        if (error) {
            respond.json(error);
        }
        else {
            
            respond.json(result);
        }
    })
};

function loginUser(request, respond){
    var username = request.body.user_name;
    var password = request.body.password;
    var user = new User(null, request.body.user_name, request.body.password, request.body.first_name, 
        request.body.last_name, request.body.gender, request.body.date_of_birth, request.body.mobile_number, 
        request.body.email_address, now.toString());
    usersDB.loginUsers(user, username, function (error, result){
        if (error) {
            respond.json(error);
        }
        else {
            console.log(result[0].password);
            respond.json(result);
        }
    })   
};

function updateUser(request, respond){
    var username = request.body.user_name;
    var mobileNumber = request.body.mobile_number;
    var user = new User(parseInt(request.params.user_id), request.body.user_name, request.body.password, request.body.first_name, 
        request.body.last_name, request.body.gender, request.body.date_of_birth, request.body.mobile_number,
        request.body.email_address);
    usersDB.updateUser(user, username, mobileNumber, function (error, result){
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
};

function deleteUser(request, respond){
    var userID = request.params.user_id;
    usersDB.deleteUser(userID, function (error, result){
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
};

module.exports = {getAllUsers, getSpecificUser, getUserByUsername, getSignupAndLoginInfo, addUser, loginUser, updateUser, deleteUser};