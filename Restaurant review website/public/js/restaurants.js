//This function is to call the restaurants api and get all the restaurants
function getRestaurantData() {    
	var request = new XMLHttpRequest();    
	request.open('GET', restaurant_url, true);    
	//This function will be called when data returns from the web api    
	request.onload = function() {        
	//get all the restaurants records into our restaurant array        
	restaurant_array = JSON.parse(request.responseText);        
	//Fetch the reviews as well        
	fetchReviews();
	console.log(restaurant_array) // output to console        
	//call the function so as to display all restaurant tiles       	
    displayRestaurants(); 
};    

//This command starts the calling of the restaurants web api    
request.send();}

function displayRestaurants() {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
            var restaurant_image = restaurant_array[count].restaurant_image;
            var restaurant_name = restaurant_array[count].restaurant_name;
	        var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + restaurant_image + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' + count + '" onClick="showRestaurantReviews(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count + '" onClick="showRestaurantDetails(this)">' + restaurant_name + '</h5></div>\
                        </div>'
    table.insertAdjacentHTML('beforeend', cell);
    restaurantCount++;
    }
    document.getElementById("summary").textContent = message;

}

function showRestaurantDetails(element) {

    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantName").textContent = restaurant_array[item].restaurant_name;
    document.getElementById("restaurantThumbnail").src = restaurant_array[item].restaurant_thumbnail;
    document.getElementById("foodType").textContent = restaurant_array[item].food_type;
    document.getElementById("originCountry").textContent = restaurant_array[item].origin_country;
    document.getElementById("branches").textContent = restaurant_array[item].restaurant_branches;
    document.getElementById("restaurantLink").src = restaurant_array[item].restaurant_link;
    document.getElementById("restaurantHqAddress").textContent = restaurant_array[item].restaurant_hq_address;
    document.getElementById("description").textContent = restaurant_array[item].restaurant_description;

}

function goToWebsite() {
    window.open(restaurant_array[currentIndex].restaurant_link, "_blank");
};

