/**
 * Created by sioxa on 2016/12/29 0029.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import IndexMain from "./page/index.vue";
// import MainPage from './page/main.vue'
import TopList from "./page/rank/index.vue";
import FindMusic from "./page/findMusic/index.vue";
import MyFavorite from "./page/myFavorite/index.vue";
import MusicList from "./page/musicList/index.vue";
import Album from "./components/Album.vue";
import Singer from "./components/Singer.vue";
import RankPage from "./components/RankPage.vue";
import Cd from "./components/Cd.vue";

Vue.use(VueRouter);

const routes = [
  {
    mode: "history",
    hashbang: false,
    path: "/",
    meta: {
      title: ""
    },
    component: IndexMain,
    children: [
      { path: "/", name: "findMusic", component: FindMusic },
      { path: "/musicList", name: "musicList", component: MusicList },
      { path: "/topList", name: "topList", component: TopList },
      { path: "/myFavorite", name: "myFavorite", component: MyFavorite },
      { path: "/singer/:id", name: "singer", component: Singer },
      { path: "/album/:id", name: "album", component: Album },
      { path: "/rank/:id", name: "rank", component: RankPage },
      { path: "/cd/:id", name: "cd", component: Cd }
    ]
  }
];

export default new VueRouter({
  routes,
  //只在history模式下有用
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
