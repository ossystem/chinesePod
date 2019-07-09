<template>
    <div class="main">
        <FinalPage v-show="$store.state.final"/>
        <div :class="{blurBg:$store.state.final}">
            <MenuBlock/>
            <QuestionBlock :skipCharacters="skipCharacters" :data="questions.question"
                           :traditional="traditionalCharset"/>
            <TimerBlock/>
            <AnswerBlock :data="questions.answers"/>
            <SettingsBlock :show="showSettings" @skipChars="skipCharsHandler"
                           @traditionalCharset="traditionalCharsetHandler"/>
        </div>
    </div>
</template>


<script>
    import QuestionBlock from '../QuestionBlock.vue';
    import AnswerBlock from '../AnswerBlock.vue';
    import MenuBlock from '../MenuBlock.vue';
    import SettingsBlock from '../SettingsBlock.vue';
    import TimerBlock from '../TimerBlock.vue';
    import FinalPage from '../Slide9/FinalPage.vue';

    import slide from '../../data/slides/slide8';

    export default {
        name: 'Slide8',
        components: {
            AnswerBlock,
            QuestionBlock,
            TimerBlock,
            MenuBlock,
            SettingsBlock,
            FinalPage
        },
        data: () => ({
            showSettings: false,
            skipCharacters: false,
            traditionalCharset: false,
            questions: slide

        }),
        methods: {
            skipCharsHandler () {
                this.skipCharacters = !this.skipCharacters;
            },
            traditionalCharsetHandler () {
                this.traditionalCharset = !this.traditionalCharset;
            }
        },
        mounted: function () {

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
            }, 5000);
        }
    };
</script>

<style scoped>
    .blurBg {
        filter: blur(4px);
        transition: all 1s;
    }
</style>
