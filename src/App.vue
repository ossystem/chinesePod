<template>
  <div class="main">
    <div v-show="showFader" class="modal-fader"></div>

    <transition name="fade2">
      <what-is-the-difference v-if="whatIsTheDiffrence"/>
    </transition>

    <audio id="audioPlayerIntro"></audio>
    <audio id="audioPlayerQuestion"></audio>

    <audio id="soundPlayer1"></audio>
    <audio id="soundPlayer2"></audio>
    <audio id="soundPlayer3"></audio>
    <audio id="soundPlayer4"></audio>

    <transition name="fade">
      <start-page v-if="startPage"/>
    </transition>

    <transition name="fade2">
      <TestEndsForYou v-show="endTest"/>
    </transition>

    <ModalWrapper v-if="showConfucius">
      <WhereDidYouHearIt/>
    </ModalWrapper>

    <Slide1 v-if="currentSlide === 1"/>
    <Slide2 v-if="currentSlide === 2"/>
    <Slide3 v-if="currentSlide === 3"/>
    <Slide4 v-if="currentSlide === 4"/>
    <Slide5 v-if="currentSlide === 5"/>
    <Slide6 v-if="currentSlide === 6"/>
    <Slide7 v-if="currentSlide === 7"/>
    <Slide8 v-if="currentSlide === 8"/>
  </div>
</template>

<script>
import Slide1 from "./components/Slide1/Slide1.vue";
import Slide2 from "./components/Slide2/Slide2.vue";
import Slide3 from "./components/Slide3/Slide3.vue";
import Slide4 from "./components/Slide4/Slide4.vue";
import Slide5 from "./components/Slide5/Slide5.vue";
import Slide6 from "./components/Slide6/Slide6.vue";
import Slide7 from "./components/Slide7/Slide7.vue";
import Slide8 from "./components/Slide8/Slide8.vue";

import ModalWrapper from "./components/ModalWrapper.vue";
import WhereDidYouHearIt from "./components/WhereDidYouHearIt";
import StartPage from "./components/StartPage";
import whatIsTheDifference from "./components/WhatIsTheDifference";
import TestEndsForYou from "./components/TestEndsForYou";

export default {
  name: "app",
  components: {
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    ModalWrapper,
    WhereDidYouHearIt,
    StartPage,
    whatIsTheDifference,
    TestEndsForYou
  },
  data: () => ({
    showSettings: false,
    skipCharacters: false,
    traditionalCharset: false,
  }),
  methods: {
    skipCharsHandler() {
      this.skipCharacters = !this.skipCharacters;
    },
    traditionalCharsetHandler() {
      this.traditionalCharset = !this.traditionalCharset;
    }
  },
  computed: {
    whatIsTheDiffrence: function() {
      return this.$store.state.whatIsTheDiffrence;
    },
    startPage: function() {
      return this.currentSlide === 0;
    },
    currentSlide: function() {
      return this.$store.state.currentSlide;
    },
    showConfucius: function() {
      return this.$store.state.showConfucius;
    },
    showFader: function() {
      return this.$store.state.showFader;
    },
    endTest: function() {
      return this.$store.state.endTest;
    }
  },
  mounted: function() {
    // Need this line for tests only
    // So comment it out:

    /*if (window.location.href.includes('test')) {
      this.$store.commit('testData');
    }*/

    setTimeout(() => {
      this.showSettings = true;
    }, 5000);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-width: 350px;
}

.main {
  background: #FFFFFF;
}

.modal-fader {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
}

.visually-hidden {
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 20px;
}

.slide1 {
  position: relative;
  z-index: 1;
}

.slide2 {
  position: relative;
  z-index: 2;
}

.button-try {
  min-width: 148px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  outline: none;

  margin-left: auto;
  margin-right: auto;

  background: #1ebf1b;
  border-radius: 35px;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
}

.button-try:hover {
  background: #24D321;
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 1s;
}
.fade2-enter,
.fade2-leave-to {
  opacity: 0;
}
</style>

