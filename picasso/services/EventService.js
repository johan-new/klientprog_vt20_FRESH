import EventsNearbyService from "EventsNearbyService";

/**
 * COMMENT
 * 
 * @param {URL to web service endpoint} url 
 */


function getEvent(url) {
    // console.log(navigator.geolocation.getCurrentPosition(position))
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
 * 
 * @param {text to search for} query 
 */

const EventService = { 
    allEvents: () => getEvent('https://brottsplatskartan.se/api/events/?area=stockholms%20l%C3%A4n'), //alla i sthlms län
    
    nearby: () =>  getEvent(EventsNearbyService.getEventsNearby())
  
}
Object.freeze(EventService)

export default EventService