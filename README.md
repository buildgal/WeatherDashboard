# WeatherDashboard

In this Weather Dashboard I am making various API calls and using JavaScript and jQuery to format the data. The user is asked to input a name for a city and then the current forcast is displayed. Then a 5 day forcast is produced. This repository leverages Bootstrap, Moment, and Font Awesome. 

## Given Acceptance Critieria 
* GIVEN a weather dashboard with form inputs
* WHEN I search for a city
* THEN I am presented with current and future conditions for that city and that city is added to the search history
* I view current weather conditions for that city
* I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
* I view the UV index
* I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
* I view future weather conditions for that city
* I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
* I click on a city in the search history
* I am again presented with current and future conditions for that city
* I open the weather dashboard
* I am presented with the last searched city forecast

## Description of HTML 
Using Bootstrap I leverage the card functionality and the navigation bar. The search card functionality stories the cities that are entered and lists them. The large card on the UI displays the current days weather in the city. The 5 day forcast displays the city entered.

Most of the javascript is triggered once the user inputs a city name and then selects the search button.

## Description of Javascript 
In the script I leaverage Moment.js to set up the current date and time. The city searched is saved in local storage. The cards are populated by the various API Calls. There are a total of 3 API calls made in this project. 

### Current Day Weather 
In order to display the data I naviagate the documentation to pull the data. 
Open Weather Current Day [https://openweathermap.org/current]

### 5 Day Forcast
In order to display the data I naviagate the documentation to pull the data. 
Open Weather 5 Day Forcast [https://openweathermap.org/forecast5]


### Ultra Violet Light Index 
The UV Index element on the page requires another API call because it does not return the data on the Current Day Weather call. In order for this API call to work the latitude and the longitude from the first call is pulled and then used to the UV API Call. In order for theses call to succeed they have been nested.

The UV Index has will display red when the UV index is below 3, yellow when it is between 3 and 7, and if it is greater than 7 it will display red. This table was determined by the following scale.

[https://www.epa.gov/sunsafety/uv-index-scale-0#:~:text=3%20to%207%3A%20Moderate%20to,%2Dbrimmed%20hat%2C%20and%20sunglasses]

## Live Link 

Weather Dashboard [https://buildgal.github.io/WeatherDashboard/]


## Screenshot 
![image](../Assets/screenshot.png)