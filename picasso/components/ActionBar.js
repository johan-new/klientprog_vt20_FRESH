import EventService from '../services/EventService.js'
import DropMenu from './DropMenu.js'

export default {
    data() {
        return {
            searchText: '',
        }
    },
    methods: {
        allEvents() {
            this.$store.dispatch('update', EventService.allEvents())
        },
        nearby() {
            this.$store.dispatch('update', EventService.nearby())
        },
        countyEvents(newCounty) {
            this.$store.dispatch('update', EventService.getEvent(newCounty))
        },
    },
    template: `<div> 
    <nav>
                    <input type="button" @click="allEvents" value="Hem" class="anchor actionButtons">
                   <input type="button" @click="nearby" value="Händelser nära mig" class="anchor actionButtons"> 
             </nav></div>`
}