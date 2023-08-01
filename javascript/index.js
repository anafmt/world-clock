
function updateTime() {
    // luanda
    let luandaElement= document.querySelector("#luanda");
    let luandaDateElement = luandaElement.querySelector(".date")
    let luandaTimeElement = luandaElement.querySelector(".time")
    let luandaTime = moment().tz("Africa/Luanda");
    luandaDateElement.innerHTML = luandaTime.format('MMMM Do YYYY')
luandaTimeElement.innerHTML = luandaTime.format("h:mm:ss [<small>]A[</small>]");

// azores
let azoresElement= document.querySelector("#azores");
let azoresDateElement = azoresElement.querySelector(".date")
let azoresTimeElement = azoresElement.querySelector(".time")
let azoresTime = moment().tz("Atlantic/Azores");
azoresDateElement.innerHTML = azoresTime.format('MMMM Do YYYY')
azoresTimeElement.innerHTML = azoresTime.format("h:mm:ss [<small>]A[</small>]");

// hong kong
let hongkongElement= document.querySelector("#hong-kong");
let hongkongDateElement = hongkongElement.querySelector(".date")
let hongkongTimeElement = hongkongElement.querySelector(".time")
let hongkongTime = moment().tz("Asia/Hong_Kong");
hongkongDateElement.innerHTML = hongkongTime.format('MMMM Do YYYY')
hongkongTimeElement.innerHTML = hongkongTime.format("h:mm:ss [<small>]A[</small>]");

// mexico city
let mexicocityElement= document.querySelector("#mexico-city");
let mexicocityDateElement = mexicocityElement.querySelector(".date")
let mexicocityTimeElement = mexicocityElement.querySelector(".time")
let mexicocityTime = moment().tz("America/Mexico_City");
mexicocityDateElement.innerHTML = mexicocityTime.format('MMMM Do YYYY')
mexicocityTimeElement.innerHTML = mexicocityTime.format("h:mm:ss [<small>]A[</small>]");

};

updateTime();
setInterval(updateTime, 1000);



