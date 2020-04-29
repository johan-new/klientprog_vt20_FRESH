export default {
    props: {items: Array},
    data: {
        items: [ "Västra Götalands län", "Stockholms län"]
    },
    template: `<div>
    <select name="Län">
    <option v-for="item in items">{{item}}
    </option>
    </select>
    </div>`
    }
