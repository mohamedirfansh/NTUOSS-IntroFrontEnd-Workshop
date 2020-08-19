window.onload = function() {
    var lat;
    var long;
    var temperatureValue = document.querySelector("#temperature-value");
    var locationTimezone = document.querySelector("#location-timezone");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            
            var api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                var temp = data.main['temp'];
                var location = data.name;

                temperatureValue.innerHTML = temp + '°C';
                locationTimezone.textContent = location;
            })

        })
    }
}