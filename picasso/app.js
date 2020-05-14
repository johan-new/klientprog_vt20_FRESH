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
        showMenu: false,
        activeCounty: 'Stockholms län',
         countys: [
             'Blekinge län',
             'Dalarnas län',
             'Gotlands län',
             'Gävleborgs län',
             'Hallands län',
             'Jämtlands län',
             'Jönköpings län',
             'Kalmar län',
             'Kronobergs län',
             'Norrbottens län',
             'Skåne län',
             'Stockholms län',
             'Södermanlands län',
             'Uppsala län',
             'Värmlands län',
             'Västerbottens län',
             'Västernorrlands län',
             'Västmanslands län',
             'Västra Götalands län',
             'Örebro län',
             'Östergötlands län'
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

        changeCounty(county) {
            this.activeCounty = county
            console.log(this.activeCounty)
            console.log(DropMenu.item)
        },
        toggleShow() {
            this.showMenu = !this.showMenu
        },
        itemClicked(item) {
            this.toggleShow()
            this.onClick(item)
        }  
    }
})