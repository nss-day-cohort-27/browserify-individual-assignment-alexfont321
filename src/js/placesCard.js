"use strict";

const placesCard = (place) => {
    return `<div> 
                <h3>${place.name}</h3>
                <p>${place.type}</p>
                <button class="delete-button" id="button--${place.id}">Delete</button>
            </div>`

}

module.exports = placesCard;