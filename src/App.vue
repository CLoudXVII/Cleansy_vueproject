  <template>
    <div id="app">
      <VHeader />
      <router-view />
      <VForm />
    </div>    
  </template>

<script>

import VForm from './components/v-form.vue';
import VHeader from './components/v-header.vue'

export default {
  name: 'App',
  components: {
    VForm,
    VHeader,
}
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
</style>
