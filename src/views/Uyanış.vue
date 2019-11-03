<template>
  <div id="uyanış" class="bg-gray-800 min-h-screen w-screen">
    <div id="giriş" class="fade-in opacity-0">
      <router-link to="/">
        <h1 class=" inline-block select-none text-gray-100 font-serif text-6xl p-5 pl-16 max-w-xs">Uyanış</h1>
      </router-link>
      <p class="text-gray-100 italic text-sm p-3 pl-12">Bu eser, benim gibi yanıp tutuşan efendilere adanmıştır.<br/>Selam olsun size kardeşlerim... Ve çok yaşasın cemiyetim...</p>
      <h1 class="text-gray-100 font-serif text-3xl p-5 pl-10">İlkeler</h1>
      <ul class="text-gray-100 italic list-decimal px-16">
        <li>İnanç bu hareketin en sarsılmaz temelidir.</li>
        <li>İttihat hareketi terk edilemez, bu yüzden belirtmek isterim ittihatçı ölür, ittihatçılık ölmez.</li>
        <li>Bir ittihatçının izni olmadan kardeşi onun ittihatçı olduğunu açıklayamaz. Bu harekette güven ve kardeşlik esastır.</li>
        <li>Dünya vatandaşlığı fikrine karşı olmak içinde olduğumuz çağı doğru okuyamamaktır.</li>
        <li>Kapitalizm bir tercih değil çağın gereksinimidir. Bu kelimeden korkmak yerine planlarımızı buna göre yapmalı, daldaki o elmayı alabilmek için uzanmalı, oyunumuzu buna göre oynamalıyız.</li>
        <li>Türkiye bir doğu ülkesi değildir, olmamalıdır. İttihat hareketi bu konuda tavrını koymalıdır. </li>
        <li>İttihat hareketi mensubu her bir birey kendisinin olabileceği en iyi durumda ve gelebileceği en iyi konumda olabilmek için elinden gelenin en iyisini yapmalı ve zihnini bunun için hazır tutmalıdır. Efendiler biz kaybedenlerden olamayız! Bununla birlikte unutulmamalıdır ki bu adımları izlerken iman yolundan ayrılan bizden değildir.</li>
        <li>Korkakların ve zayıf karakterlilerin bizim aramızda yeri yoktur. Güdülmesi gereken bir koyun varsa tereddüt etmeyiz.</li>
        <li>Amacımız herkesi ittihatçı yapabilmek değil hedeflerimizi başarabilmek olmalıdır. Bunun için kardeşlerimizi dikkatli seçmeli, gözümüzü en tepeye dikmeliyiz.</li>
      </ul>
      <app-text></app-text>
    </div>   
  </div>
</template>

<script>
import '../mq.css'
import Text from '../components/Text'
export default {
  components: {
    'app-text': Text,
  },
}
</script>

<style>
.fade-in{
  animation: fade-in-anim 1s ease .3s forwards
}

</style>