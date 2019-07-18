<template>
    <section class="question">
        <!--        <div class="arrow left"></div>-->
        <div class="question-wrapper">
            <div class="text" v-html="data.title"></div>

            <div class="symbols" :class="{hide:skipCharacters,show:!skipCharacters}">
        <span
                :id="'char'+index"
                v-for="(item,index) in title"
                :key="index"
                class="list-complete-item"
        >{{item === '_' ? '' : item}}</span>
            </div>

            <div
                    class="pinyin"
                    :class="{hide:!skipCharacters,show:skipCharacters,delay:showPinyin,small: isSmall, smaller: isSmaller}"
            >{{pinyin}}
            </div>
        </div>
        <audio id="audioIntro"></audio>
        <!--        <div class="arrow right"></div>-->
    </section>
</template>

<script>
    import QuestionBlockMixin from '../mixins/QuestionBlock';

    export default {
        name: 'QuestionBlock',
        mixins: [QuestionBlockMixin],
        data: () => ({
            charsPart: '',
            title: '',
            titles: [],
            titleIndex: 0,
            changePinyin: false
        }),
        props: {
            isWrong: Boolean,
            skipCharacters: {
                default: false,
                type: Boolean
            },
            data: Object,
            traditional: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            traditional: function () {
                const word = this.traditional ? this.data.charsTD : this.data.chars;

                this.charsPart = '';
                let time = 100;
                word.split('').forEach(char => {
                    setTimeout(() => {
                        this.charsPart += char;
                    }, time);
                    time += 50;
                });
            }
        },
        mounted: function () {
            console.log("QUESTION2 SKIP CHARS:",this.skipCharacters);
            console.log('Slide#2, isWrong:', this.isWrong);
            this.charsPart = this.data.chars;
            this.title = this.data.chars;

            //console.log(this.data);
            if (this.data.animation) {
                this.titles = this.data.animation;
                setTimeout(() => {
                    if (this.$store.state.currentSlide === 2) {
                        const audio = document.getElementById('audioIntro');
                        audio.addEventListener('canplay', () => {

                            if (!this.$store.state.enableSound) {
                                audio.muted = true;
                            }

                            setTimeout(() => {audio.play();}, 2000);
                        });

                        audio.src = require('../assets/audio/slide2/question-2.mp3');
                    }

                    this.changeTitle();
                }, this.data.animation[0].delay);
            }

            this.initAndStartQuestion();
            this.applyMuteAudio();
        },
        methods: {
            getCharById (id) {
                return document.getElementById(id);
            },
            changeTitle () {
                //this.title = this.titles[this.titleIndex].chars;
                this.titleIndex = (this.titleIndex + 1) % this.titles.length;

                if (this.titleIndex > 3) {
                    this.changePinyin = true;
                }
                //console.log("tab index:", this.titleIndex);
                if (this.titleIndex === 1) {
                    // hide last char
                    const char4 = this.getCharById('char4');
                    char4.classList.add('invisible');

                    // make it invisible to make it animatible for
                    // step 4
                    const char2 = this.getCharById('char2');
                    char2.classList.add('zoom-out');
                }
                if (this.titleIndex === 2) {
                    //  const char = document.getElementById('char3');
                    //  char.innerHTML = '茶';
                    //  char.classList.remove('char3');

                    const char3 = this.getCharById('char3');
                    char3.classList.add('move-right');
                }
                if (this.titleIndex === 3) {
                    const char4 = this.getCharById('char4');
                    char4.innerHTML = '茶';
                    char4.classList.remove('invisible');

                    // Move char0 & char1 left
                    //  const char0 = this.getCharById('char0');
                    //  const char1 = this.getCharById('char1');
                    //  char0.classList.add('move-char-left');
                    //  char1.classList.add('move-char-left');

                    //const char3 = this. getCharById('char3');
                    //  char3.classList.remove('move-right');
                    //  //char3.classList.add('invisible');
                    //  //char3.classList.add('zoom-out');
                    //char3.innerHTML = '有';
                }
                if (this.titleIndex === 4) {
                    const char3 = this.getCharById('char3');
                    char3.classList.remove('move-right');
                    //  //char3.classList.add('invisible');
                    //  //char3.classList.add('zoom-out');
                    char3.innerHTML = '有';
                }
                if (this.titleIndex === 4) {
                    const char2 = this.getCharById('char2');

                    //char2.classList.add('char4');
                    char2.innerHTML = '没';
                    char2.classList.remove('zoom-out');

                    //const char3 = this. getCharById('char3');
                    //char3.classList.remove('invisible');
                    //char3.innerHTML = '';
                    //char3.classList.remove('zoom-out');
                }

                //console.log("change title to:", this.title);

                if (this.titleIndex) {
                    setTimeout(this.changeTitle, this.titles[this.titleIndex].delay);
                }
            }
        },
        computed: {
            isSmall: function () {
                return this.chars.length > 14 && this.chars.length < 25;
            },
            isSmaller: function () {
                return this.chars.length >= 25;
            },
            chars: function () {
                return this.traditional ? this.data.charsTD : this.data.chars;
            },
            pinyin: function () {
                if (this.changePinyin) {
                    return this.traditional ? this.data.pinyinTD2 : this.data.pinyin2;
                } else {
                    return this.traditional ? this.data.pinyinTD : this.data.pinyin;
                }
            }
        }
    };
</script>

<style scoped>
    .question {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
        min-height: 300px;
        margin-bottom: 30px;
    }

    .question-wrapper {
        text-align: center;
    }

    .question .symbols {
        font-size: 90px;
        color: #384C63;
    }

    .question .text {
        font-size: 24px;
        color: #384C63;
        transition: all 1s;
        line-height: 34px;
        height: 34px;
    }

    .question .text.text-green {
        color: black;
        /*font-weight: bold;*/
    }

    .symbols.hide.smaller,
    .symbols.hide.small,
    .symbols.hide {
        animation: fadeInBlur 1s both;
        font-size: 0; /*was !imp*/
        transition: all 1s;
    }

    .symbols.show {
        animation: fadeInBlur 1s both;
        font-size: 90px;
        transition: all 1s;
    }

    /* Slides 7,8*/
    .symbols.small,
    .symbols.smaller {
        font-size: 30px;
    }

    .symbols.show.smaller {
        font-size: 30px; /*was !imp*/
    }

    .pinyin.show {
        font-size: 90px;
        color: #384C63 !important;
        /*animation: fadeInBlur 1s both;*/
        transition: all 1s;
    }

    .pinyin.show.small {
        font-size: 50px; /*was !imp*/
    }

    .pinyin.show.smaller {
        font-size: 24px; /*was !imp*/
    }

    .pinyin.hide.small,
    .pinyin.hide.smaller,
    .pinyin.hide {
        font-size: 24px;
        /*animation: fadeInBlur 1s both;*/
        transition: all 1s;
    }

    .question .pinyin-no-animation {
        font-size: 24px;
        /*color: #406da3;*/
        color: #518dd4;
        max-width: 900px;
    }

    .question .pinyin {
        /*font-size: 28px;*/
        /*color: #406da3;*/
        color: #518dd4;
        max-width: 900px;
        opacity: 0;
    }

    .question .pinyin.delay {
        animation: fadeInBlur 1s forwards ease-in;
        /*animation-delay: 5s;*/
    }

    .question .tooltip {
        color: red;
        font-size: 20px;
    }

    .arrow {
        width: 48px;
        height: 76px;
    }

    @keyframes fadeInBlur {
        from {
            opacity: 0;
            filter: blur(5px);
        }
        to {
            opacity: 1;
            filter: blur(0);
        }
    }

    .symbol-list {
        list-style: none;
        display: inline-block;
    }

    .list-complete-item {
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }
    .list-complete-enter,
    .list-complete-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }

    @media (max-width: 1370px) {
        .question .symbols,
        .question .symbols.show{
            font-size: 80px;
        }

        /* Main symbols (chinese chars)*/
        .question .symbols.small,
        .question .symbols.smaller {
            font-size: 25px;
        }

        .pinyin.show {
            font-size: 30px;
        }

        /* pinyin on slide 7 and slide 8 */
        .pinyin-no-animation.small,
        .pinyin-no-animation.smaller {
            font-size: 24px;
        }

        /* If pinyin is instead of chars */
        .pinyin.show.small,
        .pinyin.show.smaller {
            font-size: 20px;
        }

        /* If pinyin is together with chars */
        .pinyin.hide.small,
        .pinyin.hide.smaller {
            font-size: 24px;
        }

        .question {
            min-height: 200px;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 1150px) {
        .question .symbols,
        .question .symbols.show {
            font-size: 70px;
        }

        /* Main symbols (chinese chars)*/
        .question .symbols.small,
        .question .symbols.smaller {
            font-size: 22px;
        }

        .pinyin.show {
            font-size: 10px;
        }

        /* If pinyin is instead of chars */
        .pinyin.show.small,
        .pinyin.show.smaller {
            font-size: 30px;
        }

        /* If pinyin is together with chars */
        .pinyin.hide.small,
        .pinyin.hide.smaller {
            font-size: 20px;
        }

        /* pinyin on slide 7 and slide 8 */
        .pinyin-no-animation.small,
        .pinyin-no-animation.smaller {
            font-size: 20px;
        }

        .question {
            min-height: 180px;
            margin-bottom: 10px;
        }
    }
    /*========================*/
    /*========================*/
    /*========================*/
    /*========================*/


    @keyframes fadeInBlur {
        from {
            opacity: 0;
            filter: blur(5px);
        }
        to {
            opacity: 1;
            filter: blur(0);
        }
    }

    .list-complete-item {
        transition: all 1s;
        display: inline-block;
        /* margin-right: 10px; */
    }

    .move-char-left {
        position: relative;
        transform: translate(-100px);
    }
    .move-right {
        position: relative;
        /* transition: all 1s; */
        transform: translate(100px);
    }
    .invisible {
        color: white !important;
    }
    /* if add - char will zoom out */
    /* if remove - char will zoom in */
    .zoom-out {
        font-size: 1px !important;
    }

    @media (max-width: 1370px) {

        .question .symbols {
            font-size: 80px;
        }

        .symbols.hide.smaller,
        .symbols.hide.small,
        .symbols.hide {
            animation: fadeInBlur 1s both;
            font-size: 0; /*was !imp*/
            transition: all 1s;
        }

        .question {
            min-height: 200px;
        }

        .pinyin.show {
            font-size: 80px;
        }

        .move-char-left {
            transform: translate(-90px);
        }

        .move-right {
            transform: translate(90px);
        }
    }

    @media (max-width: 1150px) {
        .question .symbols {
            font-size: 70px;
        }

        .pinyin.show {
            font-size: 70px;
        }

        .symbols.hide.smaller,
        .symbols.hide.small,
        .symbols.hide {
            animation: fadeInBlur 1s both;
            font-size: 0; /*was !imp*/
            transition: all 1s;
        }

        .move-char-left {
            transform: translate(-80px);
        }

        .move-right {
            transform: translate(80px);
        }
    }
</style>