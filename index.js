/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthDiv = document.getElementById("length")
const volumeDiv = document.getElementById("volume")
const massDiv = document.getElementById("mass")
const convertBtn = document.getElementById("convert-btn")

function converter() {
    console.log("Hello")
    let inputValue = document.getElementById("convert-value").value
    let value = Number(inputValue)
    console.log(inputValue)
    lengthDiv.innerHTML = `
    ${value} meters = ${(value * 3.281).toFixed(2)} feets | ${value} feets = ${(value/3.281).toFixed(2)} meters
    ` 
    volumeDiv.innerHTML = `
    ${value} liters = ${(value * 0.264).toFixed(2)} gallons | ${value} gallons = ${(value/0.264).toFixed(2)} liters
    ` 
    massDiv.innerHTML = `
    ${value} kilos = ${(value * 2.204).toFixed(2)} pounds | ${value} pounds = ${(value/2.204).toFixed(2)} kilos
    ` 
}

convertBtn.addEventListener("click", converter)