"use strict";

var db = require('../db-connections');
class ReviewsDB{
    getAllReviews(callback){
        var sql = "SELECT * from restaurant_review.restaurantreview";
        db.query(sql, callback);
    }

    getSpecificReview(reviewID, callback){
        var sql = "SELECT * from restaurant_review.restaurantreview WHERE review_id = ?";
        return db.query(sql, [reviewID], callback);
    }

    getReviewByReviewUsername(reviewUSERNAME, callback){
        var sql = "SELECT * from restaurant_review.restaurantreview WHERE review_username = ?";
        return db.query(sql, [reviewUSERNAME], callback);
    }

    addReviews(review, callback){
        var sql = "INSERT INTO restaurantreview (rating, review, restaurant_review_id, review_username, date_posted) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [review.getRating(), review.getReview(), 
            review.getRestaurant_review_id(), review.getReview_username(), review.getDate_posted()], callback);
    }

    updateReviews(review, callback){
        var sql = "UPDATE restaurantreview SET rating = ?,  review = ?, restaurant_review_id = ?, review_username = ?, date_posted = ? WHERE review_id = ?";
        return db.query(sql, [review.getRating(),review.getReview(), 
            review.getRestaurant_review_id(), review.getReview_username(), review.getDate_posted(), review.getReview_id()], callback);
    }

    deleteReviews(reviewID, callback){
        var sql = "DELETE from restaurantreview WHERE review_id = ?";
        return db.query(sql, [reviewID], callback);
    }
}



module.exports = ReviewsDB;