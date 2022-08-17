var express = require("express");

var restaurantController = require('./controllers/restaurantController');
var reviewController = require('./controllers/reviewController');
var userController = require('./controllers/userController');

var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/restaurantdetails').get(restaurantController.getAllRestaurants);
app.route('/restaurantdetails/:restaurant_id').get(restaurantController.getSpecificRestaurant);
app.route('/restaurantdetails').post(restaurantController.getRestaurantByName);

app.route('/restaurantreview').get(reviewController.getAllReviews);
app.route('/restaurantreview/:review_id').get(reviewController.getSpecificReview);
app.route('/restaurantreview').post(reviewController.getReviewByReviewUsername);
app.route('/restaurantreview').post(reviewController.addReviews);
app.route('/restaurantreview/:review_id').put(reviewController.updateReviews);
app.route('/restaurantreview/:review_id').delete(reviewController.deleteReviews);

app.route('/usersignup').get(userController.getAllUsers);
app.route('/usersignup/:user_id').get(userController.getSpecificUser);
app.route('/usersignup').post(userController.getUserByUsername);
app.route('/signup_and_login_info').get(userController.getSignupAndLoginInfo);
app.route('/usersignup').post(userController.addUser);
app.route('/usersignup/:user_id').put(userController.updateUser);
app.route('/usersignup/:user_id').delete(userController.deleteUser);
app.route('/login').post(userController.loginUser);

//app.listen(3000, function(){
//    console.log("web server running @ http://127.0.0.1:5500");
//});

app.listen(5500, "127.0.0.1");
console.log("web server running @ http://127.0.0.1:5500");
