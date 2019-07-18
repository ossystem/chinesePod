<template>
    <div>
        <div><img class='slide-img'  id='contentImage' src="" alt=""></div>
        <audio id="audioPlayer"></audio>
    </div>
</template>

<script>
    export default {
        name: 'Confucius',
        data: () => ({
            timeArray: [0, 3, 5, 7, 9, 11, 16],
            slide: 0,
            slides: [
                'confucius.jpeg',
                'index.jpeg',
                'index2.jpeg',
                'index3.jpeg',
                'index4.jpeg',
                'index5.jpeg'
            ],
            images: [],
            wasLoadedFirstImage: false,

        }),
        methods: {
            loadAllImages() {
                this.slides.forEach( (slideSrc,index) => {
                    const newImg = new Image;
                    newImg.onload = () => {
                        this.images[index] = newImg.src;
                        if (index === 0) {
                            this.wasLoadedFirstImage = true;
                        }
                    };
                    newImg.src = require(`../assets/images/slide5/${slideSrc}`);
                });
            },
            showNextSlide () {
                const image = document.getElementById('contentImage');

                if (this.slide+1 < this.timeArray.length) {
                    const timeOut = (this.timeArray[this.slide+1] - this.timeArray[this.slide])*1000;
                    setTimeout(this.showNextSlide, timeOut);
                }

                if (this.slide < this.images.length) {
                    image.src = this.images[this.slide];
                }

                this.slide++;

                if (this.slide === 7 ) {
                    this.$store.dispatch('checkForNextSlide');
                }
            }
        },
        watch: {
            wasLoadedFirstImage: function() {
                if (this.wasLoadedFirstImage) {
                    this.showNextSlide();
                }
            }
        },
        mounted: function () {
            this.loadAllImages();

            const audio = document.getElementById('audioPlayer');
            audio.addEventListener("canplay", () => {audio.play();});
            audio.src = require('../assets/audio/common/confucius.mp3');

            this.$store.subscribe((mutation, state) => {
                 if (mutation.type === 'enableSound') {

                        audio.muted = !this.$store.state.enableSound;
                }
                console.log('mutation', mutation, this.slide);
            });


        }
    };
</script>

<style scoped>
    .slide-img {
        height: 300px;
        border-radius: 30px;
    }

</style>