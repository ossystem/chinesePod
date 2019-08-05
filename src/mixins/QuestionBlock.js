const QuestionBlockMix = {
    data: () => ({
        showPinyin: false,
        audio: null,
    }),
    mounted: function() {
        this.showPinyin = this.$store.state.skipChars;
    },
    methods: {
        applyMuteAudio () {
            this.$store.subscribe((mutation) => {
                if (mutation.type === 'enableSound') {
                    //const audio = document.getElementById('audioIntro');
                    if (this.audio.muted) {
                        this.audio.muted = !this.$store.state.enableSound;
                    }
                }
            });
        },
        selectSomeWords(subtitles, start, end) {

            for (let i=start; i <= end;i++) {
                subtitles.children[i].style.background = 'yellow';
            }

        },
        initAndStartQuestion (subtitles) {
            let source = require(`../assets/audio/common/intro.mp3`);

            if (this.data.intro) {
                source = require(`../assets/audio/${this.data.intro}`);
            }

            this.audio = document.getElementById("audioPlayerQuestion");
            this.audio.src = source;

            this.audio.oncanplay = () => {
                this.audio.play();
                this.audio.pause();
            };

            this.audio.oncanplaythrough = () => {
                this.$store.commit('addLog', 'canplaythrough '+this.audio.src);

                if (!this.$store.state.enableSound) {
                    this.audio.muted = true;
                }

                this.$store.commit('addLog','play audio: ' + this.audio.src);
                this.audio.play().catch( error => {
                    this.$store.commit('addLog',error);
                });
            };

            const listener = () => {
                this.$store.commit('addLog','audio ended');
                if (!this.removeEndedListener) {
                    setTimeout(() => {
                        const wrong = this.isWrong ? 'wrong/' : '';

                        if (!this.data.skipTextSpeech) {
                            this.audio.src = require(`../assets/audio/slide${this.$store.state.currentSlide}/${wrong}question.mp3`);
                            this.audio.load();
                        } else {
                            // we have no text for speech - slides 7, 8
                            // so call answers block
                            this.showPinyin = true;
                            setTimeout(() => {
                                this.$emit('questionEnded');
                            }, 200);
                        }

                        if (this.data.syncData) {
                            const syncData_TD_OR_SIMPLE = this.data.syncDataTD ? this.data.syncDataTD : this.data.syncData;
                            const syncDataToUse = this.traditional ? syncData_TD_OR_SIMPLE : this.data.syncData;

                            const syncData = this.skipCharacters ? this.data.syncDataPinyin : syncDataToUse;
                            this.audio.addEventListener('timeupdate', () => {
                                syncData.forEach((element, index) => {
                                    if (
                                        this.audio.currentTime >= element.start &&
                                        this.audio.currentTime <= element.end
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
                    this.audio.removeEventListener('ended', listener);
                }

                this.removeEndedListener = true;
            };

            this.audio.onended = listener;

            this.audio.load();
            this.$store.commit('addLog','load: '+this.audio.src);
        }
    }
};

export default QuestionBlockMix;
