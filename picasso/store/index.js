import EventService from '../services/EventService.js'
//inga kompontnter här
let store = new Vuex.Store({
    state: {
        events: [],
        selectedCounty: "Västra Götaland",
        aboutUs: {
            "data": {
                "id": 1337,
                "description": "Om oss",
                "date_human": "Nu",
                "content": "Tack till VueEx, JavaScript, CSS och HTML. Version 1.0. Erik Manfredsson, Simon Södergren, Johan Nyberg.",
                "external_source_link": "#",
                "location_string": "Göteborg",  
                "title_type": "Om oss",
                "image": "https://m.media-amazon.com/images/M/MV5BNmExMTkyYjItZTg0YS00NWYzLTkwMjItZWJiOWQ2M2ZkYjE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
            }                
        }
    },
    mutations: {
        addEvent(state, data) {
            state.events.push(data)
        },
        clearEvents(state){
            state.events = [] // clearing events
        },
        aboutUs(state) {
            console.log('about us')
            state.events = state.aboutUs
        },
        toggleShow() { //ANVÄNDS?????
            this.showMenu = !this.showMenu
        },
        changeSelectedCounty(state, newCounty){
            console.log('mutation changeSelectedCounty')
            state.selectedCounty = newCounty
            //addEvent(state, this.state.selectedCounty)
        }
    },
    actions: {
        update(context, eventPromise) {
            console.log(typeof eventPromise)
            context.commit('clearEvents')
            eventPromise.then(evt => {
                evt.forEach(e => context.commit('addEvent', e))
            })
        },
        updateCounty(context, newCounty){
            console.log('action updateCounty')
            context.commit('changeSelectedCounty', newCounty)
            console.log('Nu ska vi stoppa in ' + newCounty)
            context.dispatch('update', EventService.countyEvents(newCounty))
        },
        showAboutUs(context){
            context.commit('aboutUs')
        }

    }
})
export default store