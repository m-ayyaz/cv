const cityForm = document.querySelector('form');

const updatCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.key);

    return{
        cityDetails: cityDetails,
        weather: weather
    };
};

cityForm.addEventListener('submit' , e =>{
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update ui with new city;
    updatCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));

});