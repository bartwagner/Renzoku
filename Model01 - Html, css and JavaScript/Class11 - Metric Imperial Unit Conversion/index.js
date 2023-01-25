let convertInput = document.getElementById("convert-input")
let convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    let convertNumber = convertInput.value
    lengthConvert(convertNumber)
    volumeConvert(convertNumber)
    massConvert(convertNumber)
})

function lengthConvert(lengthValue){
    let lengthP = document.getElementById("length-p")
    //1 meter = 3.281 feet    
    lengthP.innerHTML = `${lengthValue} meters = ${Number(lengthValue*3.281).toFixed(3)} feet | 
                         ${lengthValue} feet = ${Number(lengthValue/3.281).toFixed(3)} meters`
    
}
function volumeConvert(volumeValue){
    let volumeP = document.getElementById("volume-p")
    //1 liter = 0.264 gallon    
    volumeP.innerHTML = `${volumeValue} liters = ${Number(volumeValue*0.264).toFixed(3)} gallons | 
                         ${volumeValue} gallons = ${Number(volumeValue/0.264).toFixed(3)} liters`
}
function massConvert(massValue){
    let massP = document.getElementById("mass-p")
    //1 kilogram = 2.204..5~6  pound
    massP.innerHTML = `${massValue} kilos = ${Number(massValue*2.2046).toFixed(3)} pounds | 
                       ${massValue} pounds = ${Number(massValue/2.2045).toFixed(3)} kilos`    
}
