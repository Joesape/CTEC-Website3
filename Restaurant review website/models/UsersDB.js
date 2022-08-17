"use strict";

var db = require('../db-connections');

class UsersDB{
    getAllUsers(callback){
        var sql = "SELECT * from restaurant_review.usersignup";
        db.query(sql, callback);
    }

    loginUsers(username, callback){
        var sql = "SELECT password from restaurant_review.usersignup WHERE user_name = ?";
        db.query(sql, [username], callback);
    }

    getSpecificUser(userID, callback){
        var sql = "SELECT * from restaurant_review.usersignup WHERE user_id = ?";
        return db.query(sql, [userID], callback);
    }

    getUserByUsername(userNAME, callback){
        var sql = "SELECT * from restaurant_review.usersignup WHERE user_name = ?";
        return db.query(sql, [userNAME], callback);
    }

    getSignupAndLoginInfo(callback){
        var sql = "SELECT user_id AS UserID, user_name AS Username, user_login_id AS UserLoginID, user_login_name AS UserLoginName FROM restaurant_review.usersignup JOIN restaurant_review.userlogin ON user_id = user_login_id";
        return db.query(sql, callback);
    }

    addUser(user, username, password, callback){
        var sql = "INSERT INTO usersignup (user_name, password, first_name, last_name, gender, date_of_birth, mobile_number, email_address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql , [username, password], [user.getUser_name(), user.getPassword(), user.getFirst_name(), user.getLast_name(), user.getGender(), 
            user.getDate_of_birth(), user.getMobile_number(), user.getEmail_address()], callback);
    }

    updateUser(user, callback){
        var sql = "UPDATE usersignup SET user_name = ?, password = ?, first_name = ?, last_name = ?, gender = ?, date_of_birth = ?, mobile_number = ?, email_address = ? WHERE user_id = ?";
        return db.query(sql, [user.getUser_name(), user.getPassword(), user.getFirst_name(), user.getLast_name(), user.getGender(), 
            user.getDate_of_birth(), user.getMobile_number(), user.getEmail_address(), user.getUser_id()], callback);
    }

    deleteUser(userID, callback){
        var sql = "DELETE from usersignup WHERE user_id = ?";
        return db.query(sql, [userID], callback);
    }


}

module.exports = UsersDB;