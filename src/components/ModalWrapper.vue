<template>
    <div class="modal-fader-end">
        <div class="modal-popup" :class="{transparent:tranparent}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tranparent: {
                type: Boolean,
                default: false,
            }
        }
    };
</script>

<style>
    .modal-fader-end {
        position: fixed;
        z-index: 5;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
    }

    .modal-popup {
        position: absolute;
        display: flex;
        width: 900px;
        min-height: 300px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-weight: bold;
        font-size: 44px;
        color: #384c63;

        /*margin: auto;*/
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);   
        background: white;     
        /* opacity: 0.5; */
        border-radius: 30px;
        /*z-index: 5;*/
    }

    .modal-popup.transparent {
        background: rgba(255,255,255,0.8);
    }

    .modal-popup a:visited,
    .modal-popup a {
        color: #9fc6f4;
    }

    @media (max-width: 1370px) {
        .modal-popup {
            font-weight: normal;
            font-size: 36px;
            max-width: 650px;
        }
    }

    @media (max-width: 1150px) {
        /*.modal-popup {*/
        /*       !*max-height: 500px;*!*/
        /*}*/
    }

    @media (max-width: 770px) {
        .modal-popup {
            font-size: 36px;
            max-width: 84vw;
        }
    }

    @media (max-width: 580px) {
        .modal-popup {
            font-size: 32px;
            max-width: 84vw;
        }
    }

    @media (max-width: 420px) {
        .modal-popup {
            font-size: 24px;
            max-width: 84vw;
        }
    }

    @media (max-width: 310px) {
        .modal-popup {
            font-size: 20px;
            max-width: 84vw;
        }
    }

</style>
