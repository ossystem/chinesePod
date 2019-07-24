<template>
    <ModalWrapper class="final">
        <div v-if="hasSentEmail" class="result-content">
            <div v-if="emailCookie" class="title-email-sent">Successfully updated!</div>
            <div v-else class="title-email-sent">You have been signed up!</div>
        </div>
        <div v-else class="modal-wrapper">
            <div class="title top">Your level:</div>
            <div class="title">{{userLevel.toUpperCase()}}</div>
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
            <div class="trial-course margin-vertical"><b>We offer you 30 days of free trial Chinese lessons,</b> enter your email and we
                will
                send you our course.
            </div>
            <div v-show="!emailCookie" class="margin-vertical"><label><input v-model="userEmail" type="email" placeholder="example@gmail.com"></label></div>
            <div v-show="!emailCookie" class="label-input margin-vertical"><label><input type="checkbox" v-model="subscribeNews">Receive more info from ChinesePod</label></div>
            <div class="button-try margin-vertical" @click="onSendEmailHandler">{{emailCookie ==='' ?'Proceed':'Update settings'}}</div>
            <div class="bottom-spacer"></div>
        </div>
    </ModalWrapper>
</template>


<script>
    import ModalWrapper from '../ModalWrapper';

    import slide from '../../data/slides/slide8';

    const baseURL = 'https://staging.chinesepod.com/';

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
            userEmail: '',
            hasSentEmail: false,
            subscribeNews: false,
            emailCookie: '',
            level: ['newbie', 'elementary', 'preInt', 'intermediate', 'upperInt', 'advanced'],
        }),
        methods: {
            updateUserCharSet() {
                const data ={
                    "emailAddress": this.emailCookie,
                    "type": "charSet",
                    "value": "traditional",
                };


                this.axios.put(`${baseURL}api/v1/account/update-options`,data).then((response) => {
                    console.log(response.data)
                }).catch(err=>console.log("Error:",err));
            },
            updateUserLevel() {
                const data ={
                    "emailAddress": this.emailCookie,
                    "type": "level",
                    "value": this.userLevel,
                };

                this.axios.put(`${baseURL}api/v1/account/update-options`,data).then((response) => {
                    console.log(response.data)
                }).catch(err=>console.log("Error:",err));
            },
            singUpUser() {
                const data ={
                    "emailAddress": this.userEmail,
                    "optIn": this.subscribeNews,
                    "level": this.userLevel,
                };

                if (this.$store.state.userTraditional) {
                    data.charSet = "traditional";
                }

                this.axios.post(`${baseURL}api/v1/entrance/signup`,data).then((response) => {
                    console.log(response.data)
                }).catch(err=>console.log("Error:",err));
            },
            onSendEmailHandler () {
                // user is logged in
                if (this.emailCookie !== '') {
                    this.singUpUser();
                } else {

                    this.updateUserLevel();

                    if (this.$store.state.userTraditional) {
                        this.updateUserCharSet();
                    }
                }

                this.hasSentEmail = true;
            },
            skipCharsHandler () {
                this.skipCharacters = !this.skipCharacters;
            },
            traditionalCharsetHandler () {
                this.traditionalCharset = !this.traditionalCharset;
            },
            getCookieEmail () {
                return document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, '$1');
            }
        },
        computed: {
            userLevel: function () {
                const percent = parseInt(this.percents);

                // 00-16% newbie
                // 16-32% elementary
                // 32-48% preInt
                // 48-64% intermediate
                // 64-80% upperInt
                // 80-96% advanced

                console.log(percent);

                let levelIndex = 0;

                if (percent < 16) {
                    levelIndex = 0;
                } else if (percent < 32) {
                    levelIndex = 1;
                } else if (percent < 48) {
                    levelIndex = 2;
                } else if (percent < 64) {
                    levelIndex = 3;
                } else if (percent < 86) {
                    levelIndex = 4;
                } else {
                    levelIndex = 5;
                }

                return this.level[levelIndex];
            },
            numOfIncorrect: function () {
                return 8 - this.$store.state.numOfCorrect - this.$store.state.numOfUnattempted;
            },
            percents: function () {
                return ((this.$store.state.totalScore / 80) * 100).toFixed(0) + '%';
            }
        },
        mounted: function () {
            this.emailCookie = this.userEmail = this.getCookieEmail();
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

    .modal-wrapper input[type=email] {
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

        color: #384c63;
    }
    .margin-vertical {
        margin-top: 10px;
        margin-bottom: 10px;
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
    .result-content {
        text-align: center;
    }

    .title-email-sent,
    .title {
        font-weight: bold;
        font-size: 44px;
    }
    .title.top {
        margin-top: 50px;
    }
    .title-email-sent {
        margin-top: 0;
    }
    .labels {
        font-size: 16px;
        width: 80%;
        max-width: 490px;
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

    .label-input {
        font-size: 14px;
    }

    .progress-bar {
        display: flex;
        width: 80%;
        max-width: 490px;
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
        margin-bottom: 30px;
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
        }
        .title.top {
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

        .modal-wrapper input[type="email"] {
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
