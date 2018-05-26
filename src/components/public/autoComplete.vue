<template>
  <div class="autoInput">
        

        <div class="md-toolbar-section-end">
          <md-autocomplete
          class="searchSong"
          v-model="key"
          md-layout="box"
          :md-options="colors"
          :md-open-on-focus="false"
         >
          <label>歌曲/专辑/歌手</label>
          <template slot="md-autocomplete-item" slot-scope="{ item, term }">
      </template>
        </md-autocomplete>
          <md-button class="md-icon-button" @click="searchInput()">
            <md-icon>search</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
        <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>搜索结果</md-dialog-title>
      <md-tabs md-dynamic-height>
        <md-tab md-label="单曲">
         <md-list class="md-triple-line">
          <md-list-item v-for="(item,index) in searchRes.song.itemlist" :key="item.id"  @click="play(index)">

            <div class="md-list-item-text">
              <span>{{item.name}}</span>
              <p style="color:#ccc;">{{item.singer}}</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">more_horiz</md-icon>
            </md-button>
          </md-list-item>
          </md-list>
        </md-tab>

        <md-tab md-label="专辑">
               <md-list class="md-triple-line">
                  <md-list-item v-for="(item,index) in searchRes.album.itemlist" :key="item.id">
                    <md-avatar>
                      <img :src="item.pic" :alt="item.name">
                    </md-avatar>

                    <div class="md-list-item-text">
                      <span>{{item.name}}</span>
                      <p style="color:#ccc;">{{item.singer}}</p>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                      <md-icon class="md-primary">touch_app</md-icon>
                    </md-button>
                  </md-list-item>
                </md-list>
          </md-tab>

        <md-tab md-label="歌手">
               <md-list class="md-triple-line">
                  <md-list-item v-for="(item,index) in searchRes.singer.itemlist" :key="item.id">
                    <md-avatar>
                      <img :src="item.pic" :alt="item.name">
                    </md-avatar>

                    <div class="md-list-item-text">
                      <span>{{item.singer}}</span>
                    </div>

                    <md-button class="md-icon-button md-list-action">
                      <md-icon class="md-primary">touch_app</md-icon>
                    </md-button>
                  </md-list-item>
                </md-list>
        </md-tab>
        <md-tab md-label="MV">
               <md-list class="md-triple-line">
                <md-list-item v-for="(item,index) in searchRes.mv.itemlist" :key="item.id">

                  <div class="md-list-item-text">
                    <span>{{item.name}}</span>
                    <p>{{item.singer}}</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-primary">touch_app</md-icon>
                  </md-button>
                </md-list-item>
                </md-list>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
  name: 'AutocompleteBox',
  data () {
    return {
      key: '',
      colors: [],
      showDialog: false,
      searchRes: {
        album: {
          itemlist: []
        },
        mv: {
          itemlist: []
        },
        singer: {
          itemlist: []
        },
        song: {
          itemlist: []
        },
      },
      searchHistory: []
    }
  },
  methods: {
    search (key) {
      this.key = key
      this.$store.dispatch('search', key).then((response) => {
        this.searchRes = response.data.data
        console.log(this.searchRes, 9999)
        var index = this.searchHistory.indexOf(key)
        if (index !== -1) {
          this.searchHistory.splice(index, 1)
        }
        this.searchHistory.unshift(key)
        this.searchHistory = this.searchHistory.slice(0, 10)
        localStorage.searchHistory = JSON.stringify(this.searchHistory)
      })
    },
    searchInput () {
      if (this.key) {
        this.showDialog = true
        this.search(this.key)
      } else {
        confirm('请输入内容')
      }
    },
    play(index) {
      console.log(index)
      this.$store.commit('setPlayList', {
        index: index,
        list: this.searchRes.song.itemlist
      })
    },
  },
  created: function () {
    if (localStorage.searchHistory) {
      this.searchHistory = JSON.parse(localStorage.searchHistory)
    }
    this.$store.dispatch('getHotKey').then((response) => {
      this.hotkey = response.data.data.hotkey.slice(0, 5)
    })
  }
}
</script>

<style lang="scss" scoped>
.autoInput {
  display: contents;
}
.searchSong {
  display: inline-block;
  width: 40%;
  color: #fff;
}
</style>