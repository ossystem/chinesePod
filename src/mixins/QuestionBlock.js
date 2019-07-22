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
            this.$store.subscribe((mutation, state) => {
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
            //const audio = document.getElementById('audioIntro');

            let source = require(`../assets/audio/common/intro.mp3`);

            if (this.data.intro) {
                source = require(`../assets/audio/${this.data.intro}`);
            } /*else {
                this.audio.src = require(`../assets/audio/common/intro.mp3`);
            }*/

            this.audio = new Audio(source);
            this.$store.state.audio.src = require(`../assets/audio/common/horse2.mp3`);
            this.$store.state.audio.load();
            this.$store.state.audio.play().catch( error => {
                this.$store.commit('addLog','horse2'+error);
            });

            this.audio.oncanplaythrough = () => {

                this.$store.commit('addLog','canplaythrough');

                if (!this.$store.state.enableSound) {
                    this.audio.muted = true;
                }

                this.audio.play().catch( error => {
                    this.$store.commit('addLog',error);
                });
            };

            this.audio.onerror = function(err) {
                this.$store.commit('addLog',err);
            };

            const listener = () => {
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
                            const syncData = this.skipCharacters ? this.data.syncDataPinyin : this.data.syncData;
                            this.audio.addEventListener('timeupdate', () => {
                                syncData.forEach((element, index) => {
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
                    this.audio.removeEventListener('ended', listener);
                }

                this.removeEndedListener = true;
            };

            //this.audio.addEventListener('ended', listener);
            this.audio.onended = listener;

            //const currentSlide = this.$store.state.currentSlide;
            //audio.src = require(`../assets/audio/slide${currentSlide}/answers/a${index}.mp3`);




            this.audio.load();
            this.$store.commit('addLog',this.audio.src);
            //alert(this.audio.src);
        }
    }
};

export default QuestionBlockMix;
