const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address)

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAVD8r2eYsENYyT12aC0W-1djQRGkSsyjY`,
        json: true,
        // proxy: 'http://19.12.1.140:83'
    }, (error, response, body) => {
        if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        } else {
            callback('Unable to connect to Google servers.')
        }
    });
};


module.exports = {
    geocodeAddress
}