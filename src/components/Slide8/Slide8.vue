<template>
    <div class="main">
        <FinalPage v-if="$store.state.final"/>
        <SlideWrapper :class="{blurBg:$store.state.final}" :data="data" :slide="8"/>
    </div>
</template>

<script>
    import FinalPage from '../FinalPage/FinalPage.vue';
    import SlideWrapper from '../SlideWrapper';

    import slide from '../../data/slides/slide8';

    export default {
        name: 'Slide8',
        components: {
            SlideWrapper,
            FinalPage
        },
        data: () => ({
            data: slide
        }),
    };
</script>

<style scoped>
    .blurBg {
        filter: blur(4px);
        transition: all 1s;
    }
</style>
