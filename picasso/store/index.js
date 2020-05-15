import EventService from '../services/EventService.js'

let store = new Vuex.Store({
    state: {
        events: [],
        selectedCounty: "Västra Götaland"
    },
    mutations: {
        addEvent(state, data) {
            console.log('hej')
            state.events.push(data)
        },
        toggleShow() { //ANVÄNDS?????
            this.showMenu = !this.showMenu
        },
        changeSelectedCounty(state, newCounty){
            console.log('mutation changeSelectedCounty')
            state.selectedCounty = newCounty
            this.addEvent(state, this.state.selectedCounty)
        }
    },
    actions: {
        update(context, eventPromise) {
            console.log(typeof eventPromise)
            eventPromise.then(evt => {
                evt.forEach(e => context.commit('addEvent', e))
            })
        },
        updateCounty(context, newCounty){
            console.log('action updateCounty')
            context.commit('changeSelectedCounty', newCounty)
            console.log(typeof newCounty)
            //this.update(new Promise(
            //    function (reject, resolve){
            //        resolve()
             //   })
        }

    }
})
export default store