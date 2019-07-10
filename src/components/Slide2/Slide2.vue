<template>
    <div class="main">
        <MenuBlock />
        <TimerBlock />
        <QuestionBlock :skipCharacters="skipCharacters" :data="questions.question" :traditional="traditionalCharset"/>
        <AnswerBlock :data="questions.answers" />
        <SettingsBlock :show="showSettings" @skipChars="skipCharsHandler" @traditionalCharset="traditionalCharsetHandler"/>
    </div>
</template>

<script>
    import QuestionBlock from '../QuestionBlockSlide2.vue';
    import AnswerBlock from '../AnswerBlock.vue';
    import MenuBlock from '../MenuBlock.vue';
    import SettingsBlock from '../SettingsBlock.vue';
    import TimerBlock from '../TimerBlock.vue'

    import slideWrong from '../../data/slides/slide2';
    import slideRight from '../../data/slides/slide2-right';


    //const questions = [slide];

    export default {
        name: 'Slide2',
        components: {
            AnswerBlock,
            QuestionBlock,
            TimerBlock,
            MenuBlock,
            SettingsBlock,
        },
        data: () => ({
            showSettings: false,
            skipCharacters: false,
            traditionalCharset: false,
            questions: slideRight,

        }),
        methods: {
            skipCharsHandler() {
                this.skipCharacters = !this.skipCharacters;
            },
            traditionalCharsetHandler() {
                this.traditionalCharset = !this.traditionalCharset;
            }
        },
        computed: {
            wasErrorsOnPrevSlide: function() {               
                return this.$store.state.timeIsOut || this.$store.state.numOfWrongAnswers === 2;
            }
        },
        mounted: function() {
            this.$store.commit('clearDataBeforeSlideStarts');
        },
        created: function() {
            if (this.wasErrorsOnPrevSlide) {
                this.questions = slideWrong;
            }
            setTimeout(() => {
                this.showSettings = true;
            },5000);
        }
    };
</script>

<style>
</style>
