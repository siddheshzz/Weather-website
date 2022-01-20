const request = require('request');

const geocode = (address, callback) => {
    const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2lkbWFwYm94IiwiYSI6ImNreWlnMTBscjA1bXIybm82d2U1aWQ5cmQifQ.Zfj2BlvK-FO5ucJGyCJEUQ'
    request({ url: url1, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports = geocode