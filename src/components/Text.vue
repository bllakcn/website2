<template>
  <div id="text">
    <div class="pt-8 leading-relaxed">
      <div v-for="record in records" :key="record" class="pb-8">
        <hr class="md:max-w-md md:ml-6 border-gray-200 mb-8">
        <h1 class="font-serif text-gray-300 text-center md:text-left text-4xl px-6 md:px-16 pb-2">{{record.fields.Title}}</h1>
        <vue-simple-markdown class="text-lg text-gray-200 text-justify px-8 md:px-20" :source="record.fields.Notes"></vue-simple-markdown>  
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      apiUrl: 'https://api.airtable.com/v0/',
      apiKey: 'keypShAsE2JBGmmi3',
      base: 'appWnNezpU24gFNga/Table%201',
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
  },
}
</script>

<style>

</style>