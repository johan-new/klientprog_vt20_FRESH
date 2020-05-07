import ActionBar from './components/ActionBar.js'
import ErrorToast from './components/ErrorToast.js'

Vue.component('action-bar', ActionBar)
Vue.component('toast', ErrorToast)

let app = new Vue({
    el: '#app',
    data: {
        events: [],
        errorText: ''
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
        }
    }
})