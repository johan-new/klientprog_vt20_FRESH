
  /* getEventsNearbyAPIURLService
 *
*     Returns correct API string
 *  @version 0.1.1
 */

let getGPScoordinates = function(options) {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

async function getAPIURL() {
  let position = await getGPScoordinates()
  let url = `https://brottsplatskartan.se/api/eventsNearby?lat=${position.coords.latitude}&lng=${position.coords.longitude}`

  
  return url
}

export default getAPIURL;