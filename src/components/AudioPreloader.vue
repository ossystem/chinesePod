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
    sounds: Array
  },
  mounted: function() {
    console.log("Preloader");
    this.sounds.forEach((element, i) => {
      const index = i + 1;
      const audio = document.getElementById("soundPlayer" + index);

      audio.addEventListener("canplay", () => {
        this.soundsLoaded.push({ index, audio });

        // we have loaded all sounds
        if (this.soundsLoaded.length === this.sounds.length) {
          console.log("all sounds:", this.soundsLoaded);
        }
        audio.play();
      });

      audio.src = require(`../assets/audio/slide${index}/answers/a${index}.mp3`);
    });
  }
};
</script>
<style>
</style>


