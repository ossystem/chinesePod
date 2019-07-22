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

export default {
  name: "FinalPage",
  components: {
    ModalWrapper
  },
  data: () => ({
    audio: null,   
    lockStartButton: false,
  }),
  methods: {
    startTestHandler() {
      if (!this.lockStartButton) {

        if (this.audio) {
          this.audio.play();        
        } else {         
        }
        
        this.$store.commit("nextSlide");
        setTimeout(() => {

        }, 3000);

        this.lockStartButton = true;
      }
    }
  },
  mounted: function() {
    //const audio = document.getElementById("audioPlayerIntro");
    //this.audio = audio;
    this.audio = new Audio(require(`../../assets/audio/common/gong.mp3`));
    this.$store.commit('audio',new Audio());

    // this.audio.addEventListener('canplaythrough', (event) => {
    //   //this.audio = audio;
    //   this.log += 'TROUGH\n';
    // });

    this.audio.oncanplaythrough = () => {         
    };

    this.audio.onerror = function(error) {
      alert(error);
    };

    this.audio.load();
   
    //audio.type = 'audio/mpeg';
    //audio.src = require(`../../assets/audio/common/gong.mp3`);

    console.log('Mounted 4:',this.audio);
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
