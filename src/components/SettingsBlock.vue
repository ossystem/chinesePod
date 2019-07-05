<template>
    <transition name="fade">
    <section class="settings" v-show="show">
        <div class="labels">
            <label class="checkbox"><input type="checkbox" v-model="skipCharacters"><span class="checkbox__text">I do not want to learn Characters at this point</span></label>
            <label class="checkbox"><input type="checkbox" v-model="traditionalCharset"><span class="checkbox__text">I want to learn TRADITIONAL characters instead</span></label>
        </div>
        <div class="spacer"></div>
        <div class="tip">
            <div class="question">?</div>
            <div class="spacer"></div>
            <div class="text">What is the difference, and why does it matter</div>
        </div>
    </section>
    </transition>
</template>

<script>
    export default {
        name: 'SettingsBlock',
        data: () => ({
            skipCharacters: false,
            traditionalCharset: false
        }),
        props: {
            show: Boolean,
        },
        watch: {
            skipCharacters: function () {
                this.$emit('skipChars');
            },
            traditionalCharset: function () {
                this.$emit('traditionalCharset')
            }
        }
    };
</script>

<style scoped>
    .checkbox input {
        position: absolute;
        z-index: -1;
        opacity: 0;
        margin: 10px 0 0 20px;
    }
    .checkbox__text {
        position: relative;
        /*padding: 0 0 0 60px;*/
        top: 5px;
        padding-left: 35px;
        cursor: pointer;
    }
    .checkbox__text:before {
        content: url('../assets/images/icons/check-box.png');
        position: absolute;
        top: -1px;
        left: 5px;
        transition: .2s;
    }
    .checkbox__text:after {
        content: '';
        position: absolute;
        top: -1px;
        left: 9px;
        transition: .2s;
    }
    .checkbox input:checked + .checkbox__text:before {
        content: url('../assets/images/icons/check-box.png');
    }
    .checkbox input:checked + .checkbox__text:after {
        content: url('../assets/images/icons/check.svg');
    }
    .checkbox input:focus + .checkbox__text:before {
        /*box-shadow: inset 0 2px 3px rgba(0,0,0,.2), 0 0 0 3px rgba(255,255,0,.7);*/
    }


    .settings {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .settings .labels label {
        font-size: 14px;
        /*line-height: 30px;*/
        display: block;
        margin-bottom: 12px;
        color: #9FC6F4;
    }

    .settings .labels input {
        /*width: 50px;*/
    }
    .settings .spacer {
        width: 50px;
    }

    .tip {
        display: flex;
        width: 257px;
        height: 60px;
        align-items: center;
        justify-content: center;
        background: url('../assets/images/icons/tip-background.png') right;
        text-transform: uppercase;

        color: #9fc6f4;
    }
    .tip .question {
        font-size: 48px;
        border-right: 1px solid #355D8C;
        /*border: 1px solid #355D8C;*/
        /*padding-right: 15px;*/
        padding-left: 10px;
        text-align: center;
        width: 50px;

    }

    .tip .text {
        max-width: 150px;
        font-size: 12px;
        text-decoration: underline;
        /*margin-left: 15px;*/
    }
    .tip .spacer {
        width: 10px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>