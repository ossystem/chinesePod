<template>
    <div>

        <section v-if="showSettings" class="question-mob">
            <div class="left"><span class="traditional" @click="traditionalHandler">Click <span
                    class="my-underline">here</span> if you are interested in learning <span
                    class="my-bold">{{traditionalLabel}}</span> characters instead of <span class="my-bold">{{simplifiedLabel}}</span> ones.</span>
                <span class="my-link" @click="whatIsTheDifferenceHandler">(What is the difference?)</span></div>
            <div  class="right">
                <label class="checkbox">
                    <input type="checkbox" v-model="skipChars" class="visually-hidden">
                    <span class="checkbox__text">I do not want to learn</span>
                    <span class="checkbox__text__line">Characters at this point</span>
                </label>
            </div>
        </section>
        <section class="question">
            <div v-if="showSettings" class="left"><span class="traditional" @click="traditionalHandler">Click <span
                    class="my-underline">here</span> if you are interested in learning <span
                    class="my-bold">{{traditionalLabel}}</span> characters instead of <span class="my-bold">{{simplifiedLabel}}</span> ones.</span>
                <span class="my-link" @click="whatIsTheDifferenceHandler">(What is the difference?)</span></div>

            <div class="question-wrapper">
                <div
                        :style="{opacity: showTitle}"
                        class="text"
                        :class="{'text-green':changeTitleColor}"
                        v-html="data.titleTD ? data.titleTD : data.title"
                ></div>
                <div
                        v-if="haveSyncText && !skipCharacters"
                        id="subtitles"
                        class="symbols"
                        :class="{hide:skipCharacters,show:!skipCharacters && !skipAnimation, small: isSmall, smaller: isSmaller}"
                ></div>
                <div
                        v-else
                        v-html="chars"
                        class="symbols"
                        :class="{hide:skipCharacters,show:!skipCharacters && !skipAnimation, small: isSmall, smaller: isSmaller}"
                ></div>
                <div
                        v-if="haveSyncText && skipCharacters"
                        id="subtitles"
                        class="pinyin"
                        :class="{hide:!skipCharacters,show:skipCharacters,delay:showPinyin,small: isSmall, smaller: isSmaller}"
                ></div>
                <div v-else>
                    <div v-if="skipAnimation" class="pinyin-no-animation"
                         :class="{show: skipCharacters,small: isSmall, smaller: isSmaller}">{{pinyin}}
                    </div>
                    <div
                            v-else
                            class="pinyin"
                            :class="{hide:!skipCharacters,show:skipCharacters,delay:showPinyin,small: isSmall, smaller: isSmaller}"
                    >{{pinyin}}
                    </div>
                </div>
                <!--            <div class="pinyin" :class="{hide:!skipCharacters,show:skipCharacters}">AAA</div>-->
            </div>
            <transition name="fade">
                <div v-show="showSettings" class="right">
                    <label class="checkbox">
                        <input type="checkbox" v-model="skipChars" class="visually-hidden">
                        <span class="checkbox__text">I do not want to learn</span>
                        <span class="checkbox__text__line">Characters at this point</span>
                    </label>
                </div>
            </transition>

<!--            <audio id="audioIntro"></audio>-->
        </section>
    </div>
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
            showTitle: 0,
            subtitles: null,
            skipChars: false,
            traditionalCharset: false,
            timeOf5Seconds: false
        }),
        props: {
            skipCharacters: {
                type: Boolean,
                default: false
            },
            data: Object,
            traditional: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            skipChars: function () {
                this.$emit('skipChars');
                this.$store.commit('skipChars', this.skipChars);
            },
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
            },
            highlightSentence: function () {
                this.selectSomeWords(this.subtitles, this.highlightSentence.start, this.highlightSentence.end);
            }
        },
        mounted: function () {
            this.charsPart = this.data.chars;
            this.title = this.data.chars;

            if (this.skipAnimation > 6) {
                this.showTitle = 1;
            }

            if (this.data.animation) {
                this.titles = this.data.animation;
                setTimeout(this.changeTitle, this.data.animation[0].delay);
            }

            this.subtitles = document.getElementById('subtitles');
            if (this.haveSyncText) {
                this.createSubtitle(this.subtitles);
            }

            setTimeout(() => {
                this.initAndStartQuestion(this.subtitles);
                if (this.$store.state.currentSlide < 2) {
                    setTimeout(() => {
                        this.timeOf5Seconds = true;
                    }, 9000);
                }
            }, this.data.delay);

            this.applyMuteAudio();

            //this.selectSomeWords(subtitles, 0,11);
            //this.selectSomeWords(subtitles, 12,27);

            setTimeout(() => {
                this.showTitle = 1;
            }, this.data.delay);

        },
        methods: {
            whatIsTheDifferenceHandler () {
                this.$store.commit('whatIsTheDiffrence', true);
            },
            traditionalHandler () {
                this.$emit('traditionalCharset');
                this.traditionalCharset = !this.traditionalCharset;
                this.$store.commit('userTraditional', this.traditionalCharset);
            },
            createSubtitle (subtitles) {
                // https://www.codepunker.com/blog/sync-audio-with-text-using-javascript
                // use https://ttsmp3.com/ to generate mp3

                const syncData_TD_OR_SIMPLE = this.data.syncDataTD ? this.data.syncDataTD : this.data.syncData;
                const syncDataToUse = this.traditional ? syncData_TD_OR_SIMPLE : this.data.syncData;
                const syncData = this.skipCharacters ? this.data.syncDataPinyin : syncDataToUse;

                let element;
                for (let i = 0; i < syncData.length; i++) {
                    element = document.createElement('span');
                    element.setAttribute('id', 'c_' + i);
                    const text = syncData[i].text;
                    element.innerText = text;
                    if (text === '。') {
                        element.innerHTML += '';
                    }
                    subtitles.appendChild(element);
                }
            },
            changeTitle () {
                this.title = this.titles[this.titleIndex].chars;
                this.titleIndex = (this.titleIndex + 1) % this.titles.length;

                if (this.titleIndex) {
                    setTimeout(this.changeTitle, this.titles[this.titleIndex].delay);
                }
            }
        },
        computed: {
            traditionalLabel: function() {
                return !this.traditionalCharset ? 'traditional' : 'simplified';
            },
            simplifiedLabel: function() {
                return this.traditionalCharset ? 'traditional' : 'simplified';
            },
            showSettings: function () {
                return this.$store.state.currentSlide === 1 && this.timeOf5Seconds;
            },
            highlightSentence: function () {
                return this.$store.state.highlightSentence;
            },
            haveSyncText: function () {
                return this.data.syncData;
            },
            changeTitleColor: function () {
                return this.$store.state.currentSlide >= 6;
            },
            skipAnimation: function () {
                return this.$store.state.currentSlide > 6;
            },
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
                return this.traditional ? this.data.pinyinTD : this.data.pinyin;
            }
        }
    };
</script>

<style scoped src="./styles/questions.css">
</style>