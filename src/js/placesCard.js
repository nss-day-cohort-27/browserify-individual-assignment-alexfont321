"use strict";

const placesCard = (place) => {
    return `<div> 
                <h3>${place.name}</h3>
                <p>${place.type}</p>
                <button id="button--${place.id}">Delete</button>
            </div>`

}

module.exports = placesCard;