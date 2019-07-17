<template>
    <div class="main">              
        <MenuBlock />
        <TimerBlock />
        <QuestionBlock :skipCharacters="skipCharacters" :data="questions.question" :traditional="traditionalCharset"/>
        <AnswerBlock v-if="showSettings" :data="questions.answers" />
        <SettingsBlock :show="showSettings" @skipChars="skipCharsHandler" @traditionalCharset="traditionalCharsetHandler"/>
    </div>
</template>


<script>    
    import QuestionBlock from '../QuestionBlock.vue';
    import AnswerBlock from '../AnswerBlock.vue';
    import MenuBlock from '../MenuBlock.vue';
    import SettingsBlock from '../SettingsBlock.vue';
    import TimerBlock from '../TimerBlock.vue'

    import slide from '../../data/slides/slide6';

    export default {
        name: 'Slide6',
        components: {
            AnswerBlock,
            QuestionBlock,
            TimerBlock,
            MenuBlock,
            SettingsBlock,
        },
        data: () => ({
            showSettings: false,
            skipCharacters: false,
            traditionalCharset: false,
            questions: slide,

        }),
        methods: {
            skipCharsHandler() {
                this.skipCharacters = !this.skipCharacters;
            },
            traditionalCharsetHandler() {
                this.traditionalCharset = !this.traditionalCharset;
            },
            createSubtitle(subtitles)
            {
                let element;
                for (let i = 0; i < syncData.length; i++) {
                    element = document.createElement('span');
                    element.setAttribute("id", "c_" + i);
                    element.innerText = syncData[i].text + " ";
                    subtitles.appendChild(element);
                }
            }
        },
        mounted: function() {
            // https://www.codepunker.com/blog/sync-audio-with-text-using-javascript
            // use https://ttsmp3.com/ to generate mp3

            // let audioPlayer = document.getElementById('audiofile');
            // let subtitles = document.getElementById('subtitles');

            // this.createSubtitle(subtitles);

            // audioPlayer.addEventListener('timeupdate', ()=>{

            //     syncData.forEach((element, index)=>{
            //         if( audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end ) {
            //             subtitles.children[index].style.background = 'yellow';
            //         } else {
            //             subtitles.children[index].style.background = 'transparent';
            //         }
            //     });
            // });

            

            this.$store.commit('clearDataBeforeSlideStarts');
            setTimeout(() => {
                this.showSettings = true;
            },5000);
        }
    };
</script>

<style>
</style>
