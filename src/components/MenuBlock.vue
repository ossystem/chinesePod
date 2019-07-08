<template>
    <section class="menu-block">
        <div class="menu"></div>
        <div class="step">{{$store.state.currentSlide}}<span class="rest">/6</span></div>
    </section>
</template>

<script>
    export default {
        name: 'MenuBlock'
    };
</script>

<style scoped>
.menu-block {
    display: flex;
    align-items: center;
    height: 80px;
    max-width: 900px;
    justify-content: space-between;
    margin: auto;
}
    .menu {
        width: 48px;
        height: 48px;
        background: url('../assets/images/icons/menu.png');
    }

    .step {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: #304155;
        color: white;
        line-height: 120px;
        text-align: center;
        font-size: 64px;
        font-weight: bold;
    }
    .rest {
        color: #406DA3;
        font-size: 24px;
        font-weight: normal;
    }
</style>