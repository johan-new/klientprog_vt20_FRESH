import store from './store/index.js'
import ActionBar from './components/ActionBar.js'
import DropMenu from './components/DropMenu.js'
import ListItems from './components/ListItems.js'
import EventService from './services/EventService.js'

let app = new Vue({
    el: '#app',
    data: {
        events: [],
    },
    components: {
        DropMenu,
        ActionBar,
        ListItems
    },
    mounted() {
        this.$store.dispatch('update', EventService.allEvents())
    },
    created() {
    },
    store
})