export default {
    template: 
    `<div>
    <div v-for="item in $store.state.events" :key="item.id" class="ruta">
    <div class="events">
    <div>{{item.title_type}}</div>
    <div>{{ item.location_string }}</div>
    <div>{{ item.date_human }}</div>
    <div>{{ item.description }}</div>
   <div>{{ item.content }}</div>
    <div>Källa: {{ item.external_source_link }} </div>
   <img item :key="item.image" :src="item.image">
   </div></div>
   </div></div>`
}