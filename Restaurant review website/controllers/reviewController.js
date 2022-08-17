"use strict";

const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');

var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond){
    reviewsDB.getAllReviews(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getSpecificReview(request, respond){
    var reviewID = request.params.review_id;
    reviewsDB.getSpecificReview(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
};

function getReviewByReviewUsername(request, respond){
    var reviewUSERNAME = request.body.review_username;
    reviewsDB.getReviewByReviewUsername(reviewUSERNAME, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
};

function addReviews(request, respond){
    var now = new Date();
    var review = new Review(null, request.body.rating,
        request.body.review, request.body.restaurant_review_id, request.body.review_username, now.toString());
    reviewsDB.addReviews(review, function (error, result){
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
};

function updateReviews(request, respond){
    var now = new Date();
    var review = new Review(parseInt(request.params.review_id), request.body.rating, 
    request.body.date_posted,  request.body.review, request.body.restaurant_review_id, request.body.review_username, request.body.review_id, now.toString());
    reviewsDB.updateReviews(review, function (error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
};

function deleteReviews(request, respond){
    var reviewID = request.params.review_id;
    reviewsDB.deleteReviews(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
};

module.exports = {getAllReviews, getSpecificReview, getReviewByReviewUsername, addReviews, updateReviews, deleteReviews};