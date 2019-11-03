<template>
  <div id="text">
    <div class="text-gray-100 pt-8 leading-relaxed">
      <div v-for="record in records" :key="record" class="pb-8">
        <h1 class="font-serif text-4xl px-20 pb-2">{{record.fields.Title}}</h1>
        <p class="text-lg text-justify px-24">{{record.fields.Notes}}</p>
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
    console.log(this.records);
  },
}
</script>

<style>

</style>