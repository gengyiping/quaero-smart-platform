<template>
  <div class="container">
    <ul>
      <li>
        <v-link href="/">scan</v-link>
        
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script>
  import VLink from '../pages/scan.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
