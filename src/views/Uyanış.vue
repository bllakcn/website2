<template>
  <div id="uyanış" class="bg-black min-h-screen">
    <div id="giriş" class="fade-in opacity-0">
      <router-link to="/">
        <h1 class="md:inline-block select-none text-gray-100 font-serif text-6xl p-5 md:px-20 text-center md:max-w-xs">Uyanış</h1>
      </router-link>
      <div class="text-center md:text-left text-gray-100 px-5 md:px-10 mx-auto italic">
        <p class="p-3 font-serif md:pl-12 text-sm"><span class="text-4xl absolute -ml-8 -mt-5">"</span>Bu eser, benim gibi yanıp tutuşan efendilere adanmıştır.<br/>Selam olsun size kardeşlerim... Ve çok yaşasın cemiyetim...<span class="text-4xl absolute pl-4">"</span></p>
      </div>
      <hr class="md:max-w-md md:ml-6 border-gray-200 pb-2">  
      <div>
        <h1 class="text-gray-100 text-center md:text-left font-serif text-3xl p-5 px-6 md:px-16">İlkeler</h1>
        <div class="text-gray-100 italic text-justify px-8 md:px-20" v-for="record in records" :key="record">
          <li>{{ record.fields.ilkeler }}</li>
        </div>
      </div>
      <app-text></app-text>
      <div class="w-48 mx-auto py-6 pb-12">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 779.67 783.2"><title>Uyanış</title><polygon points="390.61 6.37 303.29 181.93 477.91 181.93 390.61 6.37" style="fill:none;stroke:#b5b5b5;stroke-miterlimit:10;stroke-width:5.6692914962768555px"/><polygon points="303.29 181.93 7.62 776.4 773.49 776.4 477.91 181.93 303.29 181.93" style="fill:#b5b5b5;stroke:#b5b5b5;stroke-miterlimit:10;stroke-width:5.6692914962768555px"/><rect x="2.83" y="181.93" width="774" height="598.43" style="fill:none;stroke:#b5b5b5;stroke-miterlimit:10;stroke-width:5.6692914962768555px"/></svg>
      </div>
    </div>   
  </div>
</template>

<script>
import axios from 'axios'
import '../mq.css'
import Text from '../components/Text'
export default {
  components: {
    'app-text': Text,
  },
  data() {
    return {
      apiUrl: 'https://api.airtable.com/v0/',
      apiKey: 'keypShAsE2JBGmmi3',
      base: 'appWnNezpU24gFNga/Table%202',
      records: [],
    }
  },
  methods: {
    getData(){
      axios({
        url: this.apiUrl + this.base,
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
      }
      }).then((res) => {
      this.records = res.data.records
      })
    }
  },
  mounted () {
    this.getData();
    console.log(this.records);
  },
}
</script>

<style>
.fade-in{
  animation: fade-in-anim 1s ease .7s forwards
}

</style>