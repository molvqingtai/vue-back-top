<template>
  <div id="app">
      <main>
          <section v-for="n in 5" :key="n"></section>
      </main>
      <back-top></back-top>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
  body{
    height: 500vh;
    section{
      width:1200px;
      min-width: 1200px;
      margin: 0 auto;
      height: 100vh;
      opacity: .5;
      &:nth-child(1){
        background-color: #409EFF;
      }
      &:nth-child(2){
        background-color: #67C23A;
      }
      &:nth-child(3){
        background-color: #E6A23C;
      }
      &:nth-child(4){
        background-color: #F56C6C;
      }
      &:nth-child(5){
        background-color: #909399;
      }
    }
  }

</style>
