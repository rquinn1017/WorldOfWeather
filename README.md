# WorldOfWeather

This application is the one stop shop for all your weather related needs. 

By using openweathermap APIs a user can search for weather reports by city.

* After searching for a city, the following information is displayed:

  *  Current temperature

  *  Current humidity

  *  Windspeed

  *  Uv index

  *  5 day forecast

Alongside the current weather as well as the 5 day forcast, an image corresponding to the weather is displayed.


Application stores previously searched for cities in localstorage and displays them to the user. When the page is first loaded, the most recently search city is pulled from local storage and passed the APIs to return the weather for that city. 

To update the search city, the user is able to either type in a new city in the search field and click the search button, or they can click on one of the prior search city names listed below the search box to easily search for one of the previously searched cities.

Deployed Website: https://rquinn1017.github.io/WorldOfWeather/