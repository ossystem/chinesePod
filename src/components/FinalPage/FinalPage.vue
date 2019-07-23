<template>
    <ModalWrapper class="final">
        <div v-if="hasSentEmail">
            <div class="title-email-sent">Email has been sent!</div>
            <div class="note-email-sent">* - sending will work in final release</div>
        </div>
        <div v-else class="modal-wrapper">
            <div class="title">You have completed the test!</div>
            <div class="labels">
                <div class="correct">Correct</div>
                <div class="incorrect" v-show="percents !== '100%'">Incorrect</div>
            </div>
            <div class="progress-bar">
                <div class="correct" :style="{width: percents}"></div>
                <div class="middle-wrapper">
                    <div class="middle">
                        <div class="percents">{{percents}}</div>
                    </div>
                </div>
                <div class="incorrect"></div>
            </div>
            <div class="score-wrap">
                <div class="score correct">Correct
                    <div class="score-num">{{$store.state.numOfCorrect}}</div>
                </div>
                <div class="score incorrect">Incorrect
                    <div class="score-num">{{numOfIncorrect}}</div>
                </div>
                <div class="score unattempted">Unattemtped
                    <div class="score-num">{{$store.state.numOfUnattempted}}</div>
                </div>
            </div>
            <div class="trial-course"><b>We offer you 30 days of free trial Chinese lessons,</b> enter your email and we
                will
                send you our course.
            </div>
            <div><label><input v-model="usersAnswer" type="email" placeholder="example@gmail.com"></label></div>
            <div class="button-try" @click="onSendEmailHandler">Send</div>
            <div class="bottom-spacer"></div>
        </div>
    </ModalWrapper>
</template>


<script>

    import ModalWrapper from '../ModalWrapper';

    import slide from '../../data/slides/slide8';

    export default {
        name: 'FinalPage',
        components: {
            ModalWrapper
        },
        data: () => ({
            showSettings: false,
            skipCharacters: false,
            traditionalCharset: false,
            questions: slide,
            usersAnswer: '',
            hasSentEmail: false,
            emailCookie: ''
        }),
        methods: {
            onSendEmailHandler () {
                this.hasSentEmail = true;
            },
            skipCharsHandler () {
                this.skipCharacters = !this.skipCharacters;
            },
            traditionalCharsetHandler () {
                this.traditionalCharset = !this.traditionalCharset;
            },
            getCookieEmail () {
                return document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            }
        },
        computed: {
            numOfIncorrect: function () {
                return 8 - this.$store.state.numOfCorrect - this.$store.state.numOfUnattempted;
            },
            percents: function () {
                return ((this.$store.state.totalScore / 80) * 100).toFixed(0) + '%';
            }
        },
        mounted: function () {
            this.usersAnswer = this.getCookieEmail();
            this.$store.commit('clearDataBeforeSlideStarts');
        }
    };
</script>

<style scoped>
    .modal-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #9fc6f4;
        width: 100%;
        min-width: 320px;
        background: white;
        border-radius: 30px;
    }

    .modal-wrapper input {
        width: 90%;
        height: 60px;
        font-size: 24px;
        background: #f3f7fb;
        border-radius: 35px;
        padding-left: 20px;
        padding-right: 20px;
        outline: none;
        border: 0 solid transparent;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #384c63;
    }
    .modal-wrapper input::placeholder {
        color: #384c63;
    }
    .trial-course {
        font-size: 16px;
        line-height: 22px;
        font-weight: normal;
        max-width: 400px;
    }
    .note-email-sent {
        font-size: 14px;
    }
    .title-email-sent,
    .title {
        font-weight: bold;
        font-size: 44px;
        /*line-height: 48px;*/
        margin-top: 50px;
    }
    .title-email-sent {
        margin-top: 0;
    }
    .labels {
        font-size: 16px;
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        margin-bottom: 5px;
    }

    .labels .correct {
        color: #1ebf1b;
    }
    .labels .incorrect {
        color: #e84a4a;
    }

    .progress-bar {
        display: flex;
        width: 80%;
        /*margin: auto;*/
        margin-bottom: 27px;
    }

    .progress-bar .correct {
        /*width: 50%;*/
        height: 10px;
        background: #1ebf1b;
        border-top-left-radius: 35px;
        border-bottom-left-radius: 35px;
    }

    .progress-bar .middle-wrapper {
        position: relative;
    }
    .progress-bar .middle {
        position: absolute;
        width: 54px;
        height: 43px;
        background: url("../../assets/images/icons/success.png");
        bottom: 0;
        transform: translate(-50%);
    }

    .progress-bar .middle .percents {
        position: relative;
        font-size: 20px;
        font-weight: bold;
        color: #384c63;
        top: 2px;
        left: 2px;
    }

    .progress-bar .incorrect {
        height: 10px;
        background: #e84a4a;
        flex: 1;
        border-top-right-radius: 35px;
        border-bottom-right-radius: 35px;
    }

    .score-wrap {
        display: flex;
        margin-bottom: 50px;
    }

    .score-wrap .score {
        width: calc(60px + 10vw);
        max-width: 160px;
        height: 100px;

        background: #f3f7fb;
        border-radius: 15px;
        margin: 3px;
    }

    .score {
        font-size: 16px;
        font-weight: normal;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .score-wrap .correct {
        color: #1ebf1b;
    }

    .score-wrap .incorrect {
        color: #e84a4a;
    }

    .score-wrap .unattempted {
        color: #384c63;

    }

    .score-num {
        font-size: 48px;
        line-height: 44px;
        font-weight: bold;
    }

    .bottom-spacer {
        height: 42px;
    }

    @media (max-width: 1370px) {

    }
    @media (max-width: 680px) {
        .title {
            font-size: calc(20px + 3vw);
            margin-top: 30px;
        }

        .score {
            font-size: 14px;
        }

        .labels {
            margin-top: 20px;
        }

        .score-wrap {
            margin-bottom: 30px;
        }

        .score-wrap .score {
            width: calc(50px + 10vw);
        }

        .modal-wrapper input {
            width: 80%;
            height: 50px;
            font-size: 20px;
        }

        .trial-course {
            padding-left: 10px;
            padding-right: 10px;
        }

        .title-email-sent {
            font-size: 24px;
        }
    }

</style>
