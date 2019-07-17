<template>
    <SlideWrapper :data="data" :slide="3"/>
</template>

<script>
    import SlideWrapper from '../SlideWrapper';

    import slide from '../../data/slides/slide3';

    export default {
        name: 'Slide3',
        components: {
            SlideWrapper
        },
        data: () => ({
            data: slide,
        }),
    };
</script>