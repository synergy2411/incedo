const request = require("request");

const geocode = location => {
    return new Promise((resolve, reject) => {
        request(`
    https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAOIA3C43yp1OJPtEIMVNmdWpc_v5ecXx0`,
            {
                json: true
            }, (err, response, body) => {
                if (err) {
                    return reject("Google Server can't find the location")
                }
                if (body.status === "OK") {
                    return resolve({
                        lat: body.results[0].geometry.location.lat,
                        lng: body.results[0].geometry.location.lng,
                        address: body.results[0].formatted_address
                    })
                } else {
                    return reject("Can't locate the coordinates.")
                }
            })
    })
}

module.exports = { geocode }