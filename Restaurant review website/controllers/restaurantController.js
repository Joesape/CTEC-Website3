"use strict";

const RestaurantsDB = require('../models/RestaurantsDB');

var restaurantsDB = new RestaurantsDB();

function getAllRestaurants(request, respond){
    restaurantsDB.getAllRestaurants(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getSpecificRestaurant(request, respond){
    var restaurantID = request.params.restaurant_id;
    restaurantsDB.getSpecificRestaurant(restaurantID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantByName(request, respond){
    var restaurantNAME = request.body.restaurant_name;
    restaurantsDB.getRestaurantByName(restaurantNAME, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
};

module.exports = {getAllRestaurants, getSpecificRestaurant, getRestaurantByName};