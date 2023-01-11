  <template>
    <div id="app">
      <VHeader />
      <RouterView></RouterView>
      <VForm />
    </div>    
  </template>

<script>

import VForm from './components/v-form.vue';
import VHeader from './components/v-header.vue'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
</style>
