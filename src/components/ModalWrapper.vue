<template>
    <div class="modal-fader-end">
        <div class="modal-popup">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {};
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


        background: #fff;
        border-radius: 30px;
        /*z-index: 5;*/
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
        .modal-popup {
               max-height: 500px;
        }
    }
</style>
