<template>
    <div>
        <web-view url="file://assets/dist/index.html" class="app"> </web-view>
        <!-- <web-view url="http://172.21.14.81:8080/" class="app"> </web-view> -->
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
    // 接受来自webview的参数 因为音乐插件无法在webview里调用
    pageMessage: function ({ message: data }) {
        if (data?.module==='playSong') {
            audio.play(data.songUrl)
            const img = data.songImage
            audio.notifyMusic(data.songname, data.singer, img)
        } 
    }
};
</script>
