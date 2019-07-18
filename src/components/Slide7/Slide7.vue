<template>
    <SlideWrapper :data="data" :slide="7"/>
</template>

<script>
    import SlideWrapper from '../SlideWrapper';
    import slide from '../../data/slides/slide7';

    export default {
        name: 'Slide6',
        components: {
            SlideWrapper
        },
        data: () => ({
            data: slide,
        }),
    };
</script>