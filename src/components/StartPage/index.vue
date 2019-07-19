<template>
  <ModalWrapper class="start" tranparent>
    <div class="title-email-sent">
      Hello! Please, press the
      <br />button to begin the test!
    </div>
    <div class="small">{{log}}</div>
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
    log: '',
  }),
  methods: {
    startTestHandler() {
      console.log('Audio:',this.audio);

      if (this.audio) {
        this.audio.play();
        console.log('OK');
      } else {
        console.log('Have no audio');
      }

      this.$store.commit("nextSlide");
      setTimeout(() => {
        
      }, 3000);
    }
  },
  mounted: function() {
    //const audio = document.getElementById("audioPlayerIntro");
    //this.audio = audio;
    let audio = new Audio(require(`../../assets/audio/common/gong.mp3`));

    audio.addEventListener('canplaythrough', (event) => {
      this.audio = audio;
      this.log += 'TROUGH\n';
    });

    audio.addEventListener('canplay', (event) => {
      this.audio = audio;
      this.log += 'CANPLAY\n';
    });

    audio.oncanplaythrough = () => {
      this.audio = audio;
      this.log += 'Done loading\n';
    };

    audio.oncanplay = (event) => {
      this.audio = audio;
      this.log += 'can play\n';
    };

    //audio.type = 'audio/mpeg';
    //audio.src = require(`../../assets/audio/common/gong.mp3`);

    console.log('Mounted 4:',audio);
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
.start .small {
  font-size: 14px;
}

.spacer {
  height: 50px;
}
</style>
