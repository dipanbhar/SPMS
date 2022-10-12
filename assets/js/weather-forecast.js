// API call
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat = "lat=52.229676&";
let lon = "lon=21.012229&";
let apiOptions = "units=metric&exclude=minutely,alerts&";
let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
let file = queryUrl + lat + lon + apiOptions + apiKey;

// Weather main data
let main = "Snow"; //data.current.weather[0].main;

let devices = [
  { deviceName: "Solar Panel", climate: "Fog" },
  { deviceName: "Motor Pump", climate: "Snow" },
  { deviceName: "Streetlight Bulb", climate: "Clouds" },
  { deviceName: "Streetlight Pole", climate: "Rain" },
  { deviceName: "Motor Starter", climate: "Clear" },
  { deviceName: "Station Pole", climate: "Thunderstorm" },
];
let content = "";

devices.forEach((d, i) => {
  content =
    content +
    `<div class="gallery-cell">
<section>
<div style="padding-top: 2%" class="container">
  <div
    class="row d-flex justify-content-center align-items-center h-100"
  >
    <div style="max-width: 100% !important;
    width: 100% !important;margin-left: 30%;
    margin-right: 30%;">
      <div
        id="wrapper-bg-${i}"
        class="card text-white bg-image shadow-4-strong"
        style="background-image: url('img/clouds.gif')"
      >
        <div class="card-header p-4 border-0">
          <div class="text-center mb-3">
            <p class="h2 mb-1" id="wrapper-name-${i}"></p>
            <p class="mb-1" id="wrapper-description-${i}"></p>
            <p class="display-1 mb-1" id="wrapper-temp-${i}"></p>
            <span class=""
              >Pressure: <span id="wrapper-pressure-${i}"></span
            ></span>
            <span class="mx-2">|</span>
            <span class=""
              >Humidity: <span id="wrapper-humidity-${i}"></span
            ></span>
          </div>
        </div>

        <div
          class="card-body p-4 mb-2"
        >
          <div class="row text-center">
            <div class="col-2">
              <img
                id="wrapper-icon-hour-now-${i}"
                src=""
                class=""
                alt=""
              />
              <strong
                class="d-block"
                id="wrapper-hour-now-${i}"
              ></strong>
            </div>

            <div class="col-2">
              <strong
                class="d-block mb-2"
                id="wrapper-time1-${i}"
              ></strong>
              <img
                id="wrapper-icon-hour1-${i}"
                src=""
                class=""
                alt=""
              />
              <strong
                class="d-block"
                id="wrapper-hour1-${i}"
              ></strong>
            </div>

            <div class="col-2">
              <strong
                class="d-block mb-2"
                id="wrapper-time2-${i}"
              ></strong>
              <img
                id="wrapper-icon-hour2-${i}"
                src=""
                class=""
                alt=""
              />
              <strong
                class="d-block"
                id="wrapper-hour2-${i}"
              ></strong>
            </div>

            <div class="col-2">
              <strong
                class="d-block mb-2"
                id="wrapper-time3-${i}"
              ></strong>
              <img
                id="wrapper-icon-hour3-${i}"
                src=""
                class=""
                alt=""
              />
              <strong
                class="d-block"
                id="wrapper-hour3-${i}"
              ></strong>
            </div>

            <div class="col-2">
              <strong
                class="d-block mb-2"
                id="wrapper-time4-${i}"
              ></strong>
              <img
                id="wrapper-icon-hour4-${i}"
                src=""
                class=""
                alt=""
              />
              <strong
                class="d-block"
                id="wrapper-hour4-${i}"
              ></strong>
            </div>

            <div class="col-2">
              <strong
                class="d-block mb-2"
                id="wrapper-time5-${i}"
              ></strong>
              <img
                id="wrapper-icon-hour5-${i}"
                src=""
                class=""
                alt=""
              />
              <strong
                class="d-block"
                id="wrapper-hour5-${i}"
              ></strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</div>`;
});

document.getElementById("carousel-dummy").innerHTML = content;

devices.forEach((d, i) => {
  let description = "description";
  let temp = Math.round(30);
  let pressure = "20";
  let humidity = "50";
  let name = d.deviceName;

  document.getElementById(`wrapper-description-${i}`).innerHTML = description;
  document.getElementById(`wrapper-temp-${i}`).innerHTML = temp + "°C";
  document.getElementById(`wrapper-pressure-${i}`).innerHTML = pressure;
  document.getElementById(`wrapper-humidity-${i}`).innerHTML = humidity + "°C";
  document.getElementById(`wrapper-name-${i}`).innerHTML = name;

  document.getElementById(`wrapper-bg-${i}`).style.backgroundSize = "cover";
  switch (d.climate) {
    case "Snow":
      document.getElementById(`wrapper-bg-${i}`).style.backgroundImage =
        "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
      break;
    case "Clouds":
      document.getElementById(`wrapper-bg-${i}`).style.backgroundImage =
        "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
      break;
    case "Fog":
      document.getElementById(`wrapper-bg-${i}`).style.backgroundImage =
        "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
      break;
    case "Rain":
      document.getElementById(`wrapper-bg-${i}`).style.backgroundImage =
        "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
      break;
    case "Clear":
      document.getElementById(`wrapper-bg-${i}`).style.backgroundImage =
        "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
      break;
    case "Thunderstorm":
      document.getElementById(`wrapper-bg-${i}`).style.backgroundImage =
        "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
      break;
    default:
      document.getElementById(`wrapper-bg-${i}`).style.backgroundImage =
        "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
      break;
  }
});
