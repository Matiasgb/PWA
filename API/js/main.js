const API = {
    KEY: 'cf21b610b640a7d5f53837be8f3f87b8',
    URL: 'http://api.openweathermap.org/data/2.5/',
};

/*const GOOGLE = {
    KEY: 'AIzaSyBHUlexRV_j6PkZj7pmDqQkBQcsbBU5Y5E',
    URL: 'https://www.google.com/maps/embed/v1'
};*/

const CLIMAS = ['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds'];


const button = document.getElementById("sendButton");
const main = document.getElementById("main");
const inputElement = document.getElementById("search");

button.addEventListener("click", ()=>{
 resultados(inputElement.value);
    //googleMap(inputElement.value);
  });


/*function googleMap(query) {
    const fetchPromise = fetch(`${GOOGLE.URL}place
    ?key=${GOOGLE.KEY}&q=${query}`)

    fetchPromise.then(response => {
        console.log('result', response);
        return response.json();
    }).then(result => {
        console.log('data', result);
        displayResults(result);
    }).catch(err =>{
        console.log('Location not found: ', err);
      });

}*/


function resultados(query) {
    
    const fetchPromise = fetch(`${API.URL}weather?q=${query}&units=metric&appid=${API.KEY}`)


    fetchPromise.then(response => {
        console.log('result', response);
        return response.json();
    }).then(result => {
        console.log('data', result);
        displayResults(result);
    }).catch(err =>{
        console.log('Location not found: ', err);
      });
    
    }


    function displayResults (data) {
        let city = document.querySelector('.city');
        city.innerText = `${data.name}, ${data.sys.country}`;

        let st = document.querySelector('.st');
        st.innerHTML = `${data.main.feels_like}<span>°C</span>`;

        let weather = document.querySelector('.weather');
        weather.innerHTML = `${data.weather[0].description}`;

        let wind = document.querySelector('.wind');
        wind.innerHTML = `<span>Wind Speed:</span> ${data.wind.speed}`;

        let presion = document.querySelector('.presion');
        presion.innerHTML = `<span>Pressure:</span> ${data.main.pressure}`;

        let humedad = document.querySelector('.humedad');
        humedad.innerHTML = `<span>Humidity:</span> ${data.main.humidity}`;


        for (let i = 0; i < CLIMAS.length; i++) {
            let body = document.querySelector('.container');
            if(`${data.weather[0].main}` == CLIMAS[i]) {
               body.style.backgroundImage = 'url(' + CLIMAS[i] +  '.jpg)';
            }
        }

    }
