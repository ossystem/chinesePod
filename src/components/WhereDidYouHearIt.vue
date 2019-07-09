<template>
    <div class="where">
        <div v-if="confucius">
            <div>Confucius...</div>
            <Confucius/>
        </div>
        <div v-else>
            <div class="modal-text">If this sounds familiar to you, where did you hear this phrase:</div>
            <div class="spacer"></div>
            <div><label for=""><input v-model="usersAnswer" type="text"></label></div>
            <div class="spacer"></div>
            <div tabindex="0" class="button-try" @click="clickOkButton">Ok</div>
        </div>
    </div>
</template>

<script>
    import Confucius from './Confucius';

    export default {
        components: {
            Confucius,
        },
        data: () => ({
            confucius: false,
            usersAnswer: '',
        }),
        methods: {
            clickOkButton() {
                // empty answer => show slide show
                if (this.usersAnswer.trim() === '' ) {
                    this.confucius = true;
                } else {
                    // go to next slide
                    this.$store.dispatch('checkForNextSlide');
                }
            }
        },
        mounted: function () {
            setTimeout(() => {
                if (this.usersAnswer.trim() === '') {
                    this.confucius = true;
                }
            }, 10000);
        }
    };
</script>
<style scoped>
    .where {
        text-align: center;
    }

    .modal-text {
        font-size: 28px;
        font-weight: normal;
    }

    .where input {
        width: 70%;
        height: 60px;
        font-size: 24px;
        border-radius: 60px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        border: 0 solid transparent;
        outline: none;
        background: #304155;
        color: #9FC6F4;
    }

    .where input:focus {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), 0 0 4px #9FC6F4;
    }
    .spacer {
        height: 20px;
    }
    .disabled {
        background: gray;
    }
</style>


