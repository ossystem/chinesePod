<template>
    <section>
    <div class="answers">
        <SingleAnswerBlock class="anim aa1" variant="1" :answer="data[0]" :index="1"/>
        <SingleAnswerBlock class="anim aa2" variant="2" :answer="data[1]" :index="2"/>
        <SingleAnswerBlock class="anim aa3" variant="3" :answer="data[2]" :index="3"/>
        <SingleAnswerBlock class="anim aa4" variant="4" :answer="data[3]" :index="4"/>
    </div>
        <div class="bottom-spacer"></div>
    </section>
</template>

<script>
    import SingleAnswerBlock from './SingleAnswerBlock';

    export default {
        components: {
            SingleAnswerBlock,
        },
        name: 'AnswerBlock',
        props: {
            data: Array,
            showWrongAnswer: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({})
    };
</script>

<style scoped>
    .answers {
        display: flex;
        position: relative;
        /*flex-direction: column;*/
        align-items: center;
        justify-content: center;
        color: #fff;
        z-index: 2;
    }

    .bottom-spacer {
        height: 40px;
    }

    .anim {
        animation: fadeInLeft 1s ease-in-out both;
    }

    .anim.aa1 {
        animation-delay: 1s;
        z-index: 7;
    }
    .anim.aa2 {
        animation-delay: 2s;
        z-index: 6;
    }
    .anim.aa3 {
        animation-delay: 3s;
        z-index: 5;
    }
    .anim.aa4 {
        animation-delay: 4s;
        z-index: 4;
    }


    @keyframes fadeInLeft {
        from {
            opacity: 0;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @media (max-width: 1370px) {
        .answers {
            margin-bottom: 0px;
        }
    }

</style>