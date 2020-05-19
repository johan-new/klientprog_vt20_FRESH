export default {
    template: 
    `<div><center>
    <div v-for="item in $store.state.events" :key="item.id" class="events">
   <div class="divheader">{{item.title_type}}</div>
    <div class="divunderrubrik">{{ item.location_string }}
    {{ item.date_human }}</div>
    <div class="divdescription">{{ item.description }}</div>
   <div>{{ item.content }}</div><br>
    <div>Källa: {{ item.external_source_link }} </div>
   <img item :key="item.image" :src="item.image">
   </div></center>
   </div></div>`
}