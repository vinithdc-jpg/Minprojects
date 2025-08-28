const apidet ='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const apikey = '999e2fd09b4e3ceaa640d56e433f3517'

const searchbox = document.querySelector('.name')
const searchbtn = document.querySelector('.button')

async function weather(city) {
    let response = await fetch(apidet + city + `&appid=${apikey}`)
    var data = await response.json()

    console.log(data)

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.temp').innerHTML = data.main.humidity + "%";
    document.querySelector('.km').innerHTML = data.wind.speed + 'Km/h';

}

searchbtn.addEventListener('click', () =>{
    weather(searchbox.value)
})

