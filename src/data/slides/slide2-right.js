// slide #2, if slide #1 was SOLVED
const question1 = 'Is this tea hot?';
const question2 = 'Do you want to dance?';
const question4 = 'You like a challenge?';

const data =
    {
        question: {
            title: 'What does this mean:',
            chars: '你有茶吗?',
            charsTD: '你有茶吗?*#',
            pinyin: 'Nǐ yǒu chá ma?',
            pinyinTD: 'Nǐ yǒu chá ma?*#',
        },
        // Variants of answers
        answers: [
            {
                text: question1,
                wrong: {
                    line1: 'Almost! Chá means tea.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${question1}” is 这茶很热吗？`,
                    voice: 'slide1/horse.mp3'
                }
            },
            {
                text: question2,
                wrong: {
                    line1: 'Almost! Nǐ means you.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${question2}” is 你想跳舞吗？`,
                    voice: 'slide1/horse.mp3'
                },
            },
            {
                text: 'Do you have tea?',
                wrong: {
                    line1: 'correct',
                    voice: 'correct.mp3'
                },
            },
            {
                text : question4,
                wrong: {
                    line1: 'Almost! Nǐ means you.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${question4}” is 你喜欢挑战吗？`,
                    voice: 'slide1/horse2.mp3'
                }
            }
        ],
    };

export default data;