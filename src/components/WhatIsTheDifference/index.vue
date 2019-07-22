<template>
    <ModalWrapper class="explanation">
      <div>What is the differnce?</div> 
      <div class='small-text'>Here should be a meaningful explanation about the difference between simplified and traditional characters in China.</div>
    <div class="spacer"></div>
    <div class="button-try" @click="closeHandler" tabindex="1">Ok</div>      
      <audio id="audioPlayer"></audio>
    </ModalWrapper>    
</template>

<script>
import ModalWrapper from "../ModalWrapper";

export default {
    components: {
        ModalWrapper
    },
    methods: {
        closeHandler() {
            this.$store.commit('whatIsTheDiffrence',false);
        }
    },
    mounted: function() {
    const audio = document.getElementById("audioPlayer");
    audio.addEventListener("canplaythrough", () => {
      audio.play();
    });

    audio.src = require(`../../assets/audio/common/what-is-the-difference.mp3`);
    autio.load();
    }    
}
</script>

<style scoped>
.explanation {
  text-align: center;
}
.explanation .spacer {
    height: 50px;
}

.explanation .small-text {
  font-size: 16px;
    padding: 10px;
    max-width: 450px;
}
</style>
