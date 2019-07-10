<template>
    <div class="main">
        <MenuBlock />
        <TimerBlock />
        <QuestionBlock :skipCharacters="skipCharacters" :data="questions.question" :traditional="traditionalCharset"/>
        <AnswerBlock :data="questions.answers" />
        <SettingsBlock :show="showSettings" @skipChars="skipCharsHandler" @traditionalCharset="traditionalCharsetHandler"/>
    </div>
</template>


<script>
    import QuestionBlock from '../QuestionBlock.vue';
    import AnswerBlock from '../AnswerBlock.vue';
    import MenuBlock from '../MenuBlock.vue';
    import SettingsBlock from '../SettingsBlock.vue';
    import TimerBlock from '../TimerBlock.vue'

    import slide from '../../data/slides/slide7';

    export default {
        name: 'Slide7',
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
            }
        },
        mounted: function() {

            // https://www.codepunker.com/blog/sync-audio-with-text-using-javascript
            
            // (function(win, doc) {
            //     let audioPlayer = doc.getElementById("audiofile");
            //     let subtitles = doc.getElementById("subtitles");
            //     let syncData = [
            //         {"end": "0.225","start": "0.125","text": "There" },
            //         {"end": "0.485","start": "0.225","text": "were" },
            //         /* ... and so on ... full json is in the demo */
            //     ];
            //     createSubtitle();
            //
            //     function createSubtitle()
            //     {
            //         var element;
            //         for (var i = 0; i < syncData.length; i++) {
            //             element = doc.createElement('span');
            //             element.setAttribute("id", "c_" + i);
            //             element.innerText = syncData[i].text + " ";
            //             subtitles.appendChild(element);
            //         }
            //     }
            //
            //     audioPlayer.addEventListener("timeupdate", function(e){
            //         syncData.forEach(function(element, index, array){
            //             if( audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end )
            //                 subtitles.children[index].style.background = 'yellow';
            //         });
            //     });
            // }(window, document));

            this.$store.commit('clearDataBeforeSlideStarts');
            setTimeout(() => {
                this.showSettings = true;
            },5000);
        }
    };
</script>

<style>
</style>
