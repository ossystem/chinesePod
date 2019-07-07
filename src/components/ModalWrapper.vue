<template>
        <div class="modal-fader-end">
            <div class="modal-popup">
               <slot></slot>
            </div>
        </div>
</template>

<script>
export default {
    
}
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
        height: 300px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-weight: bold;
        font-size: 44px;
        color: #9fc6f4;

        /*margin: auto;*/
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);


        background: #384c63;
        border-radius: 30px;
        /*z-index: 5;*/
    }
</style>


