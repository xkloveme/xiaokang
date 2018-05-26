<template>
  <div>
    <div class="phone-viewport">
      7777
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
  name: 'smallPlay',
  data () {
    return {
      dataUrl: null,

    }
  },
  methods: {
    ...mapMutations([
      'play', 'pause', 'playContinue'
    ]),
    updateTime () {
      this.$store.commit('updateCurrentTime', parseInt(document.getElementById('music').currentTime))
      this.$store.commit('updateDuration', parseInt(document.getElementById('music').duration))
    },
    showPlayPage (event) {
      event.preventDefault()
      this.playPageShow = true
    },
  }
}
</script>

<style lang="scss" scoped>
.phone-viewport {
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 150;
  height: 64px;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  // color: #535886;
  background: rgba(220, 229, 239, 0.9);
}
</style>