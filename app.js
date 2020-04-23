// ---- ????????? ------- how to?
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
let app = new Vue({
el: '#app',
data: {
    linkitems: [new Link('Hem', 'index.html'),
            new Link('Om oss', 'about.html') ]
}
})