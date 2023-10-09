<template>
  <div id="home" class="font-sans-serif">
    <!-- Header -->
    <Header />

    <!-- Main welcome section -->
    <div
      class="flex flex-col justify-center px-5 py-8 md:px-48 md:py-10 bg-gradient-to-r from-dark-blue via-dark-blue-2 to-dark-blue">
      <Welcome :status="this.status" :loading="this.mempoolLoading" />

      <!-- Some numbers of Node -->
      <div id="stats">
        <client-only>
          <NodeNumber :mempoolLoading="this.mempoolLoading" :ambossLoading="this.ambossLoading" :channels="this.channels"
            :capacity="this.capacity" :avgOutgoing="this.avgOutgoing" :avgIncoming="this.avgIncoming"
            :avgChannelSize="this.avgChannelSize" :weightedAvgFeeRate="this.weightedAvgFeeRate" />
        </client-only>
      </div>

      <!-- CTA button -->
      <div class="text-lg font-bold tracking-wide text-center text-white align-middle ">
        Want to sell Sats to VND? <a
          href="https://bitcoinvn.io/?deposit=btcln&settle=vnd&utm_source=ln&utm_medium=website&utm_campaign=cta_button"
          class="underline" target="_blank">
          Exchange now!
        </a>
      </div>

      <!-- Information about Lightning Network -->
      <div id="info">
        <LightningInfo />
      </div>

    </div>
    <!-- Call-To-Action Connect Node -->
    <div id="connect">
      <ConnectNode />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
Vue.use(VueClipboard)
const numeral = require('numeral')
Vue.filter('formatNumber', function (value) {
  return numeral(value).format('0,0') // Example 2,912,543,109
})

export default {
  data() {
    return {
      mempoolLoading: false,
      ambossLoading: false,
      status: null,
      channels: null,
      capacity: null,
      avgOutgoing: null,
      avgIncoming: null,
      avgChannelSize: null,
      weightedAvgFeeRate: null,
      copiedMsg: 'Copied'
    }
  },
  activated() {
    // Call fetch again if last fetch more than 5 mins ago
    if (this.$fetchState.timestamp <= Date.now() - 5 * 60000) {
      this.$fetch()
    }
  },
  async fetch() {
    try {
      this.mempoolLoading = true
      this.ambossLoading = true

      // Get first fundamental stats from Mempool.Space
      const mempoolStats = await fetch('https://mempool.space/api/v1/lightning/search?searchText=BitcoinVN').then(res => res.json())
      const node = mempoolStats.nodes[0] // Node BitcoinVN 22
      this.capacity = node.capacity
      this.channels = node.channels
      this.status = node.status
      this.avgChannelSize = Math.round(node.capacity / node.channels)

      // Get channels stats
      const count = Math.floor(node.channels / 10) + 1
      let channelStats = new Array(count).fill(null)
      for (let i = 0; i <= count; i++) {
        const resp = await fetch('https://mempool.space/api/v1/lightning/channels?public_key=026af41af0e3861ba170cc0eef8f45a1015125dac57c28df53752dcaeea793b28f&status=active&index=' + i * 10).then(res => res.json())
        channelStats[i] = resp
        await new Promise(resolve => setTimeout(resolve, 100))
      }
      channelStats = channelStats.flat().slice(0, node.channels)
      const capacities = channelStats.map(stat => stat.capacity)
      const sumCapacity = capacities.reduce((a, b) => a + b, 0)
      const weightedPcnt = capacities.map(capacity => capacity / sumCapacity)
      const fees = channelStats.map(stat => stat.fee_rate)
      const weightedFee = fees.map((fee, index) => fee * weightedPcnt[index])
      const sumFee = weightedFee.reduce((a, b) => a + b, 0)
      this.weightedAvgFeeRate = Math.round((sumFee / channelStats.length) * 100) / 100

      // Finish loading data from Mempool
      this.mempoolLoading = false
      // Finish loading data from Amboss
      this.ambossLoading = false
    } catch (err) {
      this.mempoolLoading = false
      this.ambossLoading = false
    }
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.tooltip {
  @apply text-gray-800 text-xs bg-transparent;
}
</style>
