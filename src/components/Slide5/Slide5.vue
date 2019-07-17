<template>
    <SlideWrapper :data="data" :slide="5"/>
</template>

<script>
    import SlideWrapper from '../SlideWrapper';

    import slide from '../../data/slides/slide5';

    export default {
        name: 'Slide5',
        components: {
            SlideWrapper
        },
        data: () => ({
            data: slide,
        }),
    };
</script>