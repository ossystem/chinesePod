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
        <div class="right-controls-wrap">
            <label class="checkbox"><input type="checkbox" v-model="disableSound" @click="soundClicked" class="visually-hidden">
                <span class="checkbox__text"></span>
            </label>
            <div class="button-save">
                Save & Exit
            </div>
        </div>
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
        background: #304155;
    }
    .menu-block {
        display: flex;
        align-items: center;
        height: 80px;
        max-width: 1300px;
        justify-content: space-between;
        margin: auto;
        padding-left: 50px;
        padding-right: 50px;
    }

    .right-controls-wrap {
        display: flex;
        align-items: center;
    }

    .menu-block .button-save{
        width: 160px;
        height: 40px;

        margin-left: 50px;
        font-weight: bold;
        line-height: 40px;
        text-align: center;
        color: white;
        text-transform: uppercase;

        background: #516C8B;
        border-radius: 20px;
        cursor: pointer;
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
        top: 9px;

        color: white;
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
            font-size: 50px;
        }
    }

    @media (max-width: 550px) {
        .button-save {
            display: none;
        }

        .menu-block {
            height: 62px;
        }
    }

</style>