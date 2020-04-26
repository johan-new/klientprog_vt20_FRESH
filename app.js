// ---- ????????? ------- how to import, export från filer?
// import Link from './link/Link.js'
// Vue.component('Link', Link)

// ===== Want this in own file ======
class Link {
    constructor(name, href) {
    this.name = name
    this.href = href
    }
    }
    Vue.component('link-items', {
    props: {items: Array},
    template: `<div>
    <a v-for="link in items" :href="link.href">{{link.name}}
    </a>
    </div>`
    })
// ====================================
class DropmenuItems {
    constructor(name) {
    this.name = name
    }
    }
    // Funkar ej, VARFÖR?
    Vue.component('drop-items', {
    props: {items: Array},
    template: `<div>
    <select name="Län">
    <option>{{dropmenuitems.name}}
    </option>
    </select>
    </div>`
    })

let app = new Vue({
el: '#app',
data: {
    // Items for Link
     linkitems: [ new Link('Hem', 'index.html'),
                new Link('Om oss', 'about.html') ],
    // Items for DropmenuItems   
    dropitems: [ new DropmenuItems('Västra Götalands län'),
                new DropmenuItems('Annat lääään') ]
},
methods: {
    // Method for button 'Brott i närheten', ska kopplas till den riktiga metoden
    getEventsNearby: function (event) {
        console.log('ring aina')
    }
}
})