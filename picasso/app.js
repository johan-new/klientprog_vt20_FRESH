import ActionBar from './components/ActionBar.js'
import ErrorToast from './components/ErrorToast.js'
import DropMenu from './components/DropMenu.js'

Vue.component('action-bar', ActionBar)
Vue.component('toast', ErrorToast)
Vue.component('drop-menu', DropMenu)

let app = new Vue({
    el: '#app',
    data: {
        events: [],
        errorText: '',
        activeCounty: 'Stockholms län',
        countys: [
            'Stockholms län',
            'Västra Götalands län',
            'Östergötlands län',
            'Uppsala län'
        ]
    },
    methods: {
        addEvent(evt) {
            this.events.unshift(evt)
            while (this.events.length > 10) {
                this.events.pop()
            }
        },
        handleError(error) {
            this.errorText = error.toString()
            setTimeout(() => this.errorText = '', 3000)
        },
        // TESTAR DROP DOWN
        changeCounty(county) {
            this.activeCounty = county
        }
    }
})