<template>
  <div>
    <web-view
      @receiveMessage="receiveMessage"
      url="file://assets/dist/index.html"
      class="app"
      ref="web"
    ></web-view>
    <!-- <web-view @receiveMessage="receiveMessage" url="http://192.168.3.7:8080/" class="app"></web-view> -->
  </div>
</template>
<style scoped>
.app {
  flex: 1;
}
</style>

<script>
const audio = app.requireModule("eeui/audio");
const navigator = app.requireModule('navigator');

export default {
  data() {
    return {
      variable: 0
    }
  },
  created() {
    audio.setCallback((result) => {
     const calljs = `if(!!audioCallBack){audioCallBack(${JSON.stringify(result)})}`
     this.$refs.web.setJavaScript(calljs);
    })
  },
  methods: {
    receiveMessage({ message: data }) {
      const singerName = data.singer.map(e => {
        return e.name
      }).join('/')
      data.singerName = singerName
      //播放
      audio.play(data)
    }
  }

};
</script>
