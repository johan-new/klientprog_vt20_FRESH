
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
            for (let i = 0; i < data.data.length; i++) {              
                console.log(data.data[0])
                let obj = data.data[i]
                return obj
             }
            })              
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
    
    nearby: () =>  getEvent(`https://brottsplatskartan.se/api/eventsNearby?lat=${position.coords.latitude}&lng=${position.coords.longitude}`)
  
}
Object.freeze(EventService)

export default EventService