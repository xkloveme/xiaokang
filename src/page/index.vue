<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">畅享视听</span>
        <auto-complete></auto-complete>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">🎵小康音乐🎵</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>music_note</md-icon>
            <span class="md-list-item-text">发现音乐</span>
          </md-list-item>

          <md-list-item>
            <md-icon>assessment</md-icon>
            <span class="md-list-item-text">排行榜</span>
          </md-list-item>

          <md-list-item>
            <md-icon>library_music</md-icon>
            <span class="md-list-item-text">音乐集</span>
          </md-list-item>

          <md-list-item>
            <md-icon>favorite_border</md-icon>
            <span class="md-list-item-text">我喜欢的音乐</span>
          </md-list-item>

        </md-list>
      </md-app-drawer>
      <md-app-content>
       <router-view/>
       <small-play></small-play>
       </md-app-content>
       
    </md-app>
    
  </div>
</template>

<script>
import autoComplete from 'src/components/public/autoComplete.vue'
import smallPlay from 'src/components/public/smallPlay.vue'
export default {
  name: 'Main',
  components: { autoComplete, smallPlay },
  data () {
    return {
      menuVisible: false,
      theme: 'teal'
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  min-width: 500px;
}
.md-app {
  min-height: 800px;
  border: 1px solid rgba(#000, 0.12);
}
.md-title {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(1, #f22),
    color-stop(0.2, #f2f),
    color-stop(0.3, #22f),
    color-stop(0.45, #2ff),
    color-stop(0.6, #2f2),
    color-stop(0.75, #2f2),
    color-stop(0.9, #ff2),
    color-stop(1, #f22)
  );
  color: transparent;
  -webkit-background-clip: text;
}
// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}


</style>