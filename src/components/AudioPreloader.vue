<template>
  <div>
    <audio
      v-for="index in sounds.length"
      :id="'soundPlayer'+index"
      :key="'soundPlayer'+index+$store.state.currentSlide"
    >{{index}}</audio>
  </div>
</template>
<script>
export default {
  data: () => ({
    soundsLoaded: []
  }),
  props: {
    sounds: Array,
    isWrong: {
      type: Boolean,
      default: false
    }
  },
  mounted: function() {
    //console.log("Preloader");
    this.sounds.forEach((element, i) => {
      const index = ++i;
      const audio = document.getElementById("soundPlayer" + index);

      audio.addEventListener("canplay", () => {
        this.soundsLoaded.push({ index, audio });

        // we have loaded all sounds
        if (this.soundsLoaded.length === this.sounds.length) {
          //console.log("all sounds:", this.soundsLoaded);
          this.$emit('soundsReady',this.soundsLoaded);
        }
        //audio.play();
      });

      const currentSlide = this.$store.state.currentSlide;
      const wrong = this.isWrong ? 'wrong/' : '';
      audio.src = require(`../assets/audio/slide${currentSlide}/${wrong}answers/a${index}.mp3`);
    });
  }
};
</script>
<style>
</style>


