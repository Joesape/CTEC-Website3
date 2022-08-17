"use strict";

var db = require('../db-connections');
class RestaurantsDB{
    getAllRestaurants(callback){
        var sql = "SELECT * from restaurant_review.restaurantdetails";
        db.query(sql, callback);
    }

    getSpecificRestaurant(restaurantID, callback){
        var sql = "SELECT * from restaurant_review.restaurantdetails WHERE restaurant_id = ?";
        return db.query(sql, [restaurantID], callback);
    }

    getRestaurantByName(restaurantNAME, callback){
        var sql = "SELECT * from restaurant_review.restaurantdetails WHERE restaurant_name = ?";
        return db.query(sql, [restaurantNAME], callback);
    }
}

module.exports = RestaurantsDB;
