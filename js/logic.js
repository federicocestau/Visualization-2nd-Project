
zipcode = location.href.split("zcode=")[1]
baseurl = `https://maps.googleapis.com/maps/api/geocode/json?key=${g_API_KEY}&components=postal_code:`
d3.json(baseurl + zipcode, function (geodata) {
    var coordinates = geodata.results[0].geometry.location;
    console.log(coordinates)
    // Create a map object
    var myMap = L.map("map", {
        center: [coordinates.lat, coordinates.lng],

        zoom: 30
    });

    // Add a tile layer
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
        tileSize: 512,
        maxZoom: 10,
        zoomOffset: -1,
        id: 'mapbox/streets-v11',
        accessToken: API_Key
    }).addTo(myMap);

    // Grab the data with d3
    //
    d3.json("js/Dealers.geojson", function (Dealers) {



        // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
        for (var i = 0; i < Dealers.features.length; i++) {
            //Dealers.features is looping into each object. 
            var Dealer = Dealers.features[i];
            L.marker(Dealer.geometry.coordinates.reverse())
                .bindPopup("<h2>" + Dealer.properties.Dealer + "</h2> <hr> <h4>" + Dealer.properties.Address + "</h4><br/><h4>" + Dealer.properties.City + ", " + Dealer.properties.State + "  " + Dealer.properties.ZIPCODE + "</h4>")
                .addTo(myMap);
        }
    });

});
