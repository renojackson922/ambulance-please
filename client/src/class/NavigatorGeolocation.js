
function NavigatorGeolocation(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            return {
                "longitude": position.coords.longitude,
                "latitude" : position.coords.latitude
            }
        });
    }else{
        return {
            "longitude": 0,
            "latitude" : 0
        }
    }
 
}

export default NavigatorGeolocation;