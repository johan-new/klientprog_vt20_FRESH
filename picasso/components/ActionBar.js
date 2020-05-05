import EventService from '../services/EventService.js'

export default {
    data() {
        return {
            searchText: ''
        }
    },
    methods: {
        allEvents() {
            this.update(EventService.allEvents())
        },
        nearby() {
            this.update(EventService.nearby())
        },
        update(eventPromise) {
            eventPromise.then(evt => {
                this.$emit('evt', evt)
            })
            .catch(error => this.$emit('error', error))
        },
    },
    template: `<div style="width: fit-content; display: flex; flex-direction: column; align-items:center;">
                <div style="margin-bottom: 0.2em;">
                    <input type="button" @click="allEvents" value="Alla händelser">
                    <input type="button" @click="nearby" value="Händelser nära mig">
                </div>
                <div>
                </div>
               </div>`
}