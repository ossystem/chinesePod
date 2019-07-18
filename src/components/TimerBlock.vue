<template>
    <div>
        <div class="timer-wrap">
            <div class="timer-bar-left" :style="remainingTimeStyleLeft"></div>
            <div class="timer-bar-right" :style="remainingTimeStyleRight"></div>
        </div>
        <div class="bottom-spacer"></div>
    </div>
</template>

<script>
    const timerTick = 25;
    const timerDuration = 160 * 10; // 25 * 10 seconds

    export default {
        name: 'TimerBlock',
        data: () => ({
            remainingTimeStyleLeft: {width: '100%'},
            remainingTimeStyleRight: {width: '100%'},
            lastTimeOutInterval: 0,
            remainingTimeMSec: timerDuration * 100 // should be in milliseconds
        }),
        methods: {
            decreaseTimer () {
                this.remainingTimeMSec -= timerTick;

                const remainingL = (this.remainingTimeMSec / timerDuration);
                const remainingR = 100 - (this.remainingTimeMSec / timerDuration);

                this.remainingTimeStyleLeft = {
                    width: `${remainingL.toFixed(1)}%`
                };

                this.remainingTimeStyleRight = {
                    width: `${remainingR.toFixed(1)}%`
                };

                if (this.remainingTimeMSec > 0) {
                    if (!this.$store.state.stopTimeoutTimer && !this.$store.state.endTest) {
                        this.lastTimeOutInterval = setTimeout(this.decreaseTimer, timerTick);
                    }
                } else {
                    // console.log('Remain:',this.remainingTimeMSec);

                    if (this.$store.state.currentSlide === 8) {
                        setTimeout(() => {
                            this.$store.commit('setFinal');
                        }, 500);
                    } else {

                        this.$store.commit('timeIsOut');
                        this.$store.dispatch('checkForNextSlide');
                    }
                }
            }
        },
        mounted: function () {
            //console.log('mounted', this.remainingTimeMSec);
            setTimeout(() => {
                this.decreaseTimer();
            }, timerTick);
        },
        beforeDestroy: function () {
            if (this.lastTimeOutInterval) {
                clearTimeout(this.lastTimeOutInterval);
            }
        }
    };
</script>

<style scoped>
    .timer-wrap {
        display: flex;
        height: 10px;
        border-radius: 10px;
        box-shadow: 0 50px 50px rgba(0, 0, 0, 0.15);
    }

    .bottom-spacer {
        height: 0;
    }

    .timer-bar-left {
        background: #CB4444;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }
    .timer-bar-right {
    }

    /*@media (max-width: 1370px) {*/
    /*    .timer-wrap {*/
    /*        margin-bottom: 30px;*/
    /*    }*/
    /*}*/

</style>