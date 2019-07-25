<template>
  <div></div>
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
    this.sounds.forEach((element, i) => {
      const index = ++i;
      const audio = document.getElementById("soundPlayer" + index);

      audio.addEventListener('canplay', () => {
        this.soundsLoaded.push({ index, audio });

        // we have loaded all sounds
        if (this.soundsLoaded.length === this.sounds.length) {
          // sort sounds by index because they me be loaded
          // in different order (usually by size...)         
          this.soundsLoaded.sort((a1, a2) => {
            return a1.index - a2.index;
          });

          this.$emit("soundsReady", this.soundsLoaded);
        }
      });

      const currentSlide = this.$store.state.currentSlide;
      const wrong = this.isWrong ? "wrong/" : "";
      audio.src = require(`../assets/audio/slide${currentSlide}/${wrong}answers/a${index}.mp3`);
      audio.load();
    });
  }
};
</script>


