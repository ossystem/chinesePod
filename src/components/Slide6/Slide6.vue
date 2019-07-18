<template>
    <SlideWrapper :data="data" :slide="6"/>
</template>

<script>
    import SlideWrapper from '../SlideWrapper';
    import slide from '../../data/slides/slide6';

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