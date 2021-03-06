import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        showFader: false,
        numOfWrongAnswers: 0,
        numOfPreviousErrors: 0,
        numOfCorrect: 0,
        numOfIncorrect: 0,
        numOfUnattempted: 0,
        totalScore: 0,
        currentSlide: 0,
        timeIsOut: false,
        answerIsCorrect: false,
        prevAnswerIsCorrect: false,
        stopTimeoutTimer: false,
        endTest: false,
        final: false,
        skipChars: false,
        userTraditional: false,
        enableSound: true,
        highlightSentence: null,
        whatIsTheDiffrence: false,
        showConfucius: false,
        log: '',
        wrongAnswerTimeOutId: 0
    },

    getters: {},

    mutations: {
        wrongAnswerTimeOutId(state,value) {
          state.wrongAnswerTimeOutId = value;
        },
        showConfucius(state,enable) {
          state.showConfucius = enable;
        },
        testData(state) {
            state.final = true;
            state.totalScore = 68;
            state.currentSlide = 8;
        },
        addLog() {
            // Do not make log string for now
            // so comment it out:
            //state.log += 'log: '+str + '<br>';
        },
        whatIsTheDiffrence(state,enable) {
            state.whatIsTheDiffrence = enable;
        },
        enableSound(state,enable) {
          state.enableSound = enable;
        },
        setFinal(state) {
          state.final = true;
        },
        skipChars(state,enabled) {
            state.skipChars = enabled;
        },
        userTraditional(state,enabled) {
          state.userTraditional = enabled;
        },
        showModalFader (state) {
            state.showFader = true;
        },
        hideModalFader (state) {
            state.showFader = false;
        },
        incNumOfWrongAnswers (state) {
            state.numOfWrongAnswers++;
            state.numOfIncorrect++;
        },
        timeIsOut (state) {
            state.timeIsOut = true;
            state.numOfUnattempted++;
        },
        answerIsCorrect (state) {
            state.answerIsCorrect = true;
            state.numOfCorrect++;
        },
        incrementScore (state, inc) {
            state.totalScore += inc;
        },
        stopTimeoutTimer(state) {
            state.stopTimeoutTimer = true;
        },
        endTest(state) {
          state.endTest = true;
        },
        interruptAnswers() {

        },
        highlightSentence(state, payload) {
          state.highlightSentence = payload;
        },
        clearDataBeforeSlideStarts(state) {
            // go to next step
            state.showFader = false;
            state.numOfPreviousErrors = state.numOfWrongAnswers;

            state.numOfWrongAnswers = 0;

            state.timeIsOut = false;
            state.answerIsCorrect = false;
            state.stopTimeoutTimer = false;
        },
        nextSlide (state) {
            // go to next step
            if (state.currentSlide < 8) {
                state.currentSlide++;
            } else {
                state.final = true;
            }
        }
    },

    actions: {
        checkForNextSlide (context) {
            // if timeOut, correctAnswer, or num of Errors == 2,
            // go to next slide

            if (!context.state.timeIsOut && !context.state.answerIsCorrect && context.state.numOfWrongAnswers !== 2) {
                return;
            }

            // timeout on the slide 2 - end test
            if (context.state.timeIsOut && !context.state.prevAnswerIsCorrect && context.state.currentSlide === 2) {
                context.commit('endTest');
                return;
            }

            context.state.prevAnswerIsCorrect = context.state.answerIsCorrect;
            // increase score, if answer was correct
            if (context.state.answerIsCorrect) {
                switch (context.state.numOfWrongAnswers) {
                    case 0:
                        context.commit('incrementScore', 10);
                        break;
                    case 1:
                        context.commit('incrementScore', 8);
                        break;
                }
            }

            
            // go to next slide
            context.commit('nextSlide');
        }
    }
});