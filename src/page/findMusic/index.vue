<template>
  <div>
    <carousel-3d :width='800' :height="312" :startIndex="2">
    <slide  v-for="(item,index) in slider" :key="item.fid" :index="index" >
      <img :src="item.pic" :alt="item.title">
    </slide>
  </carousel-3d>
  <div  v-for="(item,index) in hotdiss" :key="item.listennum">
      <md-content class="md-elevation-24">
      <img :src="item.imgurl" :alt="item.dissname">
      <div class="hot">
        <img src="../../assets/icon-erji.svg" alt="" style="width:16px;margin-bottom: 4px;">
        <span>{{item.listennum | listenCount}}</span>
      </div>
      </md-content>
        <div class="list-info">
              <p class="list-name">{{item.dissname}}</p>
              <p class="list-author">{{item.author}}</p>
        </div>
  </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  name: 'findMusic',
  components: {
    Carousel3d,
    Slide
  },
  data () {
    return {
      slider: [],
      hotdiss: []
    }
  },
  mounted () {
    this.getRecommands()
  },
  methods: {
    getRecommands () {
      this.$store.dispatch('getRecommands').then((response) => {
        console.log(response)
        // this.loading = false
        this.slider = response.data.data.focus
        this.hotdiss = response.data.data.hotdiss.list
        // this.mvList = response.data.data.shoubomv.all
      }, (responce) => {
        this.loadingState = '加载失败'
      })
    }
  },
  filters: {
    listenCount: num => Math.round(num / 1000) / 10 + '万'
  }
}
</script>

<style lang="scss" scoped>
.md-elevation-24 {
  position: relative;
}
.hot {
  position: absolute;
  font-size: 12px;
  bottom: 2px;
  left: 2px;
  color: #fff;
}
.list-info {
  padding: 0 5px;
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 10px;
  .list-name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .list-author {
    color: #777777;
  }
}
.md-content {
  width: 200px;
  height: 200px;
  margin: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>