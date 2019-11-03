<template>
  <div id="app" class="bg-black min-h-screen">
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .page-enter-active, .page-leave-active {
    transition: opacity 1s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }

</style>
