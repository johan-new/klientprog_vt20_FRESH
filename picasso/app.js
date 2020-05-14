import store from './store/index.js'
import ActionBar from './components/ActionBar.js'
import ErrorToast from './components/ErrorToast.js'
import DropMenu from './components/DropMenu.js'

let app = new Vue({
    el: '#app',
    data: {
        events: [],

    },
    components: {
         DropMenu,
         ActionBar,
         ErrorToast
    },
    created() {
    },
    store
})