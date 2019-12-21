

$(document).ready(function () {

    // Runs right when page loads
    for (var i = 0; i < localStorage.length; i++) {
        var currentCity = localStorage.getItem(localStorage.key(i));
        $("#previousCity").prepend(
            '<tr><td class="linkCity"><label class="cityLink"> ' + currentCity + " </label></td></tr>"
        );
    };

    let lastSearch = localStorage.getItem(localStorage.length - 1);
    const apiKey = "43604669ed26bcf8b5858af9ce91c46a";
    let city = lastSearch
    const units = "imperial";
    let urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=" + apiKey;
    let urlFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + units + "&appid=" + apiKey;


    if (city === null) {
        $("#weatherContainer").removeAttr("style").hide();
    }
    else $("#weatherContainer").show();


    getWeather();



    // Runs when you type in a new search criteria and click the search button

    $("#submitWeather").click(function () {

        city = $("#city").val();
        urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=" + apiKey;
        urlFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + units + "&appid=" + apiKey;
        let hist = localStorage.length;
        localStorage.setItem(hist, city);


        if (city === null) {
            $("#weatherContainer").removeAttr("style").hide();
        }
        else $("#weatherContainer").show();

        if (city != "") {

            
            var newCity = localStorage.getItem(localStorage.length - 1);
            $("#previousCity").prepend(
                '<tr><td class="linkCity"><label class="cityLink"> ' + newCity + " </label></td></tr>"
            );

            getWeather();

        };


    });


    // Hover function for hoving over search history item

    $('.cityLink').hover(function () {
        $(this).css('cursor', 'pointer');
    })

    // End hover function


    // Functionality for when a recent search item is clicked
    $(".cityLink").click(function () {
        var clickedCity = $(this).text();

        city = clickedCity
        let units = "imperial";
        urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=" + apiKey;
        urlFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + units + "&appid=" + apiKey;

        var hist = localStorage.length;
        localStorage.setItem(hist, city);

        getWeather();
    });

    // End click recent


    // Defining reusable function for getting current weather, UV, and 5 day forcast

    function getWeather() {

        if (city === null) {
            $("#weatherContainer").removeAttr("style").hide();
        }
        else $("#weatherContainer").show();

        if (city != "") {

            $.ajax({
                url: urlCurrent,
                method: "GET",
                success: function (current) {
                    var widget = show(current);
                    $("#result").html(widget);
                    var lon = current.coord.lon;
                    var lat = current.coord.lat;
                    var urlUV = "https://api.openweathermap.org/data/2.5/uvi?q=&appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;

                    function show(current) {

                        var currentDate = moment().format("dddd, MMM Do YYYY");
                        $("#today").text
                            (currentDate);

                        return "<h2>" + current.name + " (" + currentDate + ")" + ('<img src="https://openweathermap.org/img/wn/' + current.weather[0].icon + '.png"/>') + "</h2>" +
                            "<p><strong>Temperature</strong>: " + current.main.temp + " °F" + "</p>" +
                            "<p><strong>Humidity</strong>: " + current.main.humidity + "%" + "</p>" +
                            "<p><strong>Wind Speed</strong>: " + current.wind.speed + " MPH" + "</p>"

                    };



                    $.ajax({
                        url: urlUV,
                        method: "GET",
                        success: function (UV) {
                            var ultraViolet = show(UV);
                            $("#UV").html(ultraViolet);

                            function show(UV) {


                                return "<p><strong>UV Index</strong>: " + UV.value + "</p>"

                            };



                        }
                    });
                }
            });



            $.ajax({
                url: urlFive,
                method: "GET",
                success: function (five) {
                    var cards = show(five);

                    function show(five) {


                        return $("#day1").html(moment(five.list[7].dt_txt).format("ll")),
                            $("#icon1").html('<img src="https://openweathermap.org/img/wn/' + five.list[7].weather[0].icon + '.png"/>'),
                            $("#temp1").html("Temp: " + five.list[7].main.temp_max + " °F"),
                            $("#humidity1").html("Humidity: " + five.list[7].main.humidity + "%"),
                            $("#day2").html(moment(five.list[15].dt_txt).format("ll")),
                            $("#icon2").html('<img src="https://openweathermap.org/img/wn/' + five.list[15].weather[0].icon + '.png"/>'),
                            $("#temp2").html("Temp: " + five.list[15].main.temp_max + " °F"),
                            $("#humidity2").html("Humidity: " + five.list[15].main.humidity + "%"),
                            $("#day3").html(moment(five.list[23].dt_txt).format("ll")),
                            $("#icon3").html('<img src="https://openweathermap.org/img/wn/' + five.list[23].weather[0].icon + '.png"/>'),
                            $("#temp3").html("Temp: " + five.list[23].main.temp_max + " °F"),
                            $("#humidity3").html("Humidity: " + five.list[23].main.humidity + "%"),
                            $("#day4").html(moment(five.list[31].dt_txt).format("ll")),
                            $("#icon4").html('<img src="https://openweathermap.org/img/wn/' + five.list[31].weather[0].icon + '.png"/>'),
                            $("#temp4").html("Temp: " + five.list[31].main.temp_max + " °F"),
                            $("#humidity4").html("Humidity: " + five.list[31].main.humidity + "%"),
                            $("#day5").html(moment(five.list[39].dt_txt).format("ll")),
                            $("#icon5").html('<img src="https://openweathermap.org/img/wn/' + five.list[39].weather[0].icon + '.png"/>'),
                            $("#temp5").html("Temp: " + five.list[39].main.temp_max + " °F"),
                            $("#humidity5").html("Humidity: " + five.list[39].main.humidity + "%")

                    };
                }
            });



        } else {

            $("#error").html("Field cannot be empty");
        }

    };
    // End Get Weather function


});

