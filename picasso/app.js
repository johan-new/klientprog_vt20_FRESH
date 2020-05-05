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
            // this is a bit of defensive programming
            // to make sure that whatever happens
            // the list will be max 10 long when this
            // function is done.
            while (this.events.length > 10) {
                this.events.pop()
            }
        },
        handleError(error) {
            this.errorText = error.toString()
            // remove toast after 3 seconds. Should probably
            // be a part of the toast component but that is
            // left as an excercise for the reader...
            setTimeout(() => this.errorText = '', 3000)
        }
    }
})