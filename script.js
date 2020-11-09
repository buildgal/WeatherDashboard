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

    let currentCity=$("#cityHead");
        
    let city=$("#cityInput").val();
        cityList.push(city);
        displayCity();


    let todaysDate=moment().format("MMM Do YY"); 
        currentCity.text(city+": "+todaysDate);

//API CALL TO BRING BACK THE CURRENT DAY'S WEATHER 
    let apiKey="afde9c2bc8e7dd302ea99cab374498c7";
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
          elwindSpeed.text("Wind Speed: "+dataWindSpeed+"MPH");

        //setting the tempature 
        elTemp=$("#tempature");
        dataTemp=response.main.temp;
        convertTemp=Math.floor((dataTemp-273.15)*1.8+32);
        elTemp.text("Tempature: "+convertTemp+"°F");



        //setting the humidity
        elHum=$("#humidity");
        dataHum=response.main.humidity;
        elHum.text("Humidity: "+dataHum+"%");

        //setting the Current Day's Weather Icon
        let elwIcon=$(".weatherIMG");
        let datawIcon=response.weather[0].icon;
        let weatherImg="http://openweathermap.org/img/wn/"+datawIcon+"@2x.png";
        elwIcon.attr("src", weatherImg);

 //making the call to get the UV INDEX
        let lat=response.coord.lat;      
        let lon=response.coord.lon;

        let uvURL="http://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid="+apiKey;
        console.log(uvURL);

        $.ajax({
            url: uvURL,
            method: "GET"
          })
    
          .then(function(response) {
            let elUvIndex=$("#uvIndex");
            let dataUV=response.value;
            elUvIndex.text("UV Index: "+ dataUV);
            let uvBox=$("#uvBox");
            if (dataUV>7){
                uvBox.css("background-color","red");             
            }

            else if(dataUV>3 && dataUV<8 ){
                uvBox.css("background-color","yellow");
            }

            else if(dataUV<3){
                uvBox.css("background-color","green");
            }
            
      })
    })

//5 DAY FORCAST 
    let forcastURL="http://api.openweathermap.org/data/2.5/forecast?q="+
    city+"&appid="+
    apiKey+"&units=standard";
    iconUrl="http://openweathermap.org/img/wn/";


    $.ajax({
        url: forcastURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(response);

        //Day 1 
        elDay1=$("#date1");
        let dateDay1=moment().add(1, 'days').calendar();
        elDay1.text(dateDay1);
            //Day 1 Temp 
            elTemp1=$("#temp1");
            dataTemp1=response.list[0].main.temp;
            let day1Temp=Math.floor((dataTemp1-273.15)*1.8+32);
            elTemp1.text("Tempature: "+day1Temp+"°F");
                //Day 1 Humidity
                elHum1=$("#hum1");
                dataHum1=response.list[0].main.humidity;
                elHum1.text("Humidity: "+dataHum1+"%");
                    //Day 1 Icon
                    let elIcon1=$("#icon1");
                    let dataIcon1=response.list[0].weather[0].icon;
                    let icon1Img=iconUrl+dataIcon1+"@2x.png";
                    elIcon1.attr("src", icon1Img);
                    
                   

        
        //Day 2 
        elDay2=$("#date2");
        dateDay2=moment().add(2, 'days').calendar();
        elDay2.text(dateDay2);
            //Day 2 Temp 
            elTemp2=$("#temp2");
            dataTemp2=response.list[1].main.temp;
            dayTemp2=Math.floor((dataTemp2-273.15)*1.8+32);
            elTemp2.text("Tempature: "+dayTemp2+"°F");
                //Day 2 Hum
                elHum2=$("#hum2");
                dataHum2=response.list[1].main.humidity;
                elHum2.text("Humidity: "+dataHum2+"%");
                    //Day 2 Icon
                    let elIcon2=$("#icon2");
                    let dataIcon2=response.list[1].weather[0].icon;
                    let icon2Img=iconUrl+dataIcon2+"@2x.png";
                    elIcon2.attr("src", icon2Img);
                    
                    
        //Day 3      
        elDay3=$("#date3");
        dateDay3=moment().add(3, 'days').calendar();
        elDay3.text(dateDay3);
            //Day 3 Temp 
            elTemp3=$("#temp3");
            dataTemp3=response.list[2].main.temp;
            dayTemp3=Math.floor((dataTemp3-273.15)*1.8+32);
            elTemp3.text("Tempature: "+dayTemp3+"°F");
                //Day 3 Hum
                elHum3=$("#hum3");
                dataHum3=response.list[2].main.humidity;
                elHum3.text("Humidity: "+dataHum3+"%"); 
                    //Day 3 Icon
                    let elIcon3=$("#icon3");
                    let dataIcon3=response.list[2].weather[0].icon;
                    let icon3Img=iconUrl+dataIcon3+"@2x.png";
                    elIcon3.attr("src", icon3Img);
                       

        //Day 4 
        elDay4=$("#date4");
        dateDay4=moment().add(4, 'days').calendar();
        elDay4.text(dateDay4);
            //Day 4 Temp 
            elTemp4=$("#temp4");
            dataTemp4=response.list[3].main.temp;
            dayTemp4=Math.floor((dataTemp3-273.15)*1.8+32);
            elTemp4.text("Tempature: "+dayTemp4+"°F");
                //Day 4 Hum
                elHum4=$("#hum4");
                dataHum4=response.list[3].main.humidity;
                elHum4.text("Humidity: "+dataHum4+"%");
                   //Day 4 Icon
                   let elIcon4=$("#icon4");
                   let dataIcon4=response.list[3].weather[0].icon;
                   let icon4Img=iconUrl+dataIcon4+"@2x.png";
                   elIcon4.attr("src", icon4Img);
                            

        //Day5 
        elDay5=$("#date5");
        dateDay5=moment().add(5, 'days').calendar();
        elDay5.text(dateDay5);
            //Day 5 Temp 
            elTemp5=$("#temp5");
            dataTemp5=response.list[4].main.temp;
            dayTemp5=Math.floor((dataTemp3-273.15)*1.8+32);
            elTemp5.text("Tempature: "+dayTemp5+"°F");
                //Day 5 Hum
                elHum5=$("#hum5");
                dataHum5=response.list[4].main.humidity;
                elHum5.text("Humidity: "+dataHum5+"%");
                   //Day 5 Icon
                   let elIcon5=$("#icon5");
                   let dataIcon5=response.list[4].weather[0].icon;
                   let icon5Img=iconUrl+dataIcon5+"@2x.png";
                   elIcon5.attr("src", icon5Img);
                    
});

});

});

