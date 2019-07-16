<template>
    <div class="main">
        <audio id="audiofile" :src="require('../../assets/audio/slide6/question.mp3')" controls></audio><br>
        <div id="subtitles"></div>
        <MenuBlock />
        <TimerBlock />
        <QuestionBlock :skipCharacters="skipCharacters" :data="questions.question" :traditional="traditionalCharset"/>
        <AnswerBlock v-if="showSettings" :data="questions.answers" />
        <SettingsBlock :show="showSettings" @skipChars="skipCharsHandler" @traditionalCharset="traditionalCharsetHandler"/>
    </div>
</template>


<script>
    const syncData = [
        // first line, 11
        {'start':0.000,'end':0.410,'text': '这些'},
        {'start':0.410,'end':0.820,'text': '高新'},
        {'start':0.820,'end':1.230,'text': '技术'},
        {'start':1.230,'end':1.640,'text': '的应'},
        {'start':1.640,'end':2.050,'text': '用都'},
        {'start':2.050,'end':2.460,'text': '是跟'},
        {'start':2.460,'end':2.870,'text': '我们'},
        {'start':2.870,'end':3.280,'text': '的生'},
        {'start':3.280,'end':3.690,'text': '活息'},
        {'start':3.690,'end':4.100,'text': '息相'},
        {'start':4.100,'end':4.510,'text': '关的。'},

        // second line, 15
        {'start':4.510,'end':4.920,'text': '等到'},
        {'start':4.920,'end':5.330,'text': '科学'},
        {'start':5.330,'end':5.740,'text': '家们'},
        {'start':5.740,'end':6.150,'text': '找到'},
        {'start':6.150,'end':6.560,'text': '细胞'},
        {'start':6.560,'end':6.970,'text': '衰老'},
        {'start':6.970,'end':7.380,'text': '的原'},
        {'start':7.380,'end':7.790,'text': '因,'},
        {'start':7.790,'end':8.200,'text': ' 说'},
        {'start':8.200,'end':8.610,'text': '不定'},
        {'start':8.610,'end':9.020,'text': '我们'},
        {'start':9.020,'end':9.430,'text': '就能'},
        {'start':9.430,'end':9.840,'text': '活到'},
        {'start':9.840,'end':10.250,'text': '两百'},
        {'start':10.250,'end':10.660,'text': '岁了。'},

        // third line, 13
        {'start':10.660,'end':11.070,'text': '而且'},
        {'start':11.070,'end':11.480,'text': '以后'},
        {'start':11.480,'end':11.890,'text': '或许'},
        {'start':11.890,'end':12.300,'text': '可以'},
        {'start':12.300,'end':12.710,'text': '克隆'},
        {'start':12.710,'end':13.120,'text': '人体'},
        {'start':13.120,'end':13.530,'text': '器官,'},
        {'start':13.530,'end':13.940,'text': '治'},
        {'start':13.940,'end':14.350,'text': '疗癌'},
        {'start':14.350,'end':14.760,'text': '症就'},
        {'start':14.760,'end':15.170,'text': '是小'},
        {'start':15.170,'end':15.580,'text': '菜一'},
        {'start':15.580,'end':15.990,'text': '碟了。'},
    ];

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

            let audioPlayer = document.getElementById('audiofile');
            let subtitles = document.getElementById('subtitles');

            this.createSubtitle(subtitles);

            audioPlayer.addEventListener('timeupdate', ()=>{

                syncData.forEach((element, index)=>{
                    if( audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end ) {
                        subtitles.children[index].style.background = 'yellow';
                    } else {
                        subtitles.children[index].style.background = 'transparent';
                    }
                });
            });

            this.$store.commit('clearDataBeforeSlideStarts');
            setTimeout(() => {
                this.showSettings = true;
            },5000);
        }
    };
</script>

<style>
</style>
