import {WHAT_DOES_THIS_MEAN} from './constants';

const answer1 = {
    text: 'If you cannot slow down, you need to stop once in a while',
    trans: '如果你不能减速，你需要偶尔停下来',
}

const answer2 = {
    text: 'It does not matter how slowly you go so long as you do not stop',
    trans: '你走的慢不要紧，只要你不停下来',
}

const answer3 = {
    text: 'The slower you go, the less time you have to stop',
    trans: '你去的越慢，你停下来的时间就越少',
}

const answer4 = {
    text: 'If you start slow, you have less time to make stops',
    trans: '如果你开始慢，你就没有多少时间停下来'
}


const data =
    {
        question: {
            delay: 300,
            title: WHAT_DOES_THIS_MEAN,
            chars:   '你走的慢不要紧，只要你不停下来',
            charsTD: '你走的慢不要緊，只要你不停下來',
            pinyin:   'Nǐ zǒu de màn bùyàojǐn, zhǐyào nǐ bù tíngxiàlái',
            pinyinTD: 'Nǐ zǒu de màn bùyàojǐn, zhǐyào nǐ bù tíngxiàlái',
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
                    voice: 'common/what-is-wrong.mp3'
                },
            },
            {
                text : answer4.text,
                wrong: {
                    line1: 'Well, you got the FIRST character right – ”Wo” means “I”.',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer4.text}” is ${answer4.trans}`,
                    voice: 'common/horse2.mp3'
                }
            }


        ],
    };

export default data;