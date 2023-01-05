fetch(`https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-B0053-001?Authorization=${CWB_API_KEY}&format=JSON`).then((response) => {
    return response.json();
}).then((data) => {
    console.log("測試")
    console.log(data)
    console.log(data.cwbopendata.dataset)
    console.log(data.cwbopendata.dataset.locations)
    console.log(data.cwbopendata.dataset.locations.location)

    const locations = data.cwbopendata.dataset.locations.location;

    /* 雲林-三條崙 */
    const Yunlin = document.querySelector("#Yunlin");
    const yunlinMapName = document.querySelector(`.Yunlin`);
    const yunlinLocation = locations.find(obj => obj.locationName === "三條崙");

    showWeatherInfoByCounty(Yunlin, yunlinMapName, yunlinLocation);

    /* 新北-福隆 */
    const newTaipei = document.querySelector("#New-Taipei");
    const newTaipeiMapName = document.querySelector(`.New-Taipei`);
    const newTaipeiLocation = locations.find(obj => obj.locationName === "福隆");

    showWeatherInfoByCounty(newTaipei, newTaipeiMapName, newTaipeiLocation);

    /* 台東-杉原 */
    const Taitung = document.querySelector("#Taitung");
    const taitungMapName = document.querySelector(`.Taitung`);
    const taitungLocation = locations.find(obj => obj.locationName === "杉原");

    showWeatherInfoByCounty(Taitung, taitungMapName, taitungLocation);

    /* 澎湖-吉貝海園 */
    const Penghu = document.querySelector("#Penghu");
    const penghuMapName = document.querySelector(`.Penghu`);
    const penghuLocation = locations.find(obj => obj.locationName === "吉貝海園");

    showWeatherInfoByCounty(Penghu, penghuMapName, penghuLocation);

    /* 台南-馬沙溝 */
    const Tainan = document.querySelector("#Tainan");
    const tainanMapName = document.querySelector(`.Tainan`);
    const tainanLocation = locations.find(obj => obj.locationName === "馬沙溝");

    showWeatherInfoByCounty(Tainan, tainanMapName, tainanLocation);

    /* 台中-大安區 */
    const Taichung = document.querySelector("#Taichung");
    const taichungMapName = document.querySelector(`.Taichung`);
    const taichungLocation = locations.find(obj => obj.locationName === "大安區");

    showWeatherInfoByCounty(Taichung, taichungMapName, taichungLocation);
});

function showWeatherInfoByCounty(county, countyOnMap, countyLocationNameInArray) {

    countyOnMap.addEventListener("click", () => {
        const locationName = document.querySelector(`.location-title-name`);
        const temperature = document.querySelector(`.temperature-content`);
        const rainPosibilty = document.querySelector(`.rain-posibilty-content`);
        const nv = document.querySelector(`.nv-content`);

        locationName.textContent = countyLocationNameInArray.locationName;
        temperature.textContent = `${countyLocationNameInArray.weatherElement[4].time[0].elementValue.value}-${countyLocationNameInArray.weatherElement[3].time[0].elementValue.value}`;
        backgroundImg(countyLocationNameInArray.weatherElement[9].time[0].elementValue.value)
        rainPosibilty.textContent = countyLocationNameInArray.weatherElement[9].time[0].elementValue.value + "%";
        nv.textContent = `${countyLocationNameInArray.weatherElement[13].time[0].elementValue[0].value}/${countyLocationNameInArray.weatherElement[13].time[0].elementValue[1].value}`;
    });

    county.addEventListener("click", () => {

        const locationName = document.querySelector(`.location-title-name`);
        const temperature = document.querySelector(`.temperature-content`);
        const rainPosibilty = document.querySelector(`.rain-posibilty-content`);
        const nv = document.querySelector(`.nv-content`);

        locationName.textContent = countyLocationNameInArray.locationName;
        temperature.textContent = `${countyLocationNameInArray.weatherElement[4].time[0].elementValue.value}-${countyLocationNameInArray.weatherElement[3].time[0].elementValue.value}`;
        rainPosibilty.textContent = countyLocationNameInArray.weatherElement[9].time[0].elementValue.value + "%";
        backgroundImg(countyLocationNameInArray.weatherElement[9].time[0].elementValue.value)
        nv.textContent = `${countyLocationNameInArray.weatherElement[13].time[0].elementValue[0].value}/${countyLocationNameInArray.weatherElement[13].time[0].elementValue[1].value}`;
    });
}


function backgroundImg(rainPosibilty) {
    const main = document.querySelector('.main')
    if (rainPosibilty >= 50) {
        main.style.backgroundImage = "url(images/beach-rainy.jpg)"
    } else if (rainPosibilty >= 30 && rainPosibilty < 50) {
        main.style.backgroundImage = "url(images/beach-cloudy.jpg)"
    } else {
        main.style.backgroundImage = "url(images/beach-sunny.jpg)"
    }
}