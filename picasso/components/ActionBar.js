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
            console.log('countyEvents ActionBar called. Parameter ' + newCounty)
            this.$store.dispatch('update', EventService.getEvent(newCounty))
        },


        // toggleShow() {
        //     this.$store.dispatch('update', DropMenu.toggleShow())
        // },
        // itemClicked() {
        //     this.$store.dispatch('update', DropMenu.itemClicked())
        // }
    },
    // Needs more formatting ofc /Erik
    template: `<div> 
    <nav>
                    <input type="button" @click="allEvents" value="Alla händelser" class="anchor actionButtons">
                   <input type="button" @click="nearby" value="Händelser nära mig" class="anchor actionButtons"> 
             </nav></div>`
}