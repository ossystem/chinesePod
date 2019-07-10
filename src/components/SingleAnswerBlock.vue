<template>
    <div>
        <div class="answer-block">
            <transition name="fade">
                <div class="answer-wrong-wrap" v-if="false">
                    <div class="answer-wrong">
                        <div class="line1" v-html="answer.wrong.line1"></div>
                        <div class="line2">{{answer.wrong.line2}}</div>
                        <div class="line3">{{answer.wrong.line3}}</div>
                        <div class="button-try" @click="tryButtonHandler">{{endTest ? 'Ok': 'Try'}}</div>
                    </div>
                    <div class="answer-cross"></div>
                </div>
            </transition>
            <div
                    :id="`a${index}`"
                    class="answer"
                    :class="{answered: answered, correct: correct}"
                    @click="clickAnswerHandler(3)"
            >
                <div class="variant">{{variant}}</div>
                <div class="text">{{answer.text}}</div>
            </div>

            <audio id="soundPlayer"></audio>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SingleAnswerBlock',
        data: () => ({
            answered: false,
            showWrongAnswer: false,
            correct: false
        }),
        props: {
            variant: String,
            answer: Object,
            index: Number
        },
        computed: {
            currentSlide: function () {
                return this.$store.state.currentSlide;
            },
            endTest: function () {
                return this.$store.state.numOfPreviousErrors && this.currentSlide === 2;
            }
        },
        methods: {
            tryButtonHandler () {
                this.showWrongAnswer = false;

                const audio = document.getElementById('soundPlayer');
                audio.pause();

                this.$store.commit('hideModalFader');
                this.$store.commit('incNumOfWrongAnswers');

                if (this.endTest) {
                    this.$store.commit('endTest');
                } else {
                    this.$store.dispatch('checkForNextSlide');
                }
            },
            clickAnswerHandler () {
                if (this.answered || this.$store.state.showFader) {
                    return;
                }

                if (this.answer.wrong.voice && this.$store.state.enableSound) {
                    const audio = document.getElementById('soundPlayer');

                    audio.addEventListener('canplay', () => {
                        audio.play();
                    });

                    audio.src = require(`../assets/audio/${this.answer.wrong.voice}`);
                }

                if (this.answer.wrong.line1 !== 'correct') {
                    this.showWrongAnswer = true;
                    //this.$store.commit('showModalFader');

                    this.answered = true;
                    setTimeout(()=>{this.tryButtonHandler()},2000);

                } else {
                    this.correct = true;
                    this.$store.commit('stopTimeoutTimer');

                    setTimeout(() => {
                        this.$store.commit('answerIsCorrect');
                    }, 2000);

                    // if last slide 8 - final
                    if (this.currentSlide === 8) {
                        setTimeout(() => {
                            this.$store.dispatch('checkForNextSlide');
                            this.$store.commit('setFinal');
                        }, 2000);
                    } else {
                        // do not go to next slide if slide is 5
                        // we have to ask about this phrase and show slides
                        if (this.currentSlide !== 5) {
                            setTimeout(() => {
                                this.$store.dispatch('checkForNextSlide');
                            }, 2000);
                        }
                    }
                }
            }
        }
    };
</script>

<style scoped>
    .answer {
        display: flex;
        width: 280px;
        min-height: 280px;
        overflow-wrap: break-word;
        /*width: 90vw;*/
        height: 60px;
        /*line-height: 60px;*/
        border-radius: 30px;
        margin-bottom: 20px;

        font-weight: bold;
        border: 0 solid transparent;

        animation: fadeInDown 1s both ease-out;
        cursor: pointer;

        align-items: center;
        justify-content: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    .answer#a1.correct {
        animation: blinkCorrectA1 0.3s 4;
        animation-delay: 0.5s;
    }
    .answer#a2.correct {
        animation: blinkCorrectA2 0.3s 4;
        animation-delay: 0.5s;
    }
    .answer#a3.correct {
        animation: blinkCorrectA3 0.3s 4;
        animation-delay: 0.5s;
    }
    .answer#a4.correct {
        animation: blinkCorrectA4 0.3s 4;
        animation-delay: 0.5s;
    }

    .answer-block {
        position: relative;
    }

    .answer-wrong-wrap {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 30px;
        bottom: 12px;
        /*z-index: 11;*/
    }
    .answer-wrong {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 901px;
        min-height: 383px;
        background: url("../assets/images/icons/modal-bg.png");
        border-radius: 30px;
        text-align: center;
    }

    .answer-wrong .line1 {
        font-size: 24px;
        margin-top: 60px;
        margin-bottom: 50px;
        max-width: 680px;
    }

    .answer-wrong .line2 {
        font-weight: bold;
        font-size: 44px;
        color: #9fc6f4;
        max-width: 680px;
    }

    .answer-wrong .line3 {
        font-size: 16px;
        color: #9fc6f4;
        margin-bottom: 30px;
        max-width: 680px;
    }

    .answer-cross {
        width: 36px;
        height: 35px;
        background: url("../assets/images/icons/cross.png");
        /*margin-bottom: 0px;*/
    }

    .answer .text {
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
    }

    .answer .variant {
        /*position: relative;*/
        position: absolute;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        background: rgba(0,0,0,0.15);
        /*display: inline-block;*/
        /*border: 1px solid rgba(255, 255, 255, 0.2);*/
        border-top-right-radius: 30px;
        border-bottom-left-radius: 30px;
        font-size: 36px;
        /*margin-left: 30px;*/
        /*padding-right: 20px;*/
        /*padding-left: 20px;*/
        top: 0;
        right: 20px;
    }

    .answer#a1 {
        /*background: linear-gradient(90deg, #cb446c 50%, #eba24c 100%);*/
        background: #CB4444;
    }

    .answer#a1.answered {
        background: rgba(203, 68, 68, 0.5);
        color: lightgray;
    }

    .answer:not(.answered)#a1:hover {
        background: #CB4444;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px #CB4444;
    }

    .answer#a2 {
        /*background: linear-gradient(90deg, #1bb5bf 50%, #1b8dbe 100%);*/
        background: #1B84BF;
        animation-delay: 4s;
    }
    .answer#a2.answered {
        background: rgba(27, 132, 191, 0.5);
        color: lightgray;
    }

    .answer:not(.answered)#a2:hover {
        background: #1B84BF;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px #1B84BF;
    }

    .answer#a3 {
        /*background: linear-gradient(90deg, #eba24c 50%, #1ebf1b 100%);*/
        background: #E48F2A;
        animation-delay: 2s;
    }

    .answer#a3.answered {
        background: rgba(228, 143, 42, 0.5);
        color: lightgray;
    }

    .answer:not(.answered)#a3:hover {
        background: #E48F2A;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px #E48F2A;
    }
    .answer#a4 {
        /*background: linear-gradient(90deg, #1ebf1b 50%, #1bb5bf 100%);*/
        background: #1ebf1b;
        animation-delay: 3s;
    }
    .answer#a4.answered {
        background: rgba(30, 191, 27, 0.5);
        color: lightgray;
    }
    .answer:not(.answered)#a4:hover {
        background: #1ebf1b;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px #1ebf1b;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    @keyframes blinkCorrectA1 {
        from {
            box-shadow: none;
        }

        to {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px #CB4444;
        }
    }

    @keyframes blinkCorrectA2 {
        from {
            box-shadow: none;
        }

        to {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px #1B84BF;
        }
    }
    @keyframes blinkCorrectA3 {
        from {
            box-shadow: none;
        }

        to {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px #E48F2A;
        }
    }
    @keyframes blinkCorrectA4 {
        from {
            box-shadow: none;
        }

        to {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px #1ebf1b;
        }
    }

    @media (max-width: 1370px) {
        .answer {
            height: 46px;
            /*line-height: 46px;*/
            margin-bottom: 18px;
        }

        .answer .variant {

            font-size: 32px;

        }

        .answer-wrong-wrap {
            transform: scale(0.8);

            bottom: -32px;
        }

        .answer-wrong {
            background-size: 80% 90%;
            background-repeat: no-repeat;
            background-position: center;
        }

        .answer-wrong .line1 {
            margin-bottom: 30px;
        }
    }
</style>