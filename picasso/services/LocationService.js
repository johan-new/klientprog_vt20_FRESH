
/* LocationService
*
*  Handling anything related to the location API
*
* @version 0.1.3
* @author Johan Nyberg
*/

//setting up coordinates
 let x = "";
 let y = "";


   // Location available
   let located = function(pos) {
    x = String(pos.coords.latitude);
    y = String(pos.coords.longitude);
    console.log("DEBUG: x: " + x + " y: " + y);
  };
  
  // Location not available
  let unlocated = function(err) {
    console.log("DEBUG: " + err.message);
  };


  // Might come handy later...

 /* function getCoordinates(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(located, unlocated);
    } 
    return [x, y];
  }*/


 function getEventsNearbyAPIURL() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(located, unlocated);
  } 
    
  return `https://brottsplatskartan.se/api/eventsNearby?lat=${x}&lng=${y}`;
}

export default getEventsNearbyAPIURL;