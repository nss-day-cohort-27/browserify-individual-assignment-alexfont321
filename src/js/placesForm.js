"use strict";

const placeForm = () => {
    return `<form>
                <fieldset>
                    <label>Place</label>
                    <input type="text" id="place-text" placeholder="Where did you go?">
                </fieldset>
                <fieldset>
                    <label>Type</label>
                    <input type="text" id="place-type-text" placeholder="Where type of place was it?">
                </fieldset>
                <fieldset><button id="add-button">Add Place</button></fieldset>
            </form>`

};

module.exports = placeForm;