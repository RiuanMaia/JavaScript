//chave API = fcd3c8cf2f33d63be1bc181b8c8c4395
//`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
const qS = (el) => document.querySelector(el);

const input = qS("input");
const button = qS(".buttonPesquisar");
let nameCity = qS(".nameCity");
let tempCity = qS(".tempNumber");
const upperO = qS(".upperO");
const lowC = qS(".lowC");



button.addEventListener("click",()=>{
    if(!input.value) return;
    weatherData();
       
});


function weatherData() {
    let UrlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=fcd3c8cf2f33d63be1bc181b8c8c4395`;
    fetch(UrlAPI)
    .then(function (res) {
        return res.json()
    }).then(function(JSON) {
        console.log(JSON);
        input.value = "";  
        atualizaInfoWeather(JSON);
        
        
    }).catch(function(error){
        window.alert(error)
    })  
}
function atualizaInfoWeather(JSON){
    if(JSON.weather[0].description){
        if(JSON.weather[0].description == "broken clouds"){
            JSON.weather[0].description = "nuvens quebradas";
        }
        else if(JSON.weather[0].description == "scattered clouds") {
            JSON.weather[0].description = "nuvens dispersas";
        }
        else if(JSON.weather[0].description == "clear sky") {
            JSON.weather[0].description = "céu limpo";
        }
        else if(JSON.weather[0].description == "overcast clouds") {
            JSON.weather[0].description = "nublado";
        }
        else if(JSON.weather[0].description == "few clouds") {
            JSON.weather[0].description = "poucas nuvens";
        }
    }
    nameCity.innerHTML = `${JSON.name}, ${JSON.sys.country}`;
    tempCity.innerHTML = parseInt(JSON.main.temp).toFixed(0);
    upperO.innerHTML = "o";
    lowC.innerHTML = "C" + " - " + JSON.weather[0].description; 
     
}