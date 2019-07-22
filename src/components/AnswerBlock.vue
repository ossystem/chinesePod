<template>
    <section>
        <div class="answers">
            <AudioPreloader @soundsReady="soundsReady" :sounds="data" :is-wrong="isWrong"/>
            <div class="answers-inner">
                <div class="answer-row">
                <SingleAnswerBlock
                        class="anim"
                        :class="{aa1: answerIndex !== 1, blink: answerIndex >= 1}"
                        :start="answerIndex >= 1"
                        variant="1"
                        :answer="data[0]"
                        :index="1"
                />
                <SingleAnswerBlock
                        class="anim"
                        :class="{aa2: answerIndex !== 2, blink: answerIndex >= 2}"
                        :start="answerIndex >= 2"
                        variant="2"
                        :answer="data[1]"
                        :index="2"
                />
                </div>
                <div class="answer-row">
                <SingleAnswerBlock
                        class="anim"
                        :class="{aa3: answerIndex !== 3, blink: answerIndex >= 3}"
                        :start="answerIndex >= 3"
                        variant="3"
                        :answer="data[2]"
                        :index="3"
                />
                <SingleAnswerBlock
                        class="anim"
                        :class="{aa4: answerIndex !== 4, blink: answerIndex >= 4}"
                        :start="answerIndex >= 4"
                        variant="4"
                        :answer="data[3]"
                        :index="4"
                />
                </div>
            </div>
        </div>
<!--        <div class="bottom-spacer"></div>-->
    </section>
</template>

<script>
    import SingleAnswerBlock from './SingleAnswerBlock';
    import AudioPreloader from './AudioPreloader';

    export default {
        name: 'AnswerBlock',
        components: {
            SingleAnswerBlock,
            AudioPreloader
        },
        props: {
            show: Boolean,
            data: Array,
            slide: Number,
            isWrong: Boolean,
            showWrongAnswer: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            answerIndex: 0,
            sounds: [],
            stopMusic: false
        }),
        methods: {
            playAllSounds (sounds) {
                //console.log('I am ready:',sounds);
                let delay = 0;
                sounds.forEach(element => {
                    setTimeout(() => {
                        if (this.$store.state.currentSlide === this.slide && !this.stopMusic) {
                            this.answerIndex++;

                            if (!this.$store.state.enableSound) {
                                element.audio.muted = true;
                            }

                            element.audio.play();
                        }
                    }, delay);

                    delay += element.audio.duration * 1000 + 500;
                    //console.log(element.index,element.audio.duration*1000);
                });
            },
            soundsReady (sounds) {
                // 1500 is animation delay
                // initial delay while we are reading the question
                this.sounds = sounds;
            }
        },
        mounted: function () {
            this.$store.subscribe((mutation) => {
                if (mutation.type === 'stopTimeoutTimer' || mutation.type === 'interruptAnswers') {
                    this.sounds.forEach(element => {
                        element.audio.pause();
                    });
                    this.stopMusic = true;
                } else if (mutation.type === 'enableSound') {
                    this.sounds.forEach(element => {
                        element.audio.muted = !this.$store.state.enableSound;
                    });
                }
                //console.log('mutation', mutation, this.slide);
            });
        },
        watch: {
            show: function () {
                if (this.show) {
                    setTimeout(() => {
                        this.playAllSounds(this.sounds);
                    }, 1000);
                }
            }
        }
    };
</script>

<style scoped>
    .answers {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        color: #fff;
        z-index: 2;
        /*outline: 1px solid green;*/
    }

    .answers-inner {
        display: flex;
        justify-content: space-between;

        margin-right: 40px;
        margin-left: 40px;

        max-width: 1300px;
        flex: 1;
    }
    .answer-row {
        display: flex;
        flex-grow: 1;
        justify-content: center;
    }

    .bottom-spacer {
        height: 40px;
    }

    .anim {
        animation: fadeInLeft 1s ease-in-out backwards 1;
    }

    /*.answers-inner .blink {*/
    /*    animation: blinkAnswer 0.2s ease-in-out;*/
    /*}*/

    .anim.aa1 {
        animation-delay: 0s;
        z-index: 7;
    }
    .anim.aa2 {
        /*animation-delay: 1s;*/
        z-index: 6;
    }
    .anim.aa3 {
        /*animation-delay: 2s;*/
        z-index: 5;
    }
    .anim.aa4 {
        /*animation-delay: 3s;*/
        z-index: 4;
    }

    @keyframes blinkAnswer {
        0% {
            /*opacity: 0;*/
            /*-webkit-transform: translate3d(-100%, 0, 0);*/
            transform: scale(1.01) rotate(2deg);
        }

        25% {
            transform: scale(1.02);
        }

        50% {
            transform: scale(1.03);
        }

        75% {
            transform: scale(1.05);
        }

        100% {
            /*opacity: 1;*/
            /*-webkit-transform: translate3d(0, 0, 0);*/
            transform: scale(1);
        }
    }

    @keyframes fadeInLeft {
        from {
            opacity: 0;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @media (max-width: 1370px) {
        .answers {
            margin-bottom: 0;
        }
    }

    @media (max-width: 800px) {
        .answers-inner {
            display: flex;
            justify-content: space-between;

            margin-right: 40px;
            margin-left: 40px;

            max-width: 1300px;
            flex-wrap: wrap;
            flex: 1;
        }
    }
</style>