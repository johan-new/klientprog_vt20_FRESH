export default {
    data() {
        return {
            showMenu: false
        }
    },
    props: {
        onClick: 'function',
        items: {
            type: 'Object',
            default: []
        }
    },
    methods: {
        toggleShow() {
            this.showMenu = !this.showMenu
        },
        itemClicked(item) {
            this.toggleShow()
            this.onClick(item)
        }
    },
    template: `
        <div>
            <button @click='toggleShow' class='anchor'>Välj ett län</button>
            <div v-if='showMenu' class='menu'></div>
            <div class='drop-item' v-for='item in this.items' @click='itemClicked(item)'>{{item}}</div>
        </div>`
}