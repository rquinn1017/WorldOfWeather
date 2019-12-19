$(document).ready(function () {

    $("#submitWeather").click(function () {

        let apiKey = "43604669ed26bcf8b5858af9ce91c46a";
        var city = $("#city").val();
        // var city = "austin";
        let units = "imperial";
        // let days = "5;"
        let urlCurrent = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=" + apiKey;
        let urlFive = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + units + "&appid=" + apiKey;
        var hist = localStorage.length;
        console.log(hist);
        localStorage.setItem(hist, city);
        const search = JSON.parse(localStorage.getItem("city")) || [];

const maxSearch = 5;
        

        console.log(search);
        if (city != "") {

            console.log(urlFive);

            $.ajax({
                url: urlCurrent,
                method: "GET",
                // dataType: "jsonp",
                success: function (current) {
                    var widget = show(current);
                    $("#result").html(widget);
                    var lon = current.coord.lon;
                    var lat = current.coord.lat;
                    var urlUV = "http://api.openweathermap.org/data/2.5/uvi?q=&appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;

                    function show(current) {

                        var currentDate = moment().format("dddd, MMM Do YYYY");
                        $("#today").text
                            (currentDate);

                        return "<h2>" + current.name + " (" + currentDate + ")" + "</h2>" +
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
                // dataType: "jsonp",   
                success: function (five) {
                    var cards = show(five);
                    // $(".card").html(cards);
                    console.log(five.list[7].dt_txt)
                    // $("#city").val("");

                    function show(five) {

                       
                      return $("#day1").html(moment(five.list[7].dt_txt).format("ll")),
                        $("#icon1").html('<img src="http://openweathermap.org/img/wn/' + five.list[7].weather[0].icon + '.png"/>'),
                        $("#temp1").html("Temp: " + five.list[7].main.temp_max + " °F"),
                        $("#humidity1").html("Humidity: " + five.list[7].main.humidity + "%"),
                        $("#day2").html(moment(five.list[15].dt_txt).format("ll")),
                        $("#icon2").html('<img src="http://openweathermap.org/img/wn/' + five.list[15].weather[0].icon + '.png"/>'),
                        $("#temp2").html("Temp: " + five.list[15].main.temp_max + " °F"),
                        $("#humidity2").html("Humidity: " + five.list[15].main.humidity + "%"),
                        $("#day3").html(moment(five.list[23].dt_txt).format("ll")),
                        $("#icon3").html('<img src="http://openweathermap.org/img/wn/' + five.list[23].weather[0].icon + '.png"/>'),
                        $("#temp3").html("Temp: " + five.list[23].main.temp_max + " °F"),
                        $("#humidity3").html("Humidity: " + five.list[23].main.humidity + "%"),
                        $("#day4").html(moment(five.list[31].dt_txt).format("ll")),
                        $("#icon4").html('<img src="http://openweathermap.org/img/wn/' + five.list[31].weather[0].icon + '.png"/>'),
                        $("#temp4").html("Temp: " + five.list[31].main.temp_max + " °F"),
                        $("#humidity4").html("Humidity: " + five.list[31].main.humidity + "%"),
                        $("#day5").html(moment(five.list[39].dt_txt).format("ll")),
                        $("#icon5").html('<img src="http://openweathermap.org/img/wn/' + five.list[39].weather[0].icon + '.png"/>'),
                        $("#temp5").html("Temp: " + five.list[39].main.temp_max + " °F"),
                        $("#humidity5").html("Humidity: " + five.list[39].main.humidity + "%")

                    };
                }
            });



        } else {

            $("#error").html("Field cannot be empty");
        }


     

    });


    var hist1 = (localStorage.getItem("0")) || [];
    var hist2 = (localStorage.getItem("1")) || [];
    var hist3 = (localStorage.getItem("2")) || [];
    var hist4 = (localStorage.getItem("3")) || [];
    var hist5 = (localStorage.getItem("4")) || [];
    var hist6 = (localStorage.getItem("5")) || [];
    var hist7 = (localStorage.getItem("6")) || [];
    var hist8 = (localStorage.getItem("7")) || [];
    var hist9 = (localStorage.getItem("8")) || [];
  

    $("#hist-9").text(hist1);
    $("#hist-8").html(hist2);
    $("#hist-7").html(hist3);
    $("#hist-6").html(hist4);
    $("#hist-5").html(hist5);
    $("#hist-4").html(hist6);
    $("#hist-3").html(hist7);
    $("#hist-2").html(hist8);
    $("#hist-1").html(hist9);

});