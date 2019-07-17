<template>
    <SlideWrapper :data="data" :slide="2"/>
</template>

<script>
    import SlideWrapper from '../SlideWrapper';

    import slideWrong from '../../data/slides/slide2';
    import slideRight from '../../data/slides/slide2-right';

    export default {
        name: 'Slide3',
        components: {
            SlideWrapper
        },
        data: () => ({
            data: slideRight,
        }),
        computed: {
            wasErrorsOnPrevSlide: function() {
                return this.$store.state.timeIsOut || this.$store.state.numOfWrongAnswers === 2;
            }
        },
        created: function() {
            if (this.wasErrorsOnPrevSlide) {
                this.data = slideWrong;
            }
        }
    };
</script>