$(document ).ready(function(){
let searchBtn= $("#searchBtn");
let cityList=[];

function displayCity (){
    $("#dropCity").empty();
    for (let i = 0; i < cityList.length; i++) {
        let box= $("<li>");
        // Adding a class of movie to our button
        box.addClass("list-group-item");
        box.attr("data-name", cityList[i]);
        // Providing the initial button text
        box.text(cityList[i]);
        // Adding the button to the HTML
        $("#dropCity").append(box);
      }

}

searchBtn.on("click", function(event) {
    event.preventDefault();
    let city=$("#cityInput").val();
    cityList.push(city);
    displayCity();
    let currentCity=$("#cityHead");
    let todaysDate=moment().format("MMM Do YY"); 
    currentCity.append(city+": "+todaysDate);

    
    let apiKey="afde9c2bc8e7dd302ea99cab374498c7";
    //let apiCity=city.val();
    
    let queryURL="http://api.openweathermap.org/data/2.5/weather?q="+
    city+"&appid="+
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
    city+"&appid="+
    apiKey+"&units=standard";

    $.ajax({
        url: forcastURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(response);

        //Day 1 
        elDay1=$("#date1");
        dateDay1=moment().add(1, 'days').calendar();
        elDay1.append(dateDay1);
        //parse out the time "at"

        //Day 1 Temp 
        elTemp1=$("#temp1");
        dataTemp1=response.list[0].main.temp;
        day1Temp=Math.floor((dataTemp1-273.15)*1.8+32);
        elTemp1.append(day1Temp);

        //Day 1 Humidity
        elHum1=$("#hum1");
        dataHum1=response.list[0].main.humidity;
        elHum1.append(dataHum1);

        
        //Day 2 
        elDay2=$("#date2");
        dateDay2=moment().add(2, 'days').calendar();
        elDay2.append(dateDay2);

        //Day 2 Temp 
        elTemp2=$("#temp2");
        dataTemp2=response.list[1].main.temp;
        dayTemp2=Math.floor((dataTemp2-273.15)*1.8+32);
        elTemp2.append(dayTemp2);

        //Day 2 Hum
        elHum2=$("#hum2");
        dataHum2=response.list[1].main.humidity;
        elHum2.append(dataHum2);      

        //Day 3      
        elDay3=$("#date3");
        dateDay3=moment().add(3, 'days').calendar();
        elDay3.append(dateDay3);

        //Day 3 Temp 
        elTemp3=$("#temp3");
        dataTemp3=response.list[2].main.temp;
        dayTemp3=Math.floor((dataTemp3-273.15)*1.8+32);
        elTemp3.append(dayTemp3);

        //Day 3 Hum
        elHum3=$("#hum3");
        dataHum3=response.list[2].main.humidity;
        elHum3.append(dataHum3);     

        //Day 4 
        elDay4=$("#date4");
        dateDay4=moment().add(4, 'days').calendar();
        elDay4.append(dateDay4);

        //Day 4 Temp 
        elTemp4=$("#temp4");
        dataTemp4=response.list[3].main.temp;
        dayTemp4=Math.floor((dataTemp3-273.15)*1.8+32);
        elTemp4.append(dayTemp4);

        //Day 4 Hum
        elHum4=$("#hum4");
        dataHum4=response.list[3].main.humidity;
        elHum4.append(dataHum4);             

        //Day5 
        elDay5=$("#date5");
        dateDay5=moment().add(5, 'days').calendar();
        elDay5.append(dateDay5);

        //Day 5 Temp 
        elTemp5=$("#temp5");
        dataTemp5=response.list[4].main.temp;
        dayTemp5=Math.floor((dataTemp3-273.15)*1.8+32);
        elTemp5.append(dayTemp5);

        //Day 5 Hum
        elHum5=$("#hum5");
        dataHum5=response.list[4].main.humidity;
        elHum5.append(dataHum5);        
});

});

});


//oustanding task 

/*
- make a function of converting the tempature 
- do a loop of 5 on the search button that displays the forcast 
*/