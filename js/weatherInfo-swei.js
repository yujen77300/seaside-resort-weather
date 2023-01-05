fetch(`https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-B0053-001?Authorization=${CWB_API_KEY}&format=JSON`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let locations = data.cwbopendata.dataset.locations.location;
        // console.log(locations)
        let locationData = [
            //宜蘭頭城
            {
                "locationName": locations[0].locationName,
                "temp": locations[0].weatherElement[4].time[0].elementValue.value + "-" + locations[0].weatherElement[3].time[0].elementValue.value,
                "rain": locations[0].weatherElement[9].time[0].elementValue.value,
                "uvi": locations[0].weatherElement[13].time[0].elementValue[0].value + "/" + locations[0].weatherElement[13].time[0].elementValue[1].value,
            },
            //花蓮磯崎
            {
                "locationName": locations[1].locationName,
                "temp": locations[1].weatherElement[4].time[0].elementValue.value + "-" + locations[1].weatherElement[3].time[0].elementValue.value,
                "rain": locations[1].weatherElement[9].time[0].elementValue.value,
                "uvi": locations[1].weatherElement[13].time[0].elementValue[0].value + "/" + locations[1].weatherElement[13].time[0].elementValue[1].value,
            },
            //屏東墾丁
            {
                "locationName": locations[2].locationName,
                "temp": locations[2].weatherElement[4].time[0].elementValue.value + "-" + locations[2].weatherElement[3].time[0].elementValue.value,
                "rain": locations[2].weatherElement[9].time[0].elementValue.value,
                "uvi": locations[2].weatherElement[13].time[0].elementValue[0].value + "/" + locations[2].weatherElement[13].time[0].elementValue[1].value,
            },
            //苗栗崎頂
            {
                "locationName": locations[5].locationName,
                "temp": locations[5].weatherElement[4].time[0].elementValue.value + "-" + locations[5].weatherElement[3].time[0].elementValue.value,
                "rain": locations[5].weatherElement[9].time[0].elementValue.value,
                "uvi": locations[5].weatherElement[13].time[0].elementValue[0].value + "/" + locations[5].weatherElement[13].time[0].elementValue[1].value,
            },
            //高雄西子灣
            {
                "locationName": locations[7].locationName,
                "temp": locations[7].weatherElement[4].time[0].elementValue.value + "-" + locations[7].weatherElement[3].time[0].elementValue.value,
                "rain": locations[7].weatherElement[9].time[0].elementValue.value,
                "uvi": locations[7].weatherElement[13].time[0].elementValue[0].value + "/" + locations[7].weatherElement[13].time[0].elementValue[1].value,
            },
            //基隆和平島
            {
                "locationName": locations[9].locationName,
                "temp": locations[9].weatherElement[4].time[0].elementValue.value + "-" + locations[9].weatherElement[3].time[0].elementValue.value,
                "rain": locations[9].weatherElement[9].time[0].elementValue.value,
                "uvi": locations[9].weatherElement[13].time[0].elementValue[0].value + "/" + locations[9].weatherElement[13].time[0].elementValue[1].value,

            },
        ]
        // console.log(locationData)
        insertLocationData(locationData)
    })



function insertLocationData(locationData) {
    let location = document.querySelector(".location-title-name")
    let temperatureContent = document.querySelector(".temperature-content")
    let rainPosibiltyContent = document.querySelector(".rain-posibilty-content")
    let nvContent = document.querySelector(".nv-content")

    location.textContent = locationData[0].locationName
    temperatureContent.textContent = locationData[0].temp
    rainPosibiltyContent.textContent = locationData[0].rain + "%"
    nvContent.textContent = locationData[0].uvi

    let Yilan = document.querySelector("#Yilan")
    let yilan = document.querySelector(".Yilan")
    Yilan.addEventListener('click', () => {
        location.textContent = locationData[0].locationName
        temperatureContent.textContent = locationData[0].temp
        rainPosibiltyContent.textContent = locationData[0].rain + "%"
        nvContent.textContent = locationData[0].uvi
    })
    yilan.addEventListener('click', () => {
        location.textContent = locationData[0].locationName
        temperatureContent.textContent = locationData[0].temp
        rainPosibiltyContent.textContent = locationData[0].rain + "%"
        nvContent.textContent = locationData[0].uvi
    })

    let Hualien = document.querySelector("#Hualien")
    let hualien = document.querySelector(".Hualien")
    Hualien.addEventListener('click', () => {
        location.textContent = locationData[1].locationName
        temperatureContent.textContent = locationData[1].temp
        rainPosibiltyContent.textContent = locationData[1].rain + "%"
        nvContent.textContent = locationData[1].uvi
    })

    hualien.addEventListener('click', () => {
        location.textContent = locationData[1].locationName
        temperatureContent.textContent = locationData[1].temp
        rainPosibiltyContent.textContent = locationData[1].rain + "%"
        nvContent.textContent = locationData[1].uvi
    })


    let Pingtung = document.querySelector("#Pingtung")
    let pingtung = document.querySelector(".Pingtung")
    Pingtung.addEventListener('click', () => {
        location.textContent = locationData[2].locationName
        temperatureContent.textContent = locationData[2].temp
        if (locationData[2].rain == null) {
            rainPosibiltyContent.textContent = 0
        } else {
            rainPosibiltyContent.textContent = locationData[2].rain + "%"
        }
        nvContent.textContent = locationData[2].uvi
    })

    pingtung.addEventListener('click', () => {
        location.textContent = locationData[2].locationName
        temperatureContent.textContent = locationData[2].temp
        rainPosibiltyContent.textContent = locationData[2].rain + "%"
        nvContent.textContent = locationData[2].uvi
    })


    let Miaoli = document.querySelector("#Miaoli")
    let miaoli = document.querySelector(".Miaoli")
    Miaoli.addEventListener('click', () => {
        location.textContent = locationData[3].locationName
        temperatureContent.textContent = locationData[3].temp
        rainPosibiltyContent.textContent = locationData[3].rain + "%"
        nvContent.textContent = locationData[3].uvi
    })
    miaoli.addEventListener('click', () => {
        location.textContent = locationData[3].locationName
        temperatureContent.textContent = locationData[3].temp
        rainPosibiltyContent.textContent = locationData[3].rain + "%"
        nvContent.textContent = locationData[3].uvi
    })


    let Kaohsiung = document.querySelector("#Kaohsiung")
    let kaohsiung = document.querySelector(".Kaohsiung")
    Kaohsiung.addEventListener('click', () => {
        location.textContent = locationData[4].locationName
        temperatureContent.textContent = locationData[4].temp
        rainPosibiltyContent.textContent = locationData[4].rain + "%"
        nvContent.textContent = locationData[4].uvi
    })
    kaohsiung.addEventListener('click', () => {
        location.textContent = locationData[4].locationName
        temperatureContent.textContent = locationData[4].temp
        rainPosibiltyContent.textContent = locationData[4].rain + "%"
        nvContent.textContent = locationData[4].uvi
    })

    let Keelung = document.querySelector("#Keelung")
    let keelung = document.querySelector("#Keelung")
    Keelung.addEventListener('click', () => {
        location.textContent = locationData[5].locationName
        temperatureContent.textContent = locationData[5].temp
        rainPosibiltyContent.textContent = locationData[5].rain + "%"
        nvContent.textContent = locationData[5].uvi
    })

    keelung.addEventListener('click', () => {
        location.textContent = locationData[5].locationName
        temperatureContent.textContent = locationData[5].temp
        rainPosibiltyContent.textContent = locationData[5].rain + "%"
        nvContent.textContent = locationData[5].uvi
    })

}



