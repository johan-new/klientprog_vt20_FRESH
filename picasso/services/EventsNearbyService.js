
  /* EventsNearbyService
 *
*     Returns correct API string
 *  @version 0.1
 */

var getEventsNearby = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

getEventsNearby()
  .then((position) => {
    //console.log(getEventsNearby(position.coords.latitude, position.coords.longitude));
    return `https://brottsplatskartan.se/api/eventsNearby?lat=${position.coords.latitude}&lng=${position.coords.longitude};`
  })
  .catch((err) => {
    console.error(err.message);
  });

export default EventsNearbyService