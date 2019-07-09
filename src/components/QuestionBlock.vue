<template>
  <section class="question">
    <!--        <div class="arrow left"></div>-->
    <div class="question-wrapper">
      <div :style="{opacity: showTitle}" class="text" :class="{'text-green':changeTitleColor}">{{data.title}}</div>
      <div
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
  </section>
</template>

<script>
export default {
  name: "QuestionBlock",
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
    },
    data: Object,
    traditional: {
      type: Boolean,
      default: false,
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

    setTimeout(() => {
      this.showTitle = 1;
    }, this.data.delay);
  },
  methods: {
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

<style scoped>
.question {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #384c63;
  min-height: 300px;
}

.question-wrapper {
  text-align: center;
}

.question .text {
  font-size: 24px;
  color: #fff;
  transition: all 1s;
}

.question .text.text-green {
  color: #9FC6F4;
  /*font-weight: bold;*/
}

.symbols.hide.smaller,
.symbols.hide.small,
.symbols.hide {
  animation: fadeInBlur 1s both;
  font-size: 0 !important;
  transition: all 1s;
}

.symbols.show {
  animation: fadeInBlur 1s both;
  font-size: 90px;
  transition: all 1s;
}

.symbols.small {
  font-size: 50px !important;
}

.symbols.smaller {
  font-size: 26px !important;
}

.pinyin.show {
  font-size: 90px;
  color: #fff !important;
  /*animation: fadeInBlur 1s both;*/
  transition: all 1s;
}

.pinyin.show.small {
  font-size: 50px !important;
}

.pinyin.show.smaller {
  font-size: 24px !important;
}

.pinyin.hide.small,
.pinyin.hide.smaller,
.pinyin.hide {
  font-size: 24px;
  /*animation: fadeInBlur 1s both;*/
  transition: all 1s;
}

.question .pinyin-no-animation {
  font-size: 24px;
  /*color: #406da3;*/
  color: #518dd4;
  max-width: 900px;
}

.question .pinyin {
  /*font-size: 28px;*/
  /*color: #406da3;*/
  color: #518dd4;
  animation: fadeInBlur 1s both ease-in;

  max-width: 900px;
}

.question .pinyin.delay {
  animation-delay: 5s;
}

.question .tooltip {
  color: red;
  font-size: 20px;
}

.arrow {
  width: 48px;
  height: 76px;
}

.arrow.left {
  background: url("../assets/images/icons/arrow-left.png");
  margin-left: 100px;
}

.arrow.right {
  background: url("../assets/images/icons/arrow-right.png");
  margin-right: 100px;
}

@keyframes fadeInBlur {
  from {
    opacity: 0;
    filter: blur(5px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

.symbol-list {
  list-style: none;
  display: inline-block;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}

.question .symbols {
  font-size: 90px;
  color: #fff;
}

@media (max-width: 1370px) {
  .question .symbols {
    font-size: 50px;
  }

  .pinyin.show {
    font-size: 50px;
  }

  .pinyin.show.small,
  .pinyin.show.smaller {
    font-size: 40px;
  }

  .question {
    min-height: 200px;
  }
}
</style>