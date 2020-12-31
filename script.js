let APIKey = "e2bd06b7e8d2dcbf0da40dcde5796440";


var mySearchBar = document.querySelector('#search-term');

mySearchButton.addEventListener('click', function() {
  var cityInput = mySearchBar.value;

  var myURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput  +   '&appid=' + APIKey

  console.log(cityInput)

  fetch(myURL)
  .then(response => response.json())
  .then(data => {

    var cityNameH2 = document.querySelector('#city-name');
    var temph3 = document.querySelector('#temperature');


    cityNameH2.textContent = data.name;
    temph3.textContent = data.main.temp;

  })


})


