<template>
    <div class="main">
        <div v-show="showFader" class="modal-fader"></div>
        <div v-show="endTest" class="modal-fader-end">
            <div class="modal-popup">
                <div>Test ends for you now!</div>
                <div>Take some mandarin and</div>
                <div>come back soon!</div>
            </div>
        </div>

        <Slide1 class="slide1" v-if="$store.state.currentSlide === 1"/>
        <Slide2 class="slide2" v-if="$store.state.currentSlide === 2"/>
    </div>
</template>

<script>
    import Slide1 from './components/Slide1/Slide1.vue';
    import Slide2 from './components/Slide2/Slide2.vue';

    export default {
        name: 'app',
        components: {
            Slide1,
            Slide2
        },
        data: () => ({
            showSettings: false,
            skipCharacters: false,
            traditionalCharset: false
        }),
        methods: {
            skipCharsHandler () {
                this.skipCharacters = !this.skipCharacters;
            },
            traditionalCharsetHandler () {
                this.traditionalCharset = !this.traditionalCharset;
            }
        },
        computed: {
            showFader: function () {
                return this.$store.state.showFader;
            },
            endTest: function () {
                return this.$store.state.endTest;
            }
        },
        mounted: function () {
            setTimeout(() => {
                this.showSettings = true;
            }, 5000);
        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    .main {
        background: #314155;
        min-height: 100vh;
    }

    .modal-fader {
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.7;
    }

    .modal-fader-end {
        position: fixed;
        z-index: 5;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
    }

    .slide1 {
        position: relative;
        z-index: 1;
    }

    .slide2 {
        position: relative;
        z-index: 2;
    }

    .modal-popup {
        position: absolute;
        display: flex;
        width: 900px;
        height: 300px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-weight: bold;
        font-size: 44px;
        color: #9fc6f4;

        /*margin: auto;*/
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);


        background: #384c63;
        border-radius: 30px;
        /*z-index: 5;*/
    }
</style>
