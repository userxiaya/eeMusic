<template>
    <div>
        <web-view url="file://assets/dist/index.html" class="app"> </web-view>
        <!-- <web-view url="http://192.168.3.31:8080" class="app" @receiveMessage="webmessage"> </web-view> -->
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
    pageMessage: function (data) {
        if (data?.module==='playSong') {
            audio.play(data.songUrl)
            const img = data.songImage
            audio.notifyMusic(data.songname, data.singer, img)
        } 
    }
};
</script>
