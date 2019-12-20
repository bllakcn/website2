<template>
  <div id="landing" class="bg-black">
    <div class="bg block pt-10 text-center bg-gray-900 min-h-screen">
      <div class="landing opacity-0 select-none">
        <h1 class="text-6xl font-serif text-gray-200">Uyanış</h1>
        <div class="fade-in opacity-0">
          <h1 class="text-2xl text-gray-200">Ateş | Hırs | İnanç</h1>
        </div>
      </div>
      <div class="fade-in2 pt-10 md:pt-24 text-gray-100 opacity-0">
        <p class="text-justify px-8 md:px-32 font-serif md:text-lg py-16">Korkaklara göre bir iş değildir ipleri eline almak istemek. Eğer öyle isen kalanları okuyup vakit kaybetme. Hayatına devam et. Eğer bahsettiğim ateşi içinde hissediyorsan fikirlerimi seninle paylaşmak isterim. Amacım, İttihat ve Terakki cemiyetini günümüze göre yorumlamak. Öncelikle elzem olduğunu düşündüğüm 9 madde sunuyorum. Daha sonra bu maddeleri yorumluyorum. Bunları yazarken çok içten bir haz hissettim. Günümüz dünyasının sunduğu sıradan işler ile beynimi uyuşturmak yerine bu davaya kendimi adamış olmak içimde tarif edemediğim bir boşluğu doldurdu. Senin de doldurabilir. Yazdıklarımı okurken her neredeysen kafanı kaldır ve gökyüzüne bak. Hayal et. Dertlerinden arın ve bu ruhu hisset.</p>
        <h1 class="text-right px-8 md:px-32 text-lg font-serif italic">Ömer Halit Çınar</h1>
        <h1 class="text-right px-8 md:px-32 italic">24.04.2019</h1>
      </div>
      <div class="py-10">
        <router-link to="/uyanış">
          <h1 class="fade-in3 hover:bg-gray-700 select-none rounded-lg max-w-xs py-2 mx-auto opacity-0 text-lg font-serif text-gray-100 text-center">Okumaya devam et</h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import '../mq.css'
export default {

}
</script>

<style>
.bg{
  opacity: 0;
  animation: fade-in-anim 3s ease forwards;
}
.bg:before{
  content: "";
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background: url('../assets/logo2.png') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
}
.landing{
  animation: landing-anim 5s ease 1s forwards
}
.fade-in{
  animation: fade-in-anim 1s ease 5.5s forwards
}
.fade-in2{
  animation: fade-in-anim 1.5s ease 5.9s forwards
}
.fade-in3{
  animation: fade-in-anim 1.5s ease 6.5s forwards;
}


</style>