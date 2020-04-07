<template>
  <div id="app">
    <div>
         <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
   
  }
}
</script>

<style>
::-webkit-scrollbar {
      width: 4px;
      /*height: 4px;*/
  }
::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: rgba(0,0,0,0.2);
  } 
::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      border-radius: 0;
      background: rgba(0,0,0,0.1);
  }
</style>
