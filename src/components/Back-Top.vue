<template>
<div class="back-top">
  <slot>
    <i class="back-top__icon iconfont">&#xe69e;</i>
  </slot>
</div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped lang="scss">
@import '~@/assets/iconfont.css';
.back-top {
    position: fixed;
    right: 5%;
    bottom: 10%;
    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #FFFFFF;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
    }
}
</style>
