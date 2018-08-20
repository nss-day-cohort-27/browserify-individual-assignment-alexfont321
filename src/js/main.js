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
}).then(() => {
    document.querySelector("#place-form").addEventListener("click", (event) => {
        if (event.target.id === "add-button") {
            let newObject = {
                name: document.querySelector("#place-text").value,
                type: document.querySelector("#place-type-text").value
            }
            database.addPlace(newObject)
            .then(() => {
                return database.getPlace()
            }).then(result => {
                    document.querySelector("#place-card").innerHTML = "";
                    result.forEach(place => {
                        document.querySelector("#place-card").innerHTML += placesCard(place);

                })

            })
        }

    })

    document.querySelector("#place-card").addEventListener("click", (event) => {
        if (event.target.className === "delete-button") {
            database.deletePlace(event.target.id.split("--")[1])
            .then(() => {
                return database.getPlace()
            }).then(result => {
                    document.querySelector("#place-card").innerHTML = "";
                    result.forEach(place => {
                        document.querySelector("#place-card").innerHTML += placesCard(place);

                })

            })
        }
    })

})