
//create a variable for button, inputvalue, names, description, temperature value
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var names = document.querySelector('.names');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


//add an event listener to the button if clicked..
//anonymous function with the fetch api as task to perform..
button.addEventListener('click', function(){
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&' + {yourKey})
    .then(response=> response.json())
    .then(result => {
      var  nameValue = result['name'];
      var  tempValue = result['main']['temp'];
      var tempValueCelsius = tempValue - 273.15;
      var descValue = result['weather'][0]['description'];
     

      names.innerHTML = "City : " + nameValue;
      temp.innerHTML = "Temperature : " + tempValueCelsius.toFixed(2) + "&deg;C";
      desc.innerHTML = "Description : " + descValue;

      //displaying the weather icons for the respective weather
      const { icon} = result.weather[0];
      
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";

      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?city " + inputValue.value + "')";
      document.body.style.backgroundRepeat = "none";
      document.body.style.backgroundSize = "100";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    }
    )
    // .then(result => console.log(result));
    .catch(err => alert("Wrong name of City!")) 
    
})

