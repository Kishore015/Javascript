// Driver Trip Validation Workflow
const tripData = require('./data.json');
const fs = require('fs')
// console.log(JSON.stringify(tripData))

tripData.forEach((trip) => {
    if(!trip.endTime || trip.distance<=0 || trip.fare <=0){
        console.log(`Error in trip by Driver ID:${trip.driverId}. Sending alert...`)
        trip.error =true;
    }else{
        trip.error = false
    }
})

fs.writeFileSync('./data.json', JSON.stringify(tripData,null,2))
console.log('Validation completed, logged errors into the file')

// Surge Pricing Algorithm
const priceData = require('./pricing.json');

priceData.areas.forEach(area => {
    const surgeMultiplier = area.demand/area.supply;
    if(surgeMultiplier > 1){
        console.log(`Surge pricing activated in area ${area.areaId} with multiplier ${surgeMultiplier.toFixed(2)}`)
        area.surgeMultiplier = surgeMultiplier.toFixed(2)
    }else{
        area.surgeMultiplier = 1;
    }
})

fs.writeFileSync('./pricing.json',JSON.stringify(priceData,null,2));
console.log("Surge pricing updated")
