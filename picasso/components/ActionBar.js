import EventService from '../services/EventService.js'

export default {
    data() {
        return {
            searchText: '',
            list: []
        }
    },
    methods: {
        allEvents() {
            this.update(EventService.allEvents())
        },
        nearby() {
            this.update(EventService.nearby())
        },
        findMe() {
             this.update(EventService.findMe())
             console.log(position)
        },
        update(eventPromise) {
            eventPromise.then(evt => {
                this.$emit('evt', evt)
                for (let i = 0; i < evt.length; i++) {
                    let obj = evt[i]
                    this.list.push(obj)                    
                }
            })
            .catch(error => this.$emit('error', error))
        },
    },
    // Needs more formatting ofc /Erik
    template: `<div style="width: fit-content; display: flex; flex-direction: column; align-items:center;">
                <div style="margin-bottom: 0.2em;">
                    <input type="button" @click="allEvents" value="Alla händelser">
                    <input type="button" @click="nearby" value="Händelser nära mig">
                    <div v-for="item in list" :key="item.id" class="main"><div>Detta är titeln: {{item.title_type}}</div>
                   Description: {{ item.description }}
                   <div>Detta är content: {{item.content}} </div>
                   <img item :key="item.image" :src="item.image">
                 

                   </div>
                </div>
               </div>`
}