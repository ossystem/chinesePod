const QuestionBlockMix = {
  methods: {
    applyMuteAudio() {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === "enableSound") {
          const audio = document.getElementById("audioIntro");
          audio.muted = !this.$store.state.enableSound;
        }
      });
    },
    initAndStartQuestion(subtitles) {
      const audio = document.getElementById("audioIntro");
      audio.addEventListener("canplay", () => {
        audio.play();
      });

      const listener = () => {
        if (!this.removeEndedListener) {
          setTimeout(() => {
            const wrong = this.isWrong ? "wrong/" : "";

            audio.src = require(`../assets/audio/slide${
              this.$store.state.currentSlide
            }/${wrong}question.mp3`);

            // =============
            if (this.data.syncData) {
              audio.addEventListener("timeupdate", () => {
                this.data.syncData.forEach((element, index) => {
                  if (
                    audio.currentTime >= element.start &&
                    audio.currentTime <= element.end
                  ) {
                    subtitles.children[index].style.background = "yellow";
                  } else {
                    subtitles.children[index].style.background = "transparent";
                  }
                });
              });
            }
            //==============
          }, 200);
        } else {
          // we are here when the question (chinese) ends
          // make small delay and start answers block
          setTimeout(() => {
            this.$emit("questionEnded");
          }, 200);
        }

        if (this.removeEndedListener) {
          audio.removeEventListener("ended", listener);
        }

        this.removeEndedListener = true;
      };

      audio.addEventListener("ended", listener);

      //const currentSlide = this.$store.state.currentSlide;
      //audio.src = require(`../assets/audio/slide${currentSlide}/answers/a${index}.mp3`);
      audio.src = require(`../assets/audio/common/intro.mp3`);
    }
  }
};

export default QuestionBlockMix;
