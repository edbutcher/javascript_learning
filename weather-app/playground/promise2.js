const request = require('request');

var geocodeAddres = (address) => {
  return new Promise((resolve, reject) => {
    console.log('Wait for 2 sec.');
    setTimeout(() => {
      var encodedAddress = encodeURIComponent(address);

      request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
      }, (error, response, body) => {
        if (error) {
          reject('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
          reject('Unable to find this address.');
        } else if (body.status === 'OK') {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        }
      });
    }, 2000)




  })
};


//////////////////////////////////////////////////////////

geocodeAddres('02000').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
