<template>
    <SlideWrapper :data="data" :slide="1"/>
</template>

<script>
    import SlideWrapper from '../SlideWrapper';

    import slide from '../../data/slides/slide1';

    export default {
        name: 'Slide1',
        components: {
            SlideWrapper
        },
        data: () => ({
            data: slide,
        }),
    };
</script>