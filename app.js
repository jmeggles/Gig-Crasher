//global variables for skyscanner search params

var userMarket = "US";
var currency = "USD";
var locale = "en-US";
var userDestination = document.getElementById("searchDestination").value;

var queryString = userMarket + '/' + currency + '/' + locale + '/' +
    userDestination;



var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/" + queryString,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "f4e7fa0f3amsh07cbec10686c47cp142668jsne2338ac4ac2e"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

// ticketmaster ajax test
$.ajax({
    type: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=93yzDEOR3pw5XEs9GHp6f7ZCGLvGZg6d",
    async: true,
    dataType: "json",
    success: function (json) {
        console.log(json);
        document.getElementById('')
        // Parse the response.
        // Do other things.
    },
    error: function (xhr, status, err) {
        // This time, we do not end up here!
    }
});