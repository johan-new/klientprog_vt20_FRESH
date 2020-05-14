import EventService from '../services/EventService.js'

let store = new Vuex.Store({
    state: {
        events: []
    },
    mutations: {
        addEvent(state, data) {
            console.log('hej')
            state.events.push(data)
        }
    },
    actions: {
        update(context, eventPromise) {
            console.log(typeof eventPromise)
            eventPromise.then(evt => {
                evt.forEach(e => context.commit('addEvent', e))
            })
                // .catch(error => this.$emit('error', error))
        },
    }
})
export default store