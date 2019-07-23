<template>
    <ModalWrapper class="wrapper">
        <div class="title">Test ends for you now!</div>
        <div class="text"><a href="https://chinesepod.com">Click to take some mandarin and</a></div>
        <div>come back soon!</div>
    </ModalWrapper>
</template>

<script>
    import ModalWrapper from "../../components/ModalWrapper";

    export default {
        name: 'index.vue',
        components: {
            ModalWrapper
        }
    };
</script>

<style scoped>
    .wrapper {
        text-align: center;
    }

@media (max-width: 768px) {
    .wrapper {
        font-size: 30px;
    }
    .text {
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>