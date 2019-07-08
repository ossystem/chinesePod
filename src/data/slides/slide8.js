const answer1 = {
    text: 'Scientists might develop a revolutionary drug.',
    trans: '',
};

const answer2 = {
    text: 'Scientists might be able to clone human organs.',
    trans: '',
};

const answer3 = {
    text: 'We might find a way to prevent cancers.',
    trans: '',
};

const answer4 = {
    text: 'We might develop a cure for cancer.',
    trans: ''
};

const data =
    {
        question: {
            delay: 0,
            title: 'Why did the speaker said "治疗癌症就是小菜一碟了" ?',
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
                    line1: 'Oops!',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer1.text}” is ${answer1.trans}`,
                    voice: 'slide1/bath.mp3'
                }
            },
            {
                text: answer2.text,
                wrong: {
                    line1: 'correct',
                    voice: 'correct.mp3'
                },                   
            },
            {
                text: answer3.text,
                wrong: {
                    line1: 'Well, you got the FIRST character right – ”Wo” means “I”.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer3.text}” is ${answer3.trans}`,
                    voice: 'slide1/horse.mp3'
                },
            },
            {
                text : answer4.text,
                wrong: {
                    line1: 'Well, you got the FIRST character right – ”Wo” means “I”.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer4.text}” is ${answer4.trans}`,
                    voice: 'slide1/horse2.mp3'
                }
            }


        ],
    };

export default data;