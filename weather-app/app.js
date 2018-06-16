const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 4));
    }
});

// c8d597ab1284821432820ddca9ab64d5

// const request = require('request');

// request ({
//     uri: 'https://api.forecast.io/forecast/c8d597ab1284821432820ddca9ab64d5/45.323507,-75.91992809999999',
//     json: true,
//     proxy: 'http://19.12.1.140:83'
// }, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//         console.log(body.currently.temperature);
//     } else {
//         console.log('Unable to fetch weather.');
//     }
// });
