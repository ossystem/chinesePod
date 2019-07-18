import {WHAT_DOES_THIS_MEAN_7} from './constants';

const answer1 = {
    text: 'We might be able to cure Alzheimer\'s disease.',
    trans: '',
};

const answer2 = {
    text: 'We might be able to prolong our lives to 200 years old.',
    trans: '',
};

const answer3 = {
    text: 'We might be immune to any disease.',
    trans: '',
};

const answer4 = {
    text: 'We might be able to stop aging.',
    trans: ''
};

const data =
    {
        question: {
            delay: 300,
            intro: 'slide7/intro.mp3',
            skipTextSpeech: true,
            syncData: [
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
                {'start':4.100,'end':4.510,'text': '关的'},
                {'start':4.100,'end':4.510,'text': '。'},

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
                {'start':10.250,'end':10.660,'text': '岁了'},
                {'start':10.250,'end':10.660,'text': '。'},

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
                {'start':15.580,'end':15.990,'text': '碟了'},
                {'start':15.580,'end':15.990,'text': '。'},
            ],
            title: WHAT_DOES_THIS_MEAN_7,
            chars: '这些高新技术的应用都是跟我们的生活息息相关的。<br>等到科学家们找到细胞衰老的原因,\n' +
                '说不定我们就能活到两百岁了。<br>而且以后或许可以克隆人体器官,治疗癌症就是小菜一碟\n' +
                '了。',
            charsTD: '这些高新技术的应用都是跟我们的生活息息相关的。<br>等到科学家们找到细胞衰老的原因,\n' +
                '说不定我们就能活到两百岁了。<br>而且以后或许可以克隆人体器官,治疗癌症就是小菜一碟\n' +
                '了。*#',
            pinyin: 'Zhèxiē gāoxīn jìshù de yìngyòng dōu shì gēn wǒmen de shēnghuó\n' +
                'xīxīxiāngguān de. Děngdào kēxuéjiā men zhǎodào xìbāo shuāilǎo de\n' +
                'yuányīn, shuōbudìng wǒmen jiù néng huódào liǎngbǎi suì le. érqiě yǐhòu\n' +
                'huòxǔ kěyǐ kèlóng réntǐ qìguān,zhìliáo áizhèng jiùshì xiǎocàiyīdié le. ',

            pinyinTD: 'Zhèxiē gāoxīn jìshù de yìngyòng dōu shì gēn wǒmen de shēnghuó\n' +
                'xīxīxiāngguān de. Děngdào kēxuéjiā men zhǎodào xìbāo shuāilǎo de\n' +
                'yuányīn, shuōbudìng wǒmen jiù néng huódào liǎngbǎi suì le. érqiě yǐhòu\n' +
                'huòxǔ kěyǐ kèlóng réntǐ qìguān,zhìliáo áizhèng jiùshì xiǎocàiyīdié le. *#',
        },
        // Variants of answers
        answers: [
            {
                text: answer1.text,
                wrong: {
                    line1: 'Oops!',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer1.text}” is ${answer1.trans}`,
                    voice: 'common/what-is-wrong.mp3'
                }                 
                                    
            },
            {
                text: answer2.text,
                wrong: {
                    line1: 'correct',
                    voice: 'common/correct.mp3'
                },                   
            },
            {
                text: answer3.text,
                wrong: {
                    line1: 'Well, you got the FIRST character right – ”Wo” means “I”.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer3.text}” is ${answer3.trans}`,
                    voice: 'common/horse.mp3'
                },
            },
            {
                text : answer4.text,
                wrong: {
                    line1: 'Well, you got the FIRST character right – ”Wo” means “I”.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer4.text}” is ${answer4.trans}`,
                    voice: 'common/what-is-wrong.mp3'
                }
            }


        ],
    };

export default data;