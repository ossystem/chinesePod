<template>
    <section class="menu-block">
        <div class="controls-group">
            <div class="menu"></div>
            <label class="checkbox"><input type="checkbox" v-model="disableSound" @click="soundClicked" class="visually-hidden">
                <span class="checkbox__text"></span>
            </label>
        </div>
        <div class="step">
            {{currentSlide}}
            <span class="rest">/8</span>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'MenuBlock',
        data: () => ({
           disableSound: false
        }),
        methods: {
            soundClicked() {
                this.$store.commit('enableSound',this.disableSound);
            }
        },
        mounted: function() {
            this.disableSound = !this.$store.state.enableSound;
        },
        computed: {
            currentSlide: function () {
                return this.$store.state.currentSlide;
            }
        }
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
        padding-left: 50px;
        padding-right: 50px;
    }
    .menu {
        width: 48px;
        height: 48px;
        background: url("../assets/images/icons/menu.png");
        margin-right: 40px;
    }

    .menu-block .controls-group {
        display: flex;
    }

    .checkbox__text {
        position: relative;
        cursor: pointer;
    }

    .checkbox__text:before {
        content: url("../assets/images/icons/sound-on.png");
        transition: 0.2s;
    }

    .checkbox input:checked + .checkbox__text:before {
        content: url("../assets/images/icons/sound-off.png");
    }
    .checkbox input:checked + .checkbox__text:after {
        content: '';
    }

    .menu:hover {
        cursor: pointer;
        /*transform: scale(1.05);*/
        animation: rotateGear 2s infinite linear;

    }

    @keyframes rotateGear {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
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
        color: #406da3;
        font-size: 24px;
        font-weight: normal;
    }

    @media (max-width: 1370px) {
        .menu-block {
            height: 70px;
        }

        .step {
            width: 110px;
            height: 110px;
            border-radius: 50%;

            line-height: 110px;
            font-size: 60px;
        }
    }
</style>