// slide #2, if slide #1 was not solved
import {WHAT_DOES_THIS_MEAN} from './constants';

const data =
    {
        question: {
            title: WHAT_DOES_THIS_MEAN,
            chars: '谢谢',
            charsTD: '谢谢*#',
            pinyin: 'Xièxiè',
            pinyinTD: 'Xièxiè*#',
        },
        // Variants of answers
        answers: [
            {
                text: 'Hello',
                wrong: {
                    line1: 'You are a complete newbie!',
                    line2: 'See you later!',
                    line3: 'By the way, the Chinese phrase for “Hello” is 你好',
                    voice: 'slide1/horse.mp3'
                }
            },
            {
                text: 'Thank you',
                wrong: {
                    line1: 'correct',
                    voice: 'correct.mp3'
                },
            },
            {
                text: 'Be careful',
                wrong: {
                    line1: 'You are a complete newbie!',
                    line2: 'See you later!',
                    line3: 'By the way, the Chinese phrase for “I am hungry” is 小心',
                    voice: 'slide1/horse.mp3'
                },
            },
            {
                text : 'Bless you!',
                wrong: {
                    line1: 'You are a complete newbie!',
                    line2: 'See you later!',
                    line3: 'By the way, the Chinese phrase for “Bless you!” is 祝福你!',
                    voice: 'slide1/horse2.mp3'
                }
            }


        ],
    };

export default data;