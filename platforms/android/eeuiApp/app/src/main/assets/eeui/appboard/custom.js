"use strict";

var eeui = app.requireModule('eeui');
Vue.mixin({
  data: function data() {
    return {
      resourceUrl: 'https://eeui.app/dist/1.0.1/pages/'
    };
  },
  methods: {
    openViewCode: function openViewCode(str) {
      this.openViewUrl("https://eeui.app/" + str + ".html");
    },
    openViewUrl: function openViewUrl(url) {
      eeui.openPage({
        url: this.resourceUrl + 'index_browser.js',
        pageType: 'app',
        statusBarColor: "#3EB4FF",
        params: {
          title: "EEUI",
          url: url
        }
      });
    }
  }
});