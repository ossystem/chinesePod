<template>
    <ModalWrapper class="final">
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
            <div class="score correct">Correct<div class="score-num">{{$store.state.numOfCorrect}}</div></div>
            <div class="score incorrect">Incorrect<div class="score-num">{{numOfIncorrect}}</div></div>
            <div class="score unattempted">Unattemtped<div class="score-num">{{$store.state.numOfUnattempted}}</div></div>
        </div>
        <div class="trial-course">We offer you 30 days of free trial Chinese lessons,<br>enter your email and we will
            send you our course.
        </div>
        <div><label><input v-model="usersAnswer" type="email" placeholder="example@gmail.com"></label></div>
        <div class="button-try">Send</div>
        <div class="bottom-spacer"></div>
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
            questions: slide
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
          numOfIncorrect: function() {
              return 8 - this.$store.state.numOfCorrect - this.$store.state.numOfUnattempted;
          },
            percents: function() {
                return ((this.$store.state.totalScore / 80)*100).toFixed(0)+'%';
            }
        },
        mounted: function () {

            // https://www.codepunker.com/blog/sync-audio-with-text-using-javascript

            // (function(win, doc) {
            //     let audioPlayer = doc.getElementById("audiofile");
            //     let subtitles = doc.getElementById("subtitles");
            //     let syncData = [
            //         {"end": "0.225","start": "0.125","text": "There" },
            //         {"end": "0.485","start": "0.225","text": "were" },
            //         /* ... and so on ... full json is in the demo */
            //     ];
            //     createSubtitle();
            //
            //     function createSubtitle()
            //     {
            //         var element;
            //         for (var i = 0; i < syncData.length; i++) {
            //             element = doc.createElement('span');
            //             element.setAttribute("id", "c_" + i);
            //             element.innerText = syncData[i].text + " ";
            //             subtitles.appendChild(element);
            //         }
            //     }
            //
            //     audioPlayer.addEventListener("timeupdate", function(e){
            //         syncData.forEach(function(element, index, array){
            //             if( audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end )
            //                 subtitles.children[index].style.background = 'yellow';
            //         });
            //     });
            // }(window, document));

            this.$store.commit('clearDataBeforeSlideStarts');
            setTimeout(() => {
                this.showSettings = true;
            }, 5000);
        }
    };
</script>

<style scoped>
    .final {
        text-align: center;
        color: #9fc6f4;
    }

    .final input {
        width: 90%;
        height: 60px;
        font-size: 24px;
        background: #304155;
        border-radius: 35px;
        padding-left: 20px;
        padding-right: 20px;
        outline: none;
        border: 0 solid transparent;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #9FC6F4;
    }
    .final input::placeholder {
        color: #9fc6f4;
    }
    .trial-course {
        font-size: 16px;
        line-height: 22px;
        font-weight: normal;
    }
    .title {
        font-weight: bold;
        font-size: 44px;
        line-height: 48px;
        margin-top: 50px;
    }
    .labels {
        font-size: 16px;
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
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
        color: #384C63;
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
        width: 160px;
        height: 100px;

        background: #304155;
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
        color: #1EBF1B;
    }

    .score-wrap .incorrect {
        color: #E84A4A;
    }

    .score-wrap .unattempted{
        color: #9FC6F4;

    }

    .score-num {
        font-size: 48px;
        line-height: 44px;
        font-weight: bold;
    }

    .bottom-spacer {
        height: 42px;
    }
</style>
