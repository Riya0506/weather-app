const apiKey="3a4a6ea053a699148fdf845b683ece63"; 
const weatherDataEl= document.getElementById("weather-data")

const cityInputEl= document.getElementById("city-input")
const formEl=document.querySelector("form")
formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    const cityValue= cityInputEl.value;
    getWeatherData(cityValue);
} );

 async function getWeatherData(cityValue){
    try {
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
    if(!response.ok){
        throw new Error("network was not ok")
    }
    const data=await response.json()
    const temperature =Math.round(data.main.temp)
    const description = data.weather[0].description
    weatherDataEl.querySelector(".temperature").textContent=`${temperature}C`;
    weatherDataEl.querySelector(".description").textContent=description;
    } catch (error) {
        
    }
}