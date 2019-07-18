import {WHAT_DOES_THIS_MEAN} from './constants';

const answer1 = {
    text: 'Even if you study hard, the entrance exam is challenging',
    trans: '即使你努力学习，入学考试也具有挑战性',
}

const answer2 = {
    text: 'You have to study hard, then you will pass the exam',
    trans: '你必须努力学习，然后你将通过考试',
}

const answer3 = {
    text: 'No matter how hard you study, only a few pass the entrance exam',
    trans: '无论你学习多么努力，只有少数人通过入学考试',
}

const answer4 = {
    text: 'Study hard and then it is easy to pass the entrance exam',
    trans: '努力学习然后很容易通过入学考试'
}


const data =
    {
        question: {
            delay: 300,
            title: WHAT_DOES_THIS_MEAN,
            chars: '即使你努力学习，通过入学考试也具有挑战性',
            charsTD: '即使你努力学习，通过入学考试也具有挑战性*#',
            pinyin: 'Jíshǐ nǐ nǔlì xuéxí, tōngguò rùxué kǎoshì yě jùyǒu tiǎozhàn xìng dàibǔle xiánfàn',
            pinyinTD: 'Jíshǐ nǐ nǔlì xuéxí, tōngguò rùxué kǎoshì yě jùyǒu tiǎozhàn xìng dàibǔle xiánfàn*#',
        },
        // Variants of answers
        answers: [
            {
                text: answer1.text,
                wrong: {
                    line1: 'correct',
                    voice: 'common/correct.mp3'
                },                                 
            },
            {
                text: answer2.text,
                wrong: {
                    line1: 'Oops!',
                    line2: 'Want to try one more?',
                    line3: `By the way, the Chinese phrase for “${answer2.text}” is ${answer2.trans}`,
                    voice: 'common/what-is-wrong.mp3'
                }                 
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