import EventService from '../services/EventService.js'

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
        countyEvents() {
            this.$store.dispatch('update', EventService.countyEvents())
        }
    },
    // Needs more formatting ofc /Erik
    template: `<div style="width: fit-content; display: flex; flex-direction: column; align-items:center;">
                <div style="margin-bottom: 0.2em;">
                    <input type="button" @click="allEvents" value="Alla händelser">
                    <input type="button" @click="nearby" value="Händelser nära mig">
                    <div v-for="item in $store.state.events" :key="item.id" class="main"><div>Detta är titeln: {{item.title_type}}</div>
                   Description: {{ item.description }}
                   <div>Detta är content: {{item.content}} </div>
                   <img item :key="item.image" :src="item.image">
                 

                   </div>
                </div>
               </div>`
}