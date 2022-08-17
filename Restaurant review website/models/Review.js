"use strict";

class Review {
constructor(review_id, user_review_id, rating, review, restaurant_review_id, review_username, date_posted) {
this.review_id = review_id;
this.user_review_id = user_review_id;
this.rating = rating;
this.review = review;
this.restaurant_review_id = restaurant_review_id;
this.review_username = review_username;
this.date_posted = date_posted;
}

getReview_id() {
    return this.review_id;
}
getRating() {
    return this.rating;
}
getReview() {
    return this.review;
}
getRestaurant_review_id() {
    return this.restaurant_review_id;
}
getReview_username(){
    return this.review_username;
}
getDate_posted() {
    return this.date_posted;
}

setReview_id(review_id) {
    this.review_id = review_id;
}
setRating(rating) {
    this.rating = rating;
}
setReview(review) {
    this.review = review;
}
setRestaurant_review_id(restaurant_review_id) {
    this.restaurant_review_id = restaurant_review_id;
}
setReview_username(review_username) {
    this.review_username = review_username;
}
setDate_posted(date_posted) {
    this.date_posted = date_posted;
}

}

module.exports = Review;
