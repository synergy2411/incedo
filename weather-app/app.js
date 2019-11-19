const express = require("express");
const geocoder = require("./utils/geocoder");
const forecast = require("./utils/forecast");
const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/weather", (req, res) => {
    if(req.query){
        console.log("Location : ", req.query.address)
        geocoder.geocode(req.query.address)
            .then(({lat, lng, address}) => {
                console.log("lat : ", lat, lng)
                forecast.getWeather({lat, lng})
                    .then(result => {
                        console.log("Result : ", result);
                        return res.send({result, address})
                    }).catch(err =>  console.log(err))
            }).catch(err => console.log(err))
    }
    // res.send({status : "NO_LOCATION_FOUND"})
})
app.listen(9090, () => {
    console.log("Weather Server started at port 9090...")
})