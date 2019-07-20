const request = require('request')

const forecast = (latitude, longitude, callback) =>{

 const url = 'https://api.darksky.net/forecast/7adb2d38e71b9166c9b498ae2a82acda/'+latitude+','+longitude+'?units=si'

 request({url, json: true}, (error, {body}) => {

     if (error) {

         callback('Unable to connect to the location service', undefined)

     }else if(body.error) {

         callback(' address not found. please try another search', undefined)
     }else {
         callback(undefined,  console.log (body.daily.data[0].summary + ' It is Currently ' +body.currently.temperature + ' degrees out. There is a ' +body.currently.precipProbability + '% chance of rain.')  )
         
     }
 }) 
}

module.exports = forecast