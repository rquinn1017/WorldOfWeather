$(document).ready(function(){

$("#submitWeather").click(function(){

    let apiKey = "43604669ed26bcf8b5858af9ce91c46a";
    // var city = $("#city").val();
    var city = "austin";
    let units = "imperial";
    let urlCurrent = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=" + apiKey;
    let urlFive = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + units + "&appid=" + apiKey;
    
    
        // var queryURL_5Day = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=43604669ed26bcf8b5858af9ce91c46a";
            
        //     var queryURL_5Day = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=43604669ed26bcf8b5858af9ce91c46a";
            // "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startYear + "&end_date" + endYear + "&q=" + query + "&api-key=9qYOevLt8LZN1Y60GVBvkg1iZHfGFO2Z";
           
          if(city != ""){ 
           
           
            $.ajax({
                url: urlCurrent,
                method: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);
                $("#result").html(widget);

                // $("#city").val("");
                }
            });

        }else{

            $("#error").html("Field cannot be empty");
         }
      
                });
               });
    


function show(data){
    
  var currentDate = moment().format("dddd, MMM Do YYYY");
  $("#today").text
    (currentDate);

return  "<h2>" + data.name +" ("+ currentDate+ ")" +"</h2>" +
        "<h3><strong>Temperature</strong>: "+ data.main.temp + " °F" +"</h3>" +
        "<h3><strong>Humidity</strong>: "+ data.main.humidity + "%" +"</h3>" + 
        "<h3><strong>Wind Speed</strong>: "+ data.wind.speed + " MPH" +"</h3>"  
     
    }

// request(url, function (err, response, body) {
//   if(err){
//     console.log('error:', error);
//   } else {
//     console.log('body:', body);
//   }
// });


// "<h3><strong>Weather</strong>: "+ data.list[0].main.temp +"</h3>"  
        // "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>" +