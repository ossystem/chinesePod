<template>
    <div class="main">
        <MenuBlock />
        <QuestionBlock :skipCharacters="skipCharacters" :data="questions.question" :traditional="traditionalCharset"/>
        <TimerBlock />
        <AnswerBlock :data="questions.answers" />
        <SettingsBlock :show="showSettings" @skipChars="skipCharsHandler" @traditionalCharset="traditionalCharsetHandler"/>
    </div>
</template>

<script>
    import QuestionBlock from '../QuestionBlock.vue';
    import AnswerBlock from '../AnswerBlock.vue';
    import MenuBlock from '../MenuBlock.vue';
    import SettingsBlock from '../SettingsBlock.vue';
    import TimerBlock from '../TimerBlock.vue'

    import slide from '../../data/slides/slide2';
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
            questions: slide,

        }),
        methods: {
            skipCharsHandler() {
                this.skipCharacters = !this.skipCharacters;
            },
            traditionalCharsetHandler() {
                this.traditionalCharset = !this.traditionalCharset;
            }
        },
        mounted: function() {
            if (!this.$store.state.numOfPreviousErrors) {
                this.questions = slideRight;
            }
            setTimeout(() => {
                this.showSettings = true;
            },5000);
        }
    };
</script>

<style>
</style>
