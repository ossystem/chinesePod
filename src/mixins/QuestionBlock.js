const QuestionBlockMix = {
    data: () => ({
        showPinyin: false,
    }),
    mounted: function() {
        this.showPinyin = this.$store.state.skipChars;
    },
    methods: {
        applyMuteAudio () {
            this.$store.subscribe((mutation, state) => {
                if (mutation.type === 'enableSound') {
                    const audio = document.getElementById('audioIntro');
                    audio.muted = !this.$store.state.enableSound;
                }
            });
        },
        selectSomeWords(subtitles, start, end) {

            for (let i=start; i <= end;i++) {
                subtitles.children[i].style.background = 'yellow';
            }

        },
        initAndStartQuestion (subtitles) {
            const audio = document.getElementById('audioIntro');
            audio.addEventListener('canplay', () => {

                if (!this.$store.state.enableSound) {
                    audio.muted = true;
                }

                audio.play();
            });

            const listener = () => {
                if (!this.removeEndedListener) {
                    setTimeout(() => {
                        const wrong = this.isWrong ? 'wrong/' : '';

                        if (!this.data.skipTextSpeech) {
                            audio.src = require(`../assets/audio/slide${this.$store.state.currentSlide}/${wrong}question.mp3`);
                        } else {
                            // we have no text for speech - slides 7, 8
                            // so call answers block
                            this.showPinyin = true;
                            setTimeout(() => {
                                this.$emit('questionEnded');
                            }, 200);
                        }

                        if (this.data.syncData) {
                            audio.addEventListener('timeupdate', () => {
                                this.data.syncData.forEach((element, index) => {
                                    if (
                                        audio.currentTime >= element.start &&
                                        audio.currentTime <= element.end
                                    ) {
                                        subtitles.children[index].style.background = 'yellow';
                                    } else {
                                        subtitles.children[index].style.background = 'transparent';
                                    }
                                });
                            });
                        }
                    }, 200);
                } else {
                    // we are here when the question (chinese) ends
                    // make small delay and start answers block
                    setTimeout(() => {
                        this.showPinyin = true;
                        this.$emit('questionEnded');
                    }, 200);
                }

                if (this.removeEndedListener) {
                    audio.removeEventListener('ended', listener);
                }

                this.removeEndedListener = true;
            };

            audio.addEventListener('ended', listener);

            //const currentSlide = this.$store.state.currentSlide;
            //audio.src = require(`../assets/audio/slide${currentSlide}/answers/a${index}.mp3`);
            if (this.data.intro) {
                audio.src = require(`../assets/audio/${this.data.intro}`);
            } else {
                audio.src = require(`../assets/audio/common/intro.mp3`);
            }
        }
    }
};

export default QuestionBlockMix;
