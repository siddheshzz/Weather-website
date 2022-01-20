const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url1 = 'http://api.weatherstack.com/current?access_key=0acaab3e4629c2da76226b11b1fc619c&query=' + latitude + ',' + longitude + '&units=f'
    request({ url: url1, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to internet', undefined)
        } else if (response.body.error) {
            callback('Unable to find the location Please try agian!', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is Currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + " degree out.The humidity is " + response.body.current.humidity + "%.")
        }
    })
}






module.exports = forecast