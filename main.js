$(document).ready(function () {

    $("#submitWeather").click(function () {

        let apiKey = "43604669ed26bcf8b5858af9ce91c46a";
        // var city = $("#city").val();
        var city = "austin";
        let units = "imperial";
        let days = "5;"
        let urlCurrent = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=" + apiKey;
        let urlFive = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + units + "&appid=" + apiKey;
        

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
        success: function(five){
            var cards = show(five);
        $("#day1").html(cards);
        console.log(five)
        // $("#city").val("");

        function show(five) {


            return "<h3><strong></strong>" + five.list[0].dt_txt + "</h3>"
    
        };
        }
    });



        } else {

            $("#error").html("Field cannot be empty");
        }

  

  



});

    // function show(five){

    //     // console.log("test");
    //     //    console.log(city);

    //   return 
    //     //    "<h2>" + list[2].dt_txt +"</h2>" 
    //         //   "<h3><strong>Temperature</strong>: "+ current.main.temp + " °F" +"</h3>" +
    //         //   "<h3><strong>Humidity</strong>: "+ current.main.humidity + "%" +"</h3>" + 
    //         //   "<h3><strong>Wind Speed</strong>: "+ current.wind.speed + " MPH" +"</h3>"  
    // console.log("test");
    //       };
    // request(url, function (err, response, body) {
    //   if(err){
    //     console.log('error:', error);
    //   } else {
    //     console.log('body:', body);
    //   }
    // });


    // "<h3><strong>Weather</strong>: "+ data.list[0].main.temp +"</h3>"  
    // "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>" +

});