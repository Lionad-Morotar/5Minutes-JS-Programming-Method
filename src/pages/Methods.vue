<template>
<div class="example-choose-page">

    <div class="result-con">

        <template>
            <span class="result" v-if="result.length" :data-text="result">
                <span>{{ result }}</span>
            </span>
            <span class="no-result-info" v-else>
                <span>{{ placeholder }}</span>
            </span>
        </template>

        <div class="time-container">
            <div class="runing-time-info">
                <span class="time-label">RuningTime : </span>
                <span class="time-res">{{ time.runingTime || 'No RES. Available' }}</span>
            </div>
            <div class="time-info">
                <span class="time-label">Mounted Time : </span>
                <span class="time-res">{{ time.nowTime || 'No TIME' }}</span>
            </div>
        </div>

    </div>

</div>
</template>

<script>

import { default as Util } from '../util/util'
import { default as RotateString } from '../algorithm/1-1_rotate_string.js'

export default {
    name: 'example-choose-page',
    props: {
        placeholder: {
            type: String,
            default: 'No Result',
        },
    },
    data () {
        return {
            store: {
                algorithm: [],
            },
            result: '',
            time: {
                nowTime: '',
                runingTime: '',
            }
        }
    },
    created () {
        this.store.algorithm.push(RotateString)
    },
    mounted () {
        this.time.nowTime = Util.formatDate('yyyy-MM-dd hh:mm:ss S')

        this.runTest()
    },
    methods: {

        runTest () {
            this.result = 
                this.store.algorithm[
                    this.store.algorithm.length - 1
                ].test()
        }

    },
}
</script>

<style scoped>

.keyboard-display-page {
    display: block;
    user-select: none;
}
.result-con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.result {
    position: relative;
    font-size: 8vh;
    color: white;
    letter-spacing: 0.1vh;
}
.no-result-info {
    font-size: 10vh;
    color: #151515;
    // text-shadow: 1px 1px 3px #000;
}
.time-container {
    text-align: left;
}
.runing-time-info,
.time-info {
    margin-top: 1.5vh;
    font-size: 1.7vh;
    font-weight: 500;
    color: #444;
    letter-spacing: 3px;
}
.runing-time-info {
    margin-top: 3vh;
}
.time-label {
    font-weight: bold;
}

</style>
