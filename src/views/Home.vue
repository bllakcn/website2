<template>
  <div>
    <app-landing></app-landing>
  </div>
</template>

<script>
import Landing from '../components/Landing'
export default {
components: {
    'app-landing': Landing,
  },
}
</script>

<style>
@keyframes fade-out{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}


</style>