import dropmenu from './component/dropmenu.js'

Vue.component('drop-items', dropmenu) 

// ===== Want this in own file ======
// class Link {
//     constructor(name, href) {
//     this.name = name
//     this.href = href
//     }
//     }
//     Vue.component('link-items', {
//     props: {items: Array},
//     template: `<div>
//     <a v-for="link in items" :href="link.href">{{link.name}}
//     </a>
//     </div>`
//     })
// ====================================


let app = new Vue({
    el: '#app',
    data: {
    // Items for Link
     linkitems: [ new Link('Hem', 'index.html'),
                new Link('Om oss', 'about.html') ]
    // Items for DropmenuItems   
    
},
methods: {
    // Method for button 'Brott i närheten', ska kopplas till den riktiga metoden
    getEventsNearby: function (event) {
        console.log('ring aina')
    }
}
})