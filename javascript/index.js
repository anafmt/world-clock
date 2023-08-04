
function updateTime() {
    // luanda
    let luandaElement= document.querySelector("#luanda");
    if (luandaElement) {
    let luandaDateElement = luandaElement.querySelector(".date")
    let luandaTimeElement = luandaElement.querySelector(".time")
    let luandaTime = moment().tz("Africa/Luanda");
    luandaDateElement.innerHTML = luandaTime.format('MMMM Do YYYY')
luandaTimeElement.innerHTML = luandaTime.format("h:mm:ss [<small>]A[</small>]");
    }

// azores
let azoresElement= document.querySelector("#azores");
if (azoresElement) {
let azoresDateElement = azoresElement.querySelector(".date")
let azoresTimeElement = azoresElement.querySelector(".time")
let azoresTime = moment().tz("Atlantic/Azores");
azoresDateElement.innerHTML = azoresTime.format('MMMM Do YYYY')
azoresTimeElement.innerHTML = azoresTime.format("h:mm:ss [<small>]A[</small>]");
}

// hong kong
let hongkongElement= document.querySelector("#hong-kong");
if (hongkongElement) {
let hongkongDateElement = hongkongElement.querySelector(".date")
let hongkongTimeElement = hongkongElement.querySelector(".time")
let hongkongTime = moment().tz("Asia/Hong_Kong");
hongkongDateElement.innerHTML = hongkongTime.format('MMMM Do YYYY')
hongkongTimeElement.innerHTML = hongkongTime.format("h:mm:ss [<small>]A[</small>]");
}

// mexico city
let mexicocityElement= document.querySelector("#mexico-city");
if (mexicocityElement) {
let mexicocityDateElement = mexicocityElement.querySelector(".date")
let mexicocityTimeElement = mexicocityElement.querySelector(".time")
let mexicocityTime = moment().tz("America/Mexico_City");
mexicocityDateElement.innerHTML = mexicocityTime.format('MMMM Do YYYY')
mexicocityTimeElement.innerHTML = mexicocityTime.format("h:mm:ss [<small>]A[</small>]");
}
};

function updateCity (event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }


    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format('MMMM Do YYYY')}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
</div>`;

}


updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener ("change", updateCity);



