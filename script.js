const api = {
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key: "1cc36fe87f08e98af96d9464994504ec"
}

const input = document.querySelector("#inputId");
    input.addEventListener("keypress",enter);

    function enter(e){
        if(e.keyCode === 13) {
            getInfo(input.value);
        }
    } 

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
    console.log(result);

}
function displayResult (result)
{
    let city = document.querySelector("#city");
    city.textContent = `${result.name}`;
    getOutDate();

    let temprature = document.querySelector("#temp");
    temprature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`

    let condition = document.querySelector("#condition");
    condition.textContent = `${result.weather[0].description}`;

    let humidity = document.querySelector("#humidity");
    humidity.textContent ="Humidity: " +`${result.main.humidity}`+ "%";

    let wind = document.querySelector("#wind");
    wind.textContent = "Wind: "+`${Math.round(result.wind.speed)}`+ " mph";
}
function getOutDate(){
    const now = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}`+" "+`${date}`+" "+`${month}`+" "+`${year}`;
}