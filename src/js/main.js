"use strict"

const database = require("./databaseManager");
const placesForm = require("./placesForm");
const placesCard = require("./placesCard");

document.querySelector("#place-form").innerHTML = placesForm();

database.getPlace()
.then(result => {
    result.forEach(place => {
        document.querySelector("#place-card").innerHTML += placesCard(place);
    })
})