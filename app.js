document.getElementById('search-btn').addEventListener('click', () => {
    const weatherInput = document.getElementById('weather-name');
    const countryName = weatherInput.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&&units=metric&appid=3646d8aa2875564e4e09173d69392c98`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const innerCountry = document.getElementById('country');
        const innerTemp = document.getElementById('temp');
        const innerStatus = document.getElementById('status');

        innerCountry.innerText = data.name;
        innerTemp.innerText = data.main.temp;
        innerStatus.innerText = data.weather[0].main;
    })

})