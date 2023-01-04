/* 全域變數 */
let roundLastSix = 6;

fetch("Data/F-B0053-001-after-Yunlin.json")
.then(function(response){
    return response.json()
})
.then(function(data){
    let locations = data.cwbopendata.dataset.locations.location;
    locations.forEach(location => {
        showWeatherInfoByCounty(location, roundLastSix);
        roundLastSix += 1; 
    });
})

function showWeatherInfoByCounty(location, round){
    const counties = document.querySelectorAll(".region-item");
    const countiesArray = [...counties];
    countiesArray[round].addEventListener("click", () => {

        const mapName = document.querySelector(`.${countiesArray[round].id}`);
        mapName.addEventListener("click", () => {
            const locationName = document.querySelector(`.location-title-name`);
            const temperature = document.querySelector(`.temperature-content`);
            const rainPosibilty = document.querySelector(`.rain-posibilty-content`);
            const nv = document.querySelector(`.nv-content`);
    
            locationName.textContent = location.locationName;
            temperature.textContent = `${location.weatherElement[4].time[0].elementValue.value}-${location.weatherElement[3].time[0].elementValue.value}`;
            rainPosibilty.textContent = location.weatherElement[9].time[0].elementValue.value + "%";
            nv.textContent = `${location.weatherElement[13].time[0].elementValue[0].value} / ${location.weatherElement[13].time[0].elementValue[1].value}`;
        });
        
        const locationName = document.querySelector(`.location-title-name`);
        const temperature = document.querySelector(`.temperature-content`);
        const rainPosibilty = document.querySelector(`.rain-posibilty-content`);
        const nv = document.querySelector(`.nv-content`);

        locationName.textContent = location.locationName;
        temperature.textContent = `${location.weatherElement[4].time[0].elementValue.value}-${location.weatherElement[3].time[0].elementValue.value}`;
        rainPosibilty.textContent = location.weatherElement[9].time[0].elementValue.value + "%";
        nv.textContent = `${location.weatherElement[13].time[0].elementValue[0].value} / ${location.weatherElement[13].time[0].elementValue[1].value}`;
    });
}

showWeatherInfoByCounty();