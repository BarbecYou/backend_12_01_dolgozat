"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Planet_1 = require("./Planet");
const celestialBodies = [];
document.getElementById('submitButton').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('errorContainer').innerHTML = "";
    let planetName = document.getElementById('planetNameInput').value.toString().trim();
    let planetAge = document.getElementById('planetAgeInput').valueAsNumber;
    let planetSize = document.getElementById('planetSizeInput').valueAsNumber;
    let planetWaterContent = document.getElementById('planetWaterContentInput').valueAsNumber;
    const namePattern = /^[ a-zA-Z]{2,}$/;
    const nameOK = namePattern.test(planetName);
    const ageOK = planetAge > 0;
    const sizeOK = planetSize >= 1500;
    const waterOK = planetWaterContent >= 0 && planetWaterContent <= 100;
    console.log(nameOK);
    console.log(ageOK);
    console.log(sizeOK);
    console.log(waterOK);
    let errorString = "A ";
    if (nameOK && ageOK && sizeOK && waterOK) {
        celestialBodies.push(new Planet_1.Planet(planetName, planetAge, planetSize, planetWaterContent));
        document.getElementById('sumNumber').textContent = `A felvett bolygók száma: ${celestialBodies.length}`;
        document.getElementById('sumAge').textContent = `A bolygók átlagos életkora: 
        ${celestialBodies.reduce((sum, item) => sum + item.age, 0) / celestialBodies.length}`;
    }
    else {
        if (!nameOK) {
            errorString += "név, ";
        }
        if (!ageOK) {
            errorString += "életkor, ";
        }
        if (!sizeOK) {
            errorString += "átmérő, ";
        }
        if (!waterOK) {
            errorString += "vízfelület";
        }
        errorString += " mező(k) hibásan lettek kitöltve!";
        let p = document.createElement('p');
        p.style.color = "red";
        p.textContent = errorString;
        document.getElementById('errorContainer').appendChild(p);
    }
});
