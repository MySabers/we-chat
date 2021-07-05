<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'we-chat'
  }
</script>

<style>
  body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
  /* scrollbar thumb */
  .pointers-body:hover .gm-scrollbar .thumb {
    background: rgba(204, 201, 198, 0.8) !important;
  }

  .pointers-body .gm-scrollbar .thumb {
    background: rgba(0, 0, 0, 0) !important;
  }

  .gm-scrollbar.-horizontal {
    background-color: transparent;
    overflow-x: hidden
  }

</style>
