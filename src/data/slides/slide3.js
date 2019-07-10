import {WHAT_DOES_THIS_MEAN} from './constants';

const answer1 = {
    text: 'Police does have suspects',
    trans: '警察确实有嫌犯'
}

const answer2 = {
    text: 'The police has arrested the suspect',
    trans: '警方逮捕了嫌犯',
}

const answer3 = {
    text: 'Police is arresting the suspect (right now)',
    trans: '警方正在逮捕嫌犯',
}

const answer4 = {
    text: 'Police does not have any suspects at this time',
    trans: '警方目前没有任何嫌疑人'
}


const data =
    {
        question: {
            title: WHAT_DOES_THIS_MEAN,
            chars: '警方逮捕了嫌犯',
            charsTD: '警方逮捕了嫌犯*#',
            pinyin: 'Jǐngfāng dàibǔle xiánfàn',
            pinyinTD: 'Jǐngfāng dàibǔle xiánfàn*#',
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