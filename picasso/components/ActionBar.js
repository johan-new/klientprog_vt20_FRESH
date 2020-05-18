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
    template: `<div name="tjo bre">   
                    <input type="button" @click="allEvents" value="Alla händelser" class="buttonMenu-left">
                    <input type="button" @click="nearby" value="Händelser nära mig" class="buttonMenu-left">
                    <div v-for="item in $store.state.events" class="ruta">
                    <div>{{item.title_type}}</div>
                    <div>{{ item.location_string }}</div>
                    <div>{{ item.date_human }}</div>
                    <div>{{ item.description }}</div>
                   <div>{{ item.content }}</div>
                    <div>Källa: {{ item.external_source_link }} </div>
                   <img item :key="item.image" :src="item.image">

                   </div>
                   </div>
               </div>`
}

// </nav>
// <div v-for="item in $store.state.events" :key="item.id" class="ruta">
// <div class="events">Detta är titeln: {{item.title_type}}
// Description: {{ item.description }}
// <div>Detta är content: {{item.content}}
// <img item :key="item.image" :src="item.image">
// </div>


/* <nav class="buttonMenu-left">
<input type="button" @click="allEvents" value="Alla händelser" class="">
<input type="button" @click="nearby" value="Händelser nära mig">
</nav> */