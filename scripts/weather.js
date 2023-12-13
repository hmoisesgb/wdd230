const weatherDesc = document.querySelector('#weatherDescription');
const weatherIcon = document.querySelector('#weatherIcon');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=14.64&lon=-90.51&units=imperial&appid=3637031259467a0e65ab88aab5bc72ac';

async function apiFetch(){
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('loading','lazy');
    weatherDesc.innerHTML=`${data.main.temp}&deg;F - ${desc}`;
}

apiFetch();