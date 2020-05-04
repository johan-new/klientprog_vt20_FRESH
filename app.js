// import dropmenu from './component/dropmenu.js'
import getEventsNearby from './getEventsNearby.js'

// Vue.component('drop-items', dropmenu) 

// ===== Want this in own file ======
class Link {
    constructor(name, href) {
        this.name = name
        this.href = href
    }
}
Vue.component('link-items', {
    props: { items: Array },
    template: `<div>
     <a v-for="link in items" :href="link.href">{{link.name}}
     </a>     </div>`
})

Vue.component('events-component', {
    props: { event : Array },
    template: `<div>
     <p v-for="event in items">{{event}}
     </p>     </div>`
})
// ====================================


let app = new Vue({
    el: '#app',
    data: {
        events: await getEventsNearby(59.32, 18.06),
        // Items for Link
              linkitems: [new Link('Hem', 'index.html'),
        new Link('Om oss', 'about.html')]
    },
    methods: {
        // Method for button 'Brott i närheten', ska kopplas till den riktiga metoden
    //     getEventsNearby: async function (event) {
            
    // }
        }
    
})