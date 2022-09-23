let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function(){
    const inputNum = inputEl.value;
    lengthEl.textContent = `${inputNum} meters = ${(inputNum * meterToFeet).toFixed(3)} feet | ${inputNum} feet = ${(inputNum*(1/meterToFeet)).toFixed(3)} meters`
})

convertBtn.addEventListener("click", function(){
    const inputNum = inputEl.value;
    volumeEl.textContent = `${inputNum} liters = ${(inputNum * literToGallon).toFixed(3)} gallons | ${inputNum} gallons = ${(inputNum*(1/literToGallon)).toFixed(3)} liters`
})
convertBtn.addEventListener("click", function(){
    const inputNum = inputEl.value;
    massEl.textContent = `${inputNum} kilograms = ${(inputNum * kiloToPound).toFixed(3)} pounds | ${inputNum} pounds = ${(inputNum*(1/kiloToPound)).toFixed(3)} kilograms`
})