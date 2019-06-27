Geocoder.init("Your GEOCODING API KEY");

Geocoder.from(nAD.Address)
.then(json => {
    var location = json.results[0].geometry.location;
    console.log(location);
})