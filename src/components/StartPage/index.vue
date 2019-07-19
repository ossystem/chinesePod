<template>
  <ModalWrapper class="start" tranparent>
    <div class="title-email-sent">
      Hello! Please, press the
      <br />button to begin the test!
    </div>
    <div class="spacer"></div>
    <div class="button-try" @click="startTestHandler" tabindex="1">Start</div>
  </ModalWrapper>
</template>


<script>
import ModalWrapper from "../ModalWrapper";
import { setTimeout } from "timers";

export default {
  name: "FinalPage",
  components: {
    ModalWrapper
  },
  data: () => ({
    audio: null,
  }),
  methods: {
    startTestHandler() {
      if (this.audio) {
        this.audio.play();
      }
      this.$store.commit("nextSlide");
      setTimeout(() => {
        
      }, 3000);
    }
  },
  mounted: function() {
    const audio = document.getElementById("audioPlayerIntro");
    audio.addEventListener("canplay", () => {
      this.audio = audio;
    });

    audio.src = require(`../../assets/audio/common/gong.mp3`);
  }
};
</script>

<style scoped>
.start {
  text-align: center;
  background: url("../../assets/images/start/wall.jpg") no-repeat;
  background-size: cover;
  transition: all 0.5s ease;
}

.spacer {
  height: 50px;
}
</style>
