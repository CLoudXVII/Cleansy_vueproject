  <template>
    <div id="app">
      <VHeader />
      <VServices />
      <VForm />
    </div>    
  </template>

<script>

import VForm from './components/v-form.vue';
import VHeader from './components/v-header.vue'
import VServices from './components/v-services.vue';

export default {
  name: 'App',
  components: {
    VForm,
    VHeader,
    VServices
}
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
</style>
