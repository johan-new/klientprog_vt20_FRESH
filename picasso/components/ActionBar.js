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
    template: `<div style="width: fit-content; display: flex; flex-direction: column; align-items:center;">
                <div style="margin-bottom: 0.2em;">
                    <input type="button" @click="allEvents" value="Alla händelser">
                    <input type="button" @click="nearby" value="Händelser nära mig">
                    <div v-for="item in $store.state.events" :key="item.id" class="main"><div><h3><center>{{item.title_type}}</h3></center></div>
                    <div><center><b>{{ item.location_string }}</b></center></div>
                    <center>{{ item.date_human }}</center>
                   <center><i>{{ item.description }} </i></center>
                   <div><center>{{ item.content }}</center></div>
                    <div><center>Källa: {{ item.external_source_link }} </center></div>
                   <img item :key="item.image" :src="item.image">

                   </div>
                </div>
               </div>`
}