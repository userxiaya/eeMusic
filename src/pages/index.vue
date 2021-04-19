<template>
  <div class="app">
    <navbar class="navbar">
      <navbar-item type="left">
        <icon content="md-arrow-back" class="icon"></icon>
      </navbar-item>
      <navbar-item type="title">
        <text class="text">vip音乐文件解码</text>
      </navbar-item>
      <navbar-item type="right">
        <icon content="md-refresh" class="icon"></icon>
      </navbar-item>
    </navbar>
    <web-view ref="web" class="webview" :url="url"> </web-view>
  </div>
</template>


<script>
const eeui = app.requireModule("eeui");
const navigationBar = app.requireModule("navigationBar");

export default {
  data() {
    return {
      url: "file://assets/dist/index.html#/musicList",
      //   url: "http://192.168.3.31:8080#/musicList",
    };
  },

  appActive(data) {
    //APP进入前台：App从【后台】切换至【前台】时触发
  },

  appDeactive(data) {
    //APP进入后台：App从【前台】切换至【后台】时触发
  },

  pageReady(data) {
    //页面挂载：页面【渲染完成】时触发
  },

  pageResume(data) {
    //页面激活：页面【恢复】时触发（渲染完成时也会触发1次）
  },

  pagePause(data) {
    //页面失活：页面【暂停】时触发
  },

  pageDestroy(data) {
    //页面停止：页面【销毁】时触发
  },

  mounted() {
    //   navigationBar.hide();
  },
  methods: {},
};
</script>
<style scoped>
.app {
  flex: 1;
  background: green;
}
.webview {
  flex: 1;
}
.navbar {
  width: 750px;
  height: 150px;
  padding-top: 60px;
  background-color: #ff5001;
  box-sizing: border-box;
}
.text {
  color: #ffffff;
  font-weight: bold;
}
</style>
