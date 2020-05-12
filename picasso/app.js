import ActionBar from './components/ActionBar.js'
import ErrorToast from './components/ErrorToast.js'
import DropMenu from './components/DropMenu.js'
import EventService from './services/EventService.js'

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
        /*  METODEN KAN NU NÄR MAN VÄLJER LÄN I LISTAN TA FRAM TOP10 BROTT
        *   OCH LÄGGA I EN ARRAY. BEHÖVER FÅ IN DEN ARRAYEN I ACTIONBAR.JS
        *   OCH IN I LIST DÄR. GÅR DE?
        */
        changeCounty(county) {
            this.activeCounty = county
        EventService.countyEvents()
        .then(resp => {
            console.log(resp[0])
            for (let i = 0; i < resp.length; i++) {
                let obj = resp[i];
                console.log(obj)
            }
        })
        },
        toggleShow() {
            this.showMenu = !this.showMenu
        },
        itemClicked(item) {
            this.toggleShow()
            this.onClick(item)
            console.log(activeCounty + ' active')
        }, 
    }
 })
// Detta ligger här pga att changeCounty ska funka
export default app