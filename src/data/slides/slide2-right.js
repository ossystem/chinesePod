import {WHAT_DOES_THIS_MEAN} from './constants';

// slide #2, if slide #1 was SOLVED
const question1 = 'Is this tea hot?';
const question2 = 'Do you want to dance?';
const question3 = 'Do you have tea?';
const question4 = 'Do you like a challenge?';

const data =
    {
        isWrong: false,
        question: {
            delay: 300,
            title: WHAT_DOES_THIS_MEAN,
            chars: '你有_茶吗?',
            charsTD: '你有茶吗?*#',
            pinyin: 'Nǐ yǒu chá ma?',
            pinyin2: 'Nǐ yǒu méiyǒu chá?',
            pinyinTD: 'Nǐ yǒu chá ma?*#',
            pinyinTD2: 'Nǐ yǒu méiyǒu chá?*#',
            animation: [
                {
                    chars: '你有茶_?',           
                    delay: 12000,
                },
                {
                    chars: '你有_茶?',                  
                    delay: 500,
                },
                {
                    chars: '你有没有茶?',
                    delay: 500,
                },
                {
                    chars: '',
                    delay: 500
                },
                {
                    chars: '',
                    delay: 5000
                }
            ]                            
        },
        // Variants of answers
        answers: [
            {
                text: question1,
                wrong: {
                    line1: 'Almost! Chá means tea.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${question1}” is 这茶很热吗？`,
                    voice: 'common/horse.mp3'
                }
            },
            {
                text: question2,
                wrong: {
                    line1: 'Almost! Nǐ means you.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${question2}” is 你想跳舞吗？`,
                    voice: 'common/what-is-wrong.mp3'
                },
            },
            {
                text: question3,
                wrong: {
                    line1: 'correct',
                    voice: 'common/correct.mp3'
                },
            },
            {
                text : question4,
                wrong: {
                    line1: 'Almost! Nǐ means you.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${question4}” is 你喜欢挑战吗？`,
                    voice: 'common/what-is-wrong.mp3'
                }
            }
        ],
    };

export default data;