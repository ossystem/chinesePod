const answer1 = {
    text: 'To be closely linked',
    trans: '',
}

const answer2 = {
    text: 'To be irrelevant',
    trans: '这是无关紧要的',
}

const answer3 = {
    text: 'To be popular',
    trans: '受欢迎',
}

const answer4 = {
    text: 'To be important',
    trans: '很重要'
}


const data =
    {
        question: {
            delay: 4000,
            title: 'What does 息息相关 mean?',
            chars: '这些高新技术的应用都是跟我们的生活息息相关的。<br>等到科学家们找到细胞衰老的原因,\n' +
                '说不定我们就能活到两百岁了。<br>而且以后或许可以克隆人体器官,治疗癌症就是小菜一碟\n' +
                '了。',
            charsTD: '你走的慢不要紧，只要你不停下来*#',
            pinyin: 'Zhèxiē gāoxīn jìshù de yìngyòng dōu shì gēn wǒmen de shēnghuó\n' +
                'xīxīxiāngguān de. Děngdào kēxuéjiā men zhǎodào xìbāo shuāilǎo de\n' +
                'yuányīn, shuōbudìng wǒmen jiù néng huódào liǎngbǎi suì le. érqiě yǐhòu\n' +
                'huòxǔ kěyǐ kèlóng réntǐ qìguān,zhìliáo áizhèng jiùshì xiǎocàiyīdié le. ',
            pinyinTD: 'Nǐ zǒu de màn bùyàojǐn, zhǐyào nǐ bù tíng xiàlái*#',
        },
        // Variants of answers
        answers: [
            {
                text: answer1.text,
                wrong: {
                    line1: 'correct',
                    voice: 'correct.mp3'
                },
            },
            {
                text: answer2.text,
                wrong: {
                    line1: 'Not exact!<br>息: breath, 相关: related<br>息息相关: related as closely as each breath is to the next',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer2.text}” is ${answer2.trans}`,
                    voice: 'slide1/bath.mp3'
                }
            },
            {
                text: answer3.text,
                wrong: {
                    line1: 'Not exact!<br>息: breath, 相关: related<br>息息相关: related as closely as each breath is to the next',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer3.text}” is ${answer3.trans}`,
                    voice: 'slide1/horse.mp3'
                },
            },
            {
                text : answer4.text,
                wrong: {
                    line1: 'Not exact!<br>息: breath, 相关: related<br>息息相关: related as closely as each breath is to the next',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer4.text}” is ${answer4.trans}`,
                    voice: 'slide1/horse2.mp3'
                }
            }


        ],
    };

export default data;