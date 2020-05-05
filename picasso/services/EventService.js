/**
 * COMMENT
 * 
 * @param {URL to web service endpoint} url 
 */
function getEvent(url) {
    return fetch(url)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }

            return resp.json()
        })
        .then (json => json.data)
}

function findMe() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
          return {
            x: position.coords.latitude,
            y: position.coords.longitude,
            status: "SUCCESS"
        }           
        } else {
            return {
                status: "FAIL"
            } 
        }
}

/**
 * COMMENT
 * 
 * @param {text to search for} query 
 */

const EventService = { 
    allEvents: () => getEvent('https://brottsplatskartan.se/api/events/?area=stockholms%20l%C3%A4n'), //alla i sthlms län
    nearby: () => getEvent('https://brottsplatskartan.se/api/eventsNearby?lat=59.32&lng=18.06')
}
Object.freeze(EventService)

export default EventService