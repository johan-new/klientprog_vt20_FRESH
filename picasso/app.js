import store from './store/index.js'
import ActionBar from './components/ActionBar.js'
import ErrorToast from './components/ErrorToast.js'
import DropMenu from './components/DropMenu.js'

let app = new Vue({
    el: '#app',
    data: {
        events: [],
        errorText: '',
        showMenu: false
        // activeCounty: 'Stockholms län',
        //  countys: [
        //      'Blekinge län',
        //      'Dalarnas län',
        //      'Gotlands län',
        //      'Gävleborgs län',
        //      'Hallands län',
        //      'Jämtlands län',
        //      'Jönköpings län',
        //      'Kalmar län',
        //      'Kronobergs län',
        //      'Norrbottens län',
        //      'Skåne län',
        //      'Stockholms län',
        //      'Södermanlands län',
        //      'Uppsala län',
        //      'Värmlands län',
        //      'Västerbottens län',
        //      'Västernorrlands län',
        //      'Västmanslands län',
        //      'Västra Götalands län',
        //      'Örebro län',
        //      'Östergötlands län'
        //  ]
    },
    components: {
         DropMenu,
         ActionBar,
         ErrorToast
    },
    //FYLL PÅ MED METODER SOM STYRS(????)
    created() {
        // this.$store.dispatch('update')
    },
    store
})