<template>
    <div class="timer-wrap">
        <div class="timer-bar-left" :style="remainingTimeStyleLeft"></div>
        <div class="timer-bar-right" :style="remainingTimeStyleRight"></div>
    </div>
</template>

<script>
    const timerTick = 25;
    const timerDuration = 60 * 10; // 25 * 10 seconds

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
                    console.log('Remain:',this.remainingTimeMSec);
                    this.$store.commit('timeIsOut');
                    this.$store.dispatch('checkForNextSlide');
                }
            }
        },
        mounted: function () {
            console.log('mounted',this.remainingTimeMSec);
            setTimeout(() => {
                this.decreaseTimer();
            }, timerTick);
        },
        beforeDestroy: function() {
            if (this.lastTimeOutInterval) {
                clearTimeout(this.lastTimeOutInterval);
            }
        }
    };
</script>

<style scoped>
    .timer-wrap {
        display: flex;
        height: 3px;
        background: linear-gradient(90deg, #cb446c 20%, #eba24c 40%, #1ebf1b 60%, #1bb5bf 80%, #1b8dbe 100%);
        /*background: #406da3;*/
        /*margin-left: 10px;*/
        /*margin-right: 10px;*/
        /*border-radius: 5px;*/
        margin-bottom: 60px;
    }
    .timer-bar-left {

        /*background: red;*/
    }
    .timer-bar-right {
        /*background: #406da3;*/
        background: #314155;
        /*background: linear-gradient(90deg, #cb446c 20%, #eba24c 40%, #1ebf1b 60%, #1bb5bf 80%, #1b8dbe 100%);*/
        /*box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15), 0 0 10px #406da3;*/
    }

        @media (max-width: 1370px) {
        .timer-wrap {
            margin-bottom: 30px;
        }
    }

</style>