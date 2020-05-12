export default {
    data() {
        return {
            showMenu: false
        }
    },
    props: {
        onClick: Function,
         items: {
             type: Array,
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
            console.log(item)
        }
    },
     template: `
         <div>
             <button @click='toggleShow' class='anchor'>Välj ett län</button>
             <div v-if='showMenu' class='menu'>
             <div class='drop-item' v-for='item in this.items' :key="item.id" @click='itemClicked(item)'>{{item}}</div>
         </div></div>`
}