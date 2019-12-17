$(document).ready(function () {

    $("#submitWeather").click(function () {

        let apiKey = "43604669ed26bcf8b5858af9ce91c46a";
        // var city = $("#city").val();
        var city = "austin";
        let units = "imperial";
        let days = "5;"
        let urlCurrent = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=" + apiKey;
        let urlFive = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + units + "&appid=" + apiKey;
        // console.log(urlCurrent);

        // var queryURL_5Day = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=43604669ed26bcf8b5858af9ce91c46a";

        //     var queryURL_5Day = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=43604669ed26bcf8b5858af9ce91c46a";
        // "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startYear + "&end_date" + endYear + "&q=" + query + "&api-key=9qYOevLt8LZN1Y60GVBvkg1iZHfGFO2Z";

        if (city != "") {


            $.ajax({
                url: urlCurrent,
                method: "GET",
                // dataType: "jsonp",
                success: function (current) {
                    var widget = show(current);
                    $("#result").html(widget);
                    var lon = current.coord.lon;
                    var lat = current.coord.lat;
                    console.log(lon);
                    var urlUV = "http://api.openweathermap.org/data/2.5/uvi?q=&appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
                    // $("#city").val("");
                    // console.log(urlUV);
                    // console.log(current);

                    function show(current) {

                        var currentDate = moment().format("dddd, MMM Do YYYY");
                        $("#today").text
                            (currentDate);
                
                        return "<h2>" + current.name + " (" + currentDate + ")" + "</h2>" +
                            "<h3><strong>Temperature</strong>: " + current.main.temp + " °F" + "</h3>" +
                            "<h3><strong>Humidity</strong>: " + current.main.humidity + "%" + "</h3>" +
                            "<h3><strong>Wind Speed</strong>: " + current.wind.speed + " MPH" + "</h3>"
                       
                    }

            
                   
                    $.ajax({
                            url: urlUV,
                            method: "GET",
                            // dataType: "jsonp",
                            success: function (UV) {
                                var ultraViolet = show(UV);
                                $("#UV").html(ultraViolet);
                                // console.log(urlUV);
                                // console.log(UV);
                                // console.log(ultraViolet);

                                function show(UV) {


                                    return "<h3><strong>UV Index</strong>: " + UV.value + "</h3>"
                            
                                };
                         
                }
            });
        }
    }); 



            // $.ajax({
            //     url: urlFive,
            //     method: "GET",
            //     // dataType: "jsonp",   
            //     success: function(five){
            //         var widget5 = show(five);
            //     $("#5dayForecast").html(widget5);
            //     console.log(five)
            //     // $("#city").val("");
            //     }
            // });



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