import { CelestialBody } from './CelestialBody'
import { Planet } from './Planet';

const celestialBodies: CelestialBody[] = [];

document.getElementById('submitButton')!.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('errorContainer')!.innerHTML = "";

    let planetName: string = (document.getElementById('planetNameInput') as HTMLInputElement).value.toString().trim();
    let planetAge: number = (document.getElementById('planetAgeInput') as HTMLInputElement).valueAsNumber;
    let planetSize = (document.getElementById('planetSizeInput') as HTMLInputElement).valueAsNumber;
    let planetWaterContent = (document.getElementById('planetWaterContentInput') as HTMLInputElement).valueAsNumber;

    const namePattern: RegExp = /^[ a-zA-Z]{2,}$/;
    const nameOK: boolean = namePattern.test(planetName);
    const ageOK: boolean = planetAge > 0;
    const sizeOK: boolean = planetSize >= 1500;
    const waterOK: boolean = planetWaterContent >= 0 && planetWaterContent <= 100;

    let errorString = "A ";
    if (nameOK && ageOK && sizeOK && waterOK){
        celestialBodies.push(new Planet(planetName, planetAge, planetSize, planetWaterContent));
        document.getElementById('sumNumber')!.textContent = `A felvett bolygók száma: ${celestialBodies.length}`
        document.getElementById('sumAge')!.textContent = `A bolygók átlagos életkora: 
        ${celestialBodies.reduce((sum, item) => sum + item.age, 0) / celestialBodies.length}`
    } else {
        if (!nameOK){
            errorString += "név, "
        }
        if (!ageOK) {errorString += "életkor, "}
        if (!sizeOK) {errorString += "átmérő, "}
        if (!waterOK) {errorString += "vízfelület"}

        errorString += " mező(k) hibásan lettek kitöltve!"
        let p = document.createElement('p');
        p.style.color = "red";
        p.textContent = errorString;
        document.getElementById('errorContainer')!.appendChild(p);
    }
    

})