export default class Link {
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