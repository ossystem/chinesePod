<template>
  <div class="main">
    <div v-show="showFader" class="modal-fader"></div>

    <ModalWrapper v-show="endTest">
      <div>Test ends for you now!</div>
      <div><a href="https://chinesepod.com">Click to take some mandarin and</a></div>
      <div>come back soon!</div>
    </ModalWrapper>

    <ModalWrapper v-if="rightAnswerSlide5">
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
import WhereDidYouHearIt from "./components/WhereDidYouHearIt"

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
    WhereDidYouHearIt
  },
  data: () => ({
    showSettings: false,
    skipCharacters: false,
    traditionalCharset: false
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
    currentSlide: function() {
      return this.$store.state.currentSlide;
    },
    rightAnswerSlide5: function() {
      return this.$store.state.currentSlide === 5 && this.$store.state.answerIsCorrect;
    },
    showFader: function() {
      return this.$store.state.showFader;
    },
    endTest: function() {
      return this.$store.state.endTest;
    }
  },
  mounted: function() {
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
  /*overflow-y: hidden;*/
}

.main {
  background: #FFFFFF;
  min-height: 100vh;

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
  width: 188px;
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
}

.button-try:focus {
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), 0 0 10px #1ebf1b;
}

.button-try:hover {
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 15px #1ebf1b;
}
</style>
