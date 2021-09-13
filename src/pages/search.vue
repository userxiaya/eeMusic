<template>
    <div>
        <web-view url="file://assets/dist/index.html#/searchList" class="app" @receiveMessage="webmessage"> </web-view>
        <!-- <web-view url="http://192.168.3.31:8080#/searchList" class="app" @receiveMessage="webmessage"> </web-view> -->
    </div>
</template>
<style scoped>
    .app {
        flex: 1;
    }
    .navbarc {
        width: 750px;
        height: 100px;
    }
    .title {
        font-size: 25px;
        font-weight: bold;
        color: #ffffff;
    }
    .icon {
        width: 100px;
        height: 100px;
        color: #ffffff;
    }
</style>

<script>
const audio = app.requireModule("eeui/audio");
export default {
    data() {
    },
    methods: {
        webmessage({message:data}) {
            if(data?.module==='audio') {
              audio.play(data.songUrl)
              setTimeout(()=>{
                const img = data.songImage
                audio.notifyMusic(data.songname, data.singer, img)
              },500)
            } 
        }
    },
};
</script>
