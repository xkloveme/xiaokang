<template>
  <div class="autoInput">
        <md-autocomplete
          class="searchSong"
          v-model="key"
          :md-options="employees"
          md-layout="box"
          md-selected="getAllData">
          <label>歌曲/专辑/歌手</label>
        </md-autocomplete>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
  </div>
</template>

<script>
export default {
  name: 'AutocompleteBox',
  data: () => ({
    key: null,
    employees: [
      'Jim Halpert',
      'Dwight Schrute',
      'Michael Scott',
      'Pam Beesly',
      'Angela Martin',
      'Kelly Kapoor',
      'Ryan Howard',
      'Kevin Malone',
      'Creed Bratton',
      'Oscar Nunez',
      'Toby Flenderson',
      'Stanley Hudson',
      'Meredith Palmer',
      'Phyllis Lapin-Vance'
    ]
  }),
  mothed: {
    getAllData (val) {
      console.log(val)
    }
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