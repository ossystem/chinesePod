<template>
    <ModalWrapper class="start" tranparent>
        <div class="title-email-sent">
            Hello! Please, press the
            <br/>button to begin the test!
        </div>
        <div class="spacer"></div>
        <div class="button-try" @click="startTestHandler" tabindex="1">Start</div>
    </ModalWrapper>
</template>


<script>
    import ModalWrapper from '../ModalWrapper';

    export default {
        name: 'FinalPage',
        components: {
            ModalWrapper
        },
        data: () => ({
            audio: null,
            lockStartButton: false,
            dogBarkingBuffer: null,
        }),
        methods: {
            startTestHandler () {
                if (!this.lockStartButton) {

                    const audio = document.getElementById('audioPlayerQuestion');

                    audio.play();
                    audio.pause();

                    this.audio.play();

                    this.$store.commit('nextSlide');
                    setTimeout(() => {

                    }, 3000);

                    this.lockStartButton = true;
                }
            },
        },
        mounted: function () {
            const audio = document.getElementById('audioPlayerIntro');
            audio.src = require(`../../assets/audio/common/gong.mp3`);
            this.audio = audio;

            //this.audio = new Audio(require(`../../assets/audio/common/gong.mp3`));
            this.audio.addEventListener('canplay', () => {
                //console.log('canplay gong',audio.duration);
            });

            this.audio.oncanplaythrough = () => {
                //console.log('gong');
            };

            this.audio.load();

            const audio2 = document.getElementById('audioPlayerQuestion');
            audio2.src = require(`../../assets/audio/common/gong.mp3`);
        }
    };
</script>

<style scoped>
    .start {
        text-align: center;
        background: url("../../assets/images/start/wall.jpg") no-repeat;
        background-size: cover;
        transition: all 0.5s ease;
    }
    .start .small {
        font-size: 14px;
    }

    .spacer {
        height: 50px;
    }

</style>
