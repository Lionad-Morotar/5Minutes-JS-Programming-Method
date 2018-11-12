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

        <div class="info-container">
            <div class="info description">
                <span class="info-label">Description : </span>
                <span class="info-content">{{ info.description || 'UnAvailable' }}</span>
            </div>
            <div class="info limit">
                <span class="info-label">Description : </span>
                <span class="info-content">{{ info.limit || 'UnAvailable' }}</span>
            </div>
            <div class="info input">
                <span class="info-label">Input : </span>
                <span class="info-content">{{ info.input || 'UnAvailable' }}</span>
            </div>
            <div class="info output">
                <span class="info-label">Output : </span>
                <span class="info-content">{{ info.output || 'UnAvailable' }}</span>
            </div>
            <!--
            <div class="info runing-time-info">
                <span class="info-label">RuningTime : </span>
                <span class="info-content">{{ time.runingTime || 'UnAvailable' }}</span>
            </div>
            -->
            <div class="info time-info">
                <span class="info-label">Mounted Time : </span>
                <span class="info-content">{{ time.nowTime || 'UnAvailable' }}</span>
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
            let handle = this.store.algorithm[
                    this.store.algorithm.length - 1
                ]
            this.result = handle.test()
            this.info = handle.info
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
.info-container {
    text-align: left;
    width: 62vw;
}
.info-container .info:first-child {
    margin-top: 8vh;
}
.info {
    margin-top: 2em;
    font-size: 1.7vh;
    font-weight: 500;
    color: #444;
    letter-spacing: 3px;
}
.info-label {
    display: block;
    width: 15em;
    color: #555;
    font-variant: unicase;
    font-size: 1vh;
    font-weight: bolder;
}
.info-label:before {
    content: '';
    padding-left: 1em;
    width: 1em;
    height: 1em;
}
.info-content {
    display: inline-block;
    margin-top: 1em;
    text-indent: 1.5em;
    line-height: 1.4em;
    color: #444;
}
.runing-time-info {
    margin-top: 3vh;
}
.info-label {
    font-weight: bold;
}

</style>
