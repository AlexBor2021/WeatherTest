const link = "http://api.weatherstack.com/current?access_key=a0c5abb0627cd11a8fda30db8bcff784";

let input = document.querySelector('input');
const button = document.querySelector('button');

let store = {
    city: "Москва",
    cloudcover: 0,
    observationTime: " ",
    temperature: 0,
    windSpeed: 0,
};

let fetchData = async () => {
    try{
        const result = await fetch(`${link}&query=${store.city}`).then(response => response.json());
        
        const{
            current: {cloudcover, observation_time: observationTime, temperature, wind_speed: windSpeed},
            location: {name: city},
        } = result;


        store = {
                city,
                cloudcover,
                observationTime,
                temperature,
                windSpeed,
        }
    }
    catch(error){
        console.log(error);
    };

   document.querySelector('h2').innerHTML = `Город - ${store.city}`;
   document.querySelector('.temperature').innerHTML = `Температура: ${store.temperature} °`;
   document.querySelector('.windSpeed').innerHTML = `Скорость ветра: ${store.windSpeed} м/с`;
   document.querySelector('.cloudcover').innerHTML = `Облачность: ${store.cloudcover} %`;
   document.querySelector('.time').innerHTML = `Время: ${store.observationTime}`;

}

const setText = () =>{
    store.city = input.value;
    fetchData();
}

fetchData();