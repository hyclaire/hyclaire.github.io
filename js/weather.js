const API_Key = "376b99d50a23a970dbfb6d54d18728fe";

function onGeoOk(position) {
    // will receive geolocationposition object
    //console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    //console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_Key}&units=imperial`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

        console.log(data.name, data.weather[0].main)
    });
    // we get the response in json format
}

function onGeoError() {
    alert("Can't find your location.")
}

//openweathermap.org/current weather data API
//navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
if (navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)) {
    console.log("current position acquired")
};

// if (navigator.geolocation) {
//     console.log("navigator.geolocation is available");
//     navigator.geolocation.getCurrentPosition(function (position) {
//         console.log("current position acquired");
//     });
// }