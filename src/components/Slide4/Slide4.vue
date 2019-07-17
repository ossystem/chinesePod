<template>
    <SlideWrapper :data="data" :slide="4"/>
</template>

<script>
    import SlideWrapper from '../SlideWrapper';

    import slide from '../../data/slides/slide4';

    export default {
        name: 'Slide4',
        components: {
            SlideWrapper
        },
        data: () => ({
            data: slide,
        }),
    };
</script>