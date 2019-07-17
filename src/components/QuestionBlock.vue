<template>
  <section class="question">
    <!--        <div class="arrow left"></div>-->

    <div class="question-wrapper">
      <div
        :style="{opacity: showTitle}"
        class="text"
        :class="{'text-green':changeTitleColor}"
        v-html="data.title"
      ></div>
      <div
      v-if="haveSyncText"
        id="subtitles"
        class="symbols"
        :class="{hide:skipCharacters,show:!skipCharacters && !skipAnimation, small: isSmall, smaller: isSmaller}"
      ></div>
      <div
      v-else
        v-html="chars"
        class="symbols"
        :class="{hide:skipCharacters,show:!skipCharacters && !skipAnimation, small: isSmall, smaller: isSmaller}"
      ></div>
      <div v-if="skipAnimation" class="pinyin-no-animation">{{pinyin}}</div>
      <div
        v-else
        class="pinyin"
        :class="{hide:!skipCharacters,show:skipCharacters,delay:!skipCharacters,small: isSmall, smaller: isSmaller}"
      >{{pinyin}}</div>
      <!--            <div class="pinyin" :class="{hide:!skipCharacters,show:skipCharacters}">AAA</div>-->
    </div>
    <!--        <div class="arrow right"></div>-->

    <audio id="audioIntro"></audio>
  </section>
</template>

<script>
import QuestionBlockMixin from "../mixins/QuestionBlock";

export default {
  name: "QuestionBlock",
  mixins: [QuestionBlockMixin],
  data: () => ({
    charsPart: "",
    title: "",
    titles: [],
    titleIndex: 0,
    showTitle: 0
  }),
  props: {
    skipCharacters: {
      type: Boolean,
      default: false,
      removeEndedListener: false
    },
    data: Object,
    traditional: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    traditional: function() {
      const word = this.traditional ? this.data.charsTD : this.data.chars;

      this.charsPart = "";
      let time = 100;
      word.split("").forEach(char => {
        setTimeout(() => {
          this.charsPart += char;
        }, time);
        time += 50;
      });
    }
  },
  mounted: function() {
    this.charsPart = this.data.chars;
    this.title = this.data.chars;

    //console.log(this.data);

    if (this.skipAnimation > 6) {
      this.showTitle = 1;
    }

    if (this.data.animation) {
      this.titles = this.data.animation;
      setTimeout(this.changeTitle, this.data.animation[0].delay);
    }

    let subtitles = document.getElementById('subtitles');
    if (this.haveSyncText) {
      this.createSubtitle(subtitles);
    }

    this.initAndStartQuestion(subtitles);
    this.applyMuteAudio();

    setTimeout(() => {
      this.showTitle = 1;
    }, this.data.delay);
  },
  methods: {
    createSubtitle(subtitles) {
      let element;
      for (let i = 0; i < this.data.syncData.length; i++) {
        element = document.createElement("span");
        element.setAttribute("id", "c_" + i);
        const text = this.data.syncData[i].text;
        element.innerText = text + " ";
        if (text === '。') {
          element.innerHTML += "<br>";
        }
        subtitles.appendChild(element);
      }
    },
    changeTitle() {
      this.title = this.titles[this.titleIndex].chars;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;

      //console.log("change title to:", this.title);

      if (this.titleIndex) {
        setTimeout(this.changeTitle, this.titles[this.titleIndex].delay);
      }
    }
  },
  computed: {
    haveSyncText: function() {
      return this.data.syncData;
    },
    changeTitleColor: function() {
      return this.$store.state.currentSlide >= 6;
    },
    skipAnimation: function() {
      return this.$store.state.currentSlide > 6;
    },
    isSmall: function() {
      return this.chars.length > 14 && this.chars.length < 25;
    },
    isSmaller: function() {
      return this.chars.length >= 25;
    },
    chars: function() {
      return this.traditional ? this.data.charsTD : this.data.chars;
    },
    pinyin: function() {
      return this.traditional ? this.data.pinyinTD : this.data.pinyin;
    }
  }
};
</script>

<style scoped src="./styles/questions.css">
</style>