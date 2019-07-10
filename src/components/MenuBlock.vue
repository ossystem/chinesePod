<template>
    <section class="menu-wrap">
    <div class="menu-block">
        <div class="controls-group">
            <div class="menu"></div>
            <div class="step">
                {{currentSlide}}
                <span class="rest">/8</span>
            </div>
        </div>
        <label class="checkbox"><input type="checkbox" v-model="disableSound" @click="soundClicked" class="visually-hidden">
            <span class="checkbox__text"></span>
        </label>

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
    .menu-wrap {
        position: relative;
        z-index: 10;
        /*box-shadow: 0 50px 50px rgba(0, 0, 0, 0.15);*/
        background: #304155;
    }
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
        position: relative;
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
        position: relative;
        /*width: 120px;*/
        /*height: 120px;*/
        /*border-radius: 50%;*/
        /*background: #304155;*/
        top: 9px;

        color: white;
        /*text-align: center;*/
        font-size: 64px;
        line-height: 35px;

        font-weight: bold;
    }
    .rest {
        position: relative;
        color: white;
        font-size: 24px;
        font-weight: normal;
        left: -10px;
    }

    @media (max-width: 1370px) {
        .menu-block {
            height: 70px;
        }

        .step {
            /*width: 110px;*/
            /*height: 110px;*/
            /*border-radius: 50%;*/

            /*line-height: 110px;*/
            font-size: 50px;
        }
    }
</style>