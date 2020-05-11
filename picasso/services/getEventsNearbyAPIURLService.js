
  /* getEventsNearbyAPIURLService
 *
*     Returns correct API string
 *  @version 0.1.2
 */

 let returnStr = "";


   // Function that will be called if the query succeeds
   let located = function(pos) {
    let x = String(pos.coords.latitude);
    let y = String(pos.coords.longitude);
    returnStr = `https://brottsplatskartan.se/api/eventsNearby?lat=${x}&lng=${y}`;
    console.log("DEBUG: " + returnStr);
  };
  
  // Function that will be called if the query fails
  let unlocated = function(err) {
    console.log("DEBUG: " + err.message);
  };


 function getAPIURL() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(located, unlocated);
  } 
    
  return returnStr;
}

export default getAPIURL;