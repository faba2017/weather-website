const request = require('request')


const geocode = (address, callback) => {
   
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZmFicmljZTEyIiwiYSI6ImNqdnhmcTIycjA0Ym0zenJ6ajMwZXE4NDcifQ.MTWmHvW3l7uBg8DT6XO3Gw&limit=1'

    request({url, json: true}, (error, {body}) => {

        if (error) {
            callback('Unable to connect to location service!', undefined)

        }else if(body.features.length === 0) {
            callback('Unable to find a location. Try another search', undefined)
        }else {
            
             callback(undefined,  {
                 latitude: body.features[0].center[1],
                 longitude: body.features[0].center[0],
                location:  body.features[0].place_name
             })

       
        
        }
    })
}


module.exports = geocode