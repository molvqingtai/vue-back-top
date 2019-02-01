<template>
<transition enter-active-class="bounceIn" leave-active-class="bounceOut">
  <div class="back-top" :style="{right,bottom}" @click="backTop" v-show="show">
    <slot>
      <i class="back-top__icon iconfont" :style="{transform:`scale(${size},${size})`,backgroundColor:color}">&#xe69e;</i>
    </slot>
  </div>
</transition>
</template>

<script>
export default {
  name: 'BackTop',
  props: {
    'right': {
      type: String,
      default: '3%'
    },
    'bottom': {
      type: String,
      default: '20%'
    },
    'color': {
      type: String,
      default: '#409EFF'
    },
    'size': {
      type: Number,
      default: 1
    },
    'slow': {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      show: false,
      closure: null
    }
  },
  methods: {
    backTop () {
      let doc = document.body.scrollTop ? document.body : document.documentElement
      let scrollTop = doc.scrollTop
      let scroll = () => {
        scrollTop = scrollTop + (0 - scrollTop) / this.slow
        if (scrollTop < 1) {
          doc.scrollTop = 0
        } else {
          doc.scrollTop = scrollTop
          requestAnimationFrame(scroll)
        }
      }
      scroll()
    },
    listenerScroll () {
      this.show = window.innerHeight < window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.listenerScroll)
  },
  activated () {
    window.removeEventListener('scroll', this.listenerScroll)
    window.addEventListener('scroll', this.listenerScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.listenerScroll)
  }
}
</script>

<style lang="css" scoped src="@/assets/iconfont.css"></style>
<style scoped lang="scss">
.back-top {
    position: fixed;
    cursor: pointer;
    user-select: none;
    &__icon {
        display: flex;
        width: 35px;
        height: 35px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #FFFFFF;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
        cursor: pointer;
        user-select: none;
        &:active {
            opacity: 0.9;
            box-shadow: 0 0 5px 0 rgba(0,0,0,.1);
        }
    }
}

/* animate.css */

.bounceIn {
    animation-duration: 0.75s;
    animation-name: bounceIn;
}
.bounceOut {
    animation-duration: 0.75s;
    animation-name: bounceOut;
}
@keyframes bounceIn {
    20%,
    40%,
    60%,
    80%,
    from,
    to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
        transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
        transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
        transform: scale3d(0.97, 0.97, 0.97);
    }

    to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
}

@keyframes bounceOut {
    20% {
        transform: scale3d(0.9, 0.9, 0.9);
    }

    50%,
    55% {
        opacity: 1;
        transform: scale3d(1.1, 1.1, 1.1);
    }

    to {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
    }
}
</style>
