import EventService from '../services/EventService.js'
// import FormattingHTML from '../components/FormattingHTML.js'
//inga kompontnter här
let store = new Vuex.Store({
    state: {
        events: [],
        selectedCounty: "Västra Götaland"
    },
    mutations: {
        addEvent(state, data) {
            state.events.push(data)
        },
        clearEvents(state) {
            state.events = [] // clearing events
        },
        toggleShow() { //ANVÄNDS?????
            this.showMenu = !this.showMenu
        },
        changeSelectedCounty(state, newCounty) {
            state.selectedCounty = newCounty
        }
        },
        actions: {
            update(context, eventPromise) {
                context.commit('clearEvents')
                eventPromise.then(evt => {
                    evt.forEach(e => context.commit('addEvent', e))
                })
            },
            updateCounty(context, newCounty) {
                context.commit('changeSelectedCounty', newCounty)
                context.dispatch('update', EventService.countyEvents(newCounty))
            },
        }
    })
export default store