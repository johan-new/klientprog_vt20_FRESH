 /* getEventsNearby
 *
 *  Fetching an array of JSON-objects from
 *  endpoint https://brottsplatskartan.se/api/eventsNearby
 * 
 *  @param Latitude and Longitude GPS coordinates
 *  @author Johan Nyberg
 *  @version 0.1
 */
     
async function getEventsNearby(x,y) {

    const APIUrl  = `https://brottsplatskartan.se/api/eventsNearby?lat=${x}&lng=${y}`

    try {
        let resp = await fetch(APIUrl)
        let JSONObjects 

        if (resp.ok) //if server response code is 2xx
        {
            JSONObjects = await resp.json()
            
            //console.log("DEBUG: " + JSON.stringify(JSONObjects.data))
            
            return JSON.stringify(JSONObjects.data)
        } else {
            throw new Error(`Server responded error code ${resp.status}`)
        }
            
    } catch (error) { //catches server error codes and json parsing failure
        console.error(error)
    }
}  
