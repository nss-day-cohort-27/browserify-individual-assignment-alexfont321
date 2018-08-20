"use strict";

const database = Object.create(null, {
    getPlace: {
        value: () => {
            return fetch("http://localhost:8088/places")
            .then(r => r.json())
        }
    },
    deletePlace: {
        value: (placeId) => {
            return fetch(`http://localhost:8088/places/${placeId}`, { 
            method: "DELETE"
            }).then(r => r.json())
        }
    },
    addPlace: {
        value: (getPlace) => {
            return fetch("http://localhost:8088/places", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(getPlace)
            }).then(r => r.json())
        }
    }

})

module.exports = database;