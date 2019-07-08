<template>
    <section class="question">
        <!--        <div class="arrow left"></div>-->
        <div class="question-wrapper">
            <div class="text">{{data.title}}</div>

            <div class="symbols" :class="{hide:skipCharacters,show:!skipCharacters}">
<span :id="'char'+index" v-for="(item,index) in title" :key="index" class="list-complete-item">
      {{item === '_' ? '' : item}}    
    </span>
            </div>

            <div class="pinyin" :class="{hide:!skipCharacters,show:skipCharacters}">{{pinyin}}</div>
        </div>
        <!--        <div class="arrow right"></div>-->

    </section>
</template>

<script>
    import { setTimeout } from 'timers';

    export default {
        name: 'QuestionBlock',
        data: () => ({
            charsPart: '',
            title: '',
            titles: [],
            titleIndex: 0
        }),
        props: {
            skipCharacters: {
                default: false,
                type: Boolean
            },
            data: Object,
            traditional: false
        },
        watch: {
            traditional: function () {
                const word = this.traditional ? this.data.charsTD : this.data.chars;

                this.charsPart = '';
                let time = 100;
                word.split('').forEach((char) => {
                    setTimeout(() => {
                        this.charsPart += char;
                    }, time);
                    time += 50;
                });
            }
        },
        mounted: function () {
            this.charsPart = this.data.chars;
            this.title = this.data.chars;

            console.log(this.data);
            if (this.data.animation) {
                this.titles = this.data.animation;
                setTimeout(this.changeTitle, this.data.animation[0].delay);
            }
        },
        methods: {
            getCharById (id) {
                return document.getElementById(id);
            },
            changeTitle () {
                //this.title = this.titles[this.titleIndex].chars;
                this.titleIndex = (this.titleIndex + 1) % this.titles.length;
                console.log('tab index:', this.titleIndex);
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

                console.log('change title to:', this.title);

                if (this.titleIndex) {
                    setTimeout(this.changeTitle, this.titles[this.titleIndex].delay);
                }
            }
        },
        computed: {
            chars: function () {
                return this.traditional ? this.data.charsTD : this.data.chars;
            },
            pinyin: function () {
                return this.traditional ? this.data.pinyinTD : this.data.pinyin;
            }
        }
    };
</script>

<style scoped>
    .question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #384c63;
        height: 300px;
        /*margin-bottom: 60px;*/
    }

    .question-wrapper {
        text-align: center;
    }

    .question .text {
        font-size: 24px;
        color: #fff;
    }

    .symbols.hide {
        animation: fadeInBlur 1s both;
        font-size: 0 !important;
        transition: all 1s;
    }

    .symbols.show {
        animation: fadeInBlur 1s both;
        font-size: 90px !important;
        transition: all 1s;
    }

    .pinyin.show {
        font-size: 90px !important;
        color: #fff !important;
        /*animation: fadeInBlur 1s both;*/
        transition: all 1s;
    }

    .pinyin.hide {
        font-size: 24px !important;
        /*animation: fadeInBlur 1s both;*/
        transition: all 1s;
    }

    .question .symbols {
        font-size: 90px;
        color: #fff;
    }

    .question .pinyin {
        font-size: 28px;
        color: #406da3;
        animation: fadeInBlur 1s both ease-in;
        animation-delay: 5s;
    }

    .arrow {
        width: 48px;
        height: 76px;
    }

    .arrow.left {
        background: url('../assets/images/icons/arrow-left.png');
        margin-left: 100px;
    }

    .arrow.right {
        background: url('../assets/images/icons/arrow-right.png');
        margin-right: 100px;
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
        /* margin-right: 10px; */
    }
    .list-complete-enter, .list-complete-leave-to
        /* .list-complete-leave-active до версии 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }

    .char1 {position: relative;}
    .move-char-left {
        position: relative;
        transform: translate(-90px);
    }
    .move-right {
        position: relative;
        /* transition: all 1s; */
        transform: translate(90px);

    }
    .invisible {
        color: #384c63 !important;
    }
    /* if add - char will zoom out */
    /* if remove - char will zoom in */
    .zoom-out {
        font-size: 1px !important;
    }

</style>