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
                    <nav class="buttonMenu-left">
                    <input type="button" @click="allEvents" value="Alla händelser">
                    <input type="button" @click="nearby" value="Händelser nära mig">
                    </nav>
                    <div v-for="item in $store.state.events" :key="item.id" class="ruta">
                    <div class="events">Detta är titeln: {{item.title_type}}
                   Description: {{ item.description }}
                   <div>Detta är content: {{item.content}} 
                   <img item :key="item.image" :src="item.image">
                   </div>
                 
                   </div>
                   </div>
               </div>`
}