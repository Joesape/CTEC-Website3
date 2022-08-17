var restaurant_url = "/restaurantdetails";
var restaurant_array = []; // This creates an empty movie array
var restaurantCount = 0;
/*  There are two categories: "Now Showing" and "Coming Soon". This variable states which 
    category of movies should be listed when the home page is first loaded. */
var category = "restaurantdetails";
var currentIndex=0;
var review_url = "/restaurantreview";
var review_array = []; // This creates an empty review array
var popcornBWImage = 'images/popcorn_bw.png';
var popcornImage = 'images/popcorn.png';
var rating = 0;

var translate_url = new URL("https://fceue1n2aa.execute-api.us-east-1.amazonaws.com/dev")
var newText = "";