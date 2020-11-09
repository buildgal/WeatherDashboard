//$( document ).ready()
let searchBtn= $("#searchBtn");
let apiCallBtn=$("#apiCallBtn");


apiCallBtn.on("click", function() {
    let apiKey="afde9c2bc8e7dd302ea99cab374498c7";
    let apiCity="Minneapolis";
    
    let queryURL="http://api.openweathermap.org/data/2.5/weather?q="+
    apiCity+"&appid="+
    apiKey+"&units=standard";
   
    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {
        console.log(response);

        //setting the wind speed on the jumbo card 
          elwindSpeed=$("#windSpeed");
          dataWindSpeed=response.wind.speed;
          elwindSpeed.append(dataWindSpeed);

        //setting the tempature 
        elTemp=$("#tempature");
        dataTemp=response.main.temp;
        convertTemp=Math.floor((dataTemp-273.15)*1.8+32);
        elTemp.append(convertTemp);



        //setting the humidity
        elHum=$("#humidity");
        dataHum=response.main.humidity;
        elHum.append(dataHum);

      })

//5 DAY FORCAST
    let forcastURL="http://api.openweathermap.org/data/2.5/forecast?q="+
    apiCity+"&appid="+
    apiKey+"&units=standard";

    $.ajax({
        url: forcastURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(response);

        //Day 1 
        elDay1=$("#date1");
        dateDay1=response.list[0].dt;
        elDay1.append(dateDay1);

        //Day 1 Temp 
        elTemp1=$("#temp1");
        dataTemp1=response.list[0].main.temp;
        elTemp1.append(dataTemp1);

        //Day 1 Humidity
        elHum1=$("#hum1");
        dataHum1=response.list[0].main.humidity;
        elHum1.append(dataHum1);

        
        //Day 2 
        elDay2=$("#date2");
        dateDay2=response.list[1].dt;
        elDay2.append(dateDay2);

        //Day 2 Temp 
        elTemp2=$("#temp2");
        dataTemp2=response.list[1].main.temp;
        elTemp2.append(dataTemp2);

        //Day 2 Hum
        elHum2=$("#hum2");
        dataHum2=response.list[1].main.humidity;
        elHum2.append(dataHum2);      

        //Day 3      
        elDay3=$("#date3");
        dateDay3=response.list[2].dt;
        elDay3.append(dateDay3);

        //Day 3 Temp 
        elTemp3=$("#temp3");
        dataTemp3=response.list[2].main.temp;
        elTemp3.append(dataTemp3);

        //Day 3 Hum
        elHum3=$("#hum3");
        dataHum3=response.list[2].main.humidity;
        elHum3.append(dataHum3);     

        //Day 4 
        elDay4=$("#date4");
        dateDay4=response.list[3].dt;
        elDay4.append(dateDay4);

        //Day 4 Temp 
        elTemp4=$("#temp4");
        dataTemp4=response.list[3].main.temp;
        elTemp4.append(dataTemp4);

        //Day 4 Hum
        elHum4=$("#hum4");
        dataHum4=response.list[3].main.humidity;
        elHum4.append(dataHum4);             

        //Day5 
        elDay5=$("#date5");
        dateDay5=response.list[4].dt;
        elDay5.append(dateDay5);

        //Day 5 Temp 
        elTemp5=$("#temp5");
        dataTemp5=response.list[4].main.temp;
        elTemp5.append(dataTemp5);

        //Day 5 Hum
        elHum5=$("#hum5");
        dataHum5=response.list[4].main.humidity;
        elHum5.append(dataHum5);     


              

 
    
})

});


//main.humidity
//wind.speed

//1604879590 

//search for a city 

//call the API 

//pull out the data from the API 

//display the icon based off the weather 
//if rain then show clouds 

//show the index 

   /*
    let apiKey="afde9c2bc8e7dd302ea99cab374498c7";
    let apiCity="London";
    let apiCountry="uk";
    let queryURL="http://api.openweathermap.org/data/2.5/weather?q="+apiCity+","+apiCountry+"&APPID="+apiKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {

        console.log(response);


        let unix_timestamp = 1549312452
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);
https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript


 });*/