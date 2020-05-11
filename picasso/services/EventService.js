import getEventsNearbyAPIURL from './LocationService.js'


/**
 * COMMENT
 * 
 */


function getEvent(url) {
    return fetch(url)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            } 
            return resp.json()
            })
            .then(data => {
                return data.data
            })              
            }

/**
 * COMMENT
 */

const EventService = { 
    allEvents: () => getEvent('https://brottsplatskartan.se/api/events/?area=stockholms%20l%C3%A4n'), //alla i sthlms län
    nearby: () => getEvent(getEventsNearbyAPIURL())
  
}
Object.freeze(EventService)

export default EventService