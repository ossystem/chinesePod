<template>
  <section class="menu-block">
    <div class="menu"></div>
    <div class="step">
      {{currentSlide}}
      <span class="rest">/8</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "MenuBlock",
  computed: {
    currentSlide: function() {
      return this.$store.state.currentSlide;
    }
  }
};
</script>

<style scoped>
.menu-block {
  display: flex;
  align-items: center;
  height: 80px;
  max-width: 900px;
  justify-content: space-between;
  margin: auto;
  padding-left: 50px;
  padding-right: 50px;
}
.menu {
  width: 48px;
  height: 48px;
  background: url("../assets/images/icons/menu.png");
}
.menu:hover {
    cursor: pointer;
}

.step {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #304155;
  color: white;
  line-height: 120px;
  text-align: center;
  font-size: 64px;
  font-weight: bold;
}
.rest {
  color: #406da3;
  font-size: 24px;
  font-weight: normal;
}

@media (max-width: 1370px) {
  .menu-block {
    height: 70px;
  }
  .step {
    width: 110px;
    height: 110px;
    border-radius: 50%;

    line-height: 110px;
    font-size: 60px;    
  }
}
</style>