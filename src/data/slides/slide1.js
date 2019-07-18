import {WHAT_DOES_THIS_MEAN} from './constants';

const data =
    {
        question: {
            delay: 3000,
            title: WHAT_DOES_THIS_MEAN,
            chars: '我不知道',
            charsTD: '我不知道*#',
            pinyin: 'Wǒ bù zhīdào',
            pinyinTD: 'Wǒ bù zhīdào*#',
        },
        // Variants of answers
        answers: [
            {
                text: 'Where is the bathroom',
                wrong: {
                    line1: 'Oops!',
                    line2: 'Want to try one more?',
                    line3: 'By the way, the Chinese phrase for “Where is the bathroom” is 洗手间在哪里',
                    voice: 'common/bath.mp3'
                }
            },
            {
                text: 'I am hungry',
                wrong: {
                    line1: 'Well, you got the FIRST character right – ”Wo” means “I”.',
                    line2: 'Want to try one more?',
                    line3: 'By the way, the Chinese phrase for “I am hungry” is 我餓了',
                    voice: 'common/what-is-wrong.mp3'
                },
            },
            {
                text : 'I love you',
                wrong: {
                    line1: 'Well, you got the FIRST character right – ”Wo” means “I”.',
                    line2: 'Want to try one more?',
                    line3: 'By the way, the Chinese phrase for “I love you” is 我爱你',
                    voice: 'common/what-is-wrong.mp3'
                }
            },
            {
                text: 'I don\'t know',
                wrong: {
                    line1: 'correct',
                    voice: 'common/correct.mp3'
                },
            },
        ],
    };

export default data;