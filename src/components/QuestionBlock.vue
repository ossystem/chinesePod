<template>
    <section class="question">
        <div class="arrow left"></div>
        <div class="question-wrapper">
            <div class="text">{{data.title}}</div>
            <div class="symbols" :class="{hide:skipCharacters,show:!skipCharacters}">
                {{chars}}
            </div>
            <div class="pinyin" :class="{hide:!skipCharacters,show:skipCharacters}">{{pinyin}}</div>
        </div>
        <div class="arrow right"></div>

    </section>
</template>

<script>
    export default {
        name: 'QuestionBlock',
        data: () => ({
            charsPart: ''
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

</style>