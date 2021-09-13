<template>
    <div>
        <navbar class="navbarc" :style="{paddingTop: `${variable}px`, height: `${100+variable}px`}">
            <navbar-item type="title">
                <text class="title text">音乐整合</text>
            </navbar-item>
            <navbar-item type="right">
                <icon content="tb-search" class="icon" @click.stop="gotoSearch"></icon>
            </navbar-item>
        </navbar>
        <web-view url="file://assets/dist/index.html" class="app" @receiveMessage="webmessage"> </web-view>
        <!-- <web-view url="http://192.168.3.31:8080" class="app" @receiveMessage="webmessage"> </web-view> -->
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
const navigator = app.requireModule('navigator');
export default {
    data() {
        return {
            variable: 0
        }
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
        },
        gotoSearch() {
            navigator.push({
                url:'search',
                statusBarType:'immersion'
            })
        }
    },
    created() {
        const variable = eeui.getStatusBarHeight()
        this.variable = variable
    },
};
</script>
