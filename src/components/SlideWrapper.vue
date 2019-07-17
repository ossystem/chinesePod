<template>
    <div>
        <MenuBlock />
        <TimerBlock />

        <QuestionBlock2 v-if="slide === 2" @questionEnded="questionEnded" :skipCharacters="skipCharacters" :data="data.question" :traditional="traditionalCharset" :is-wrong="data.isWrong"/>
        <QuestionBlock v-else @questionEnded="questionEnded" :skipCharacters="skipCharacters" :data="data.question" :traditional="traditionalCharset"/>

        <AnswerBlock v-show="showAnswers" :show="showAnswers" :data="data.answers" :slide="slide" :is-wrong="data.isWrong"/>
        <SettingsBlock :show="showSettings" @skipChars="skipCharsHandler" @traditionalCharset="traditionalCharsetHandler"/>
    </div>
</template>

<script>
    import QuestionBlock from './QuestionBlock.vue';
    import QuestionBlock2 from './QuestionBlockSlide2.vue';
    import AnswerBlock from './AnswerBlock.vue';
    import MenuBlock from './MenuBlock.vue';
    import SettingsBlock from './SettingsBlock.vue';
    import TimerBlock from './TimerBlock.vue';

    export default {
        name: 'SliderWrapper',
        components: {
            AnswerBlock,
            QuestionBlock,
            QuestionBlock2,
            TimerBlock,
            MenuBlock,
            SettingsBlock,
        },
        data: () => ({
            showSettings: false,
            skipCharacters: false,
            traditionalCharset: false,
            showAnswers: false,
        }),
        props: {
            data: Object,
            slide: Number
        },
        methods: {
            questionEnded() {
                this.showAnswers = true;
            },
            skipCharsHandler() {
                this.skipCharacters = !this.skipCharacters;
            },
            traditionalCharsetHandler() {
                this.traditionalCharset = !this.traditionalCharset;
            }
        },
        mounted: function() {
            this.$store.commit('clearDataBeforeSlideStarts');

            // setTimeout(() => {
            //     this.showSettings = true;
            // },5000);
        }
    };
</script>

<style scoped>

</style>