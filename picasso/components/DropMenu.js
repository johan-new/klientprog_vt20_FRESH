/*  DropMenu
*
*   Creates a dropmenu for selecting län
*
*   @author Erik Manfredsson
*/
export default {
    data() {
        return {
            showMenu: false
        }
    },
    props: {
         onClick: Function,
        //   items: {
        //       type: Array,
        //       default: []
        //   }    
    },
    computed: {
        items() {
            return [
                'Blekinge län',
                'Dalarnas län',
                'Gotlands län',
                'Gävleborgs län',
                'Hallands län',
                'Jämtlands län',
                'Jönköpings län',
                'Kalmar län',
                'Kronobergs län',
                'Norrbottens län',
                'Skåne län',
                'Stockholms län',
                'Södermanlands län',
                'Uppsala län',
                'Värmlands län',
                'Västerbottens län',
                'Västernorrlands län',
                'Västmanslands län',
                'Västra Götalands län',
                'Örebro län',
                'Östergötlands län'
            ]


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
             <div v-if='showMenu' class='menu'>
             <div class='drop-item' v-for='item in this.items' :key="item.id" @click='itemClicked(item)'>{{item}}</div>
             </div>
         </div>`
}
  