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
            <div class="button-try" @click="clickOkButton">Ok</div>
        </div>
    </div>
</template>

<script>
    import ModalWrapper from './ModalWrapper';
    import Confucius from './Confucius';

    export default {
        components: {
            Confucius,
            ModalWrapper
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
    }

    .where input {
        width: 70%;
        height: 30px;
        font-size: 24px;
        border-radius: 30px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .spacer {
        height: 20px;
    }
    .disabled {
        background: gray;
    }
</style>


