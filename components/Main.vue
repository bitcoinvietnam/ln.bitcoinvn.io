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
            :avgChannelSize="this.avgChannelSize" :avgFeeRate="this.avgFeeRate" />
        </client-only>
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
      avgFeeRate: null,
      copiedMsg: 'Copied'
    }
  },
  activated() {
    // Call fetch again if last fetch more than 5 mins ago
    // if (this.$fetchState.timestamp <= Date.now() - 5 * 60000) {
    this.$fetch()
    // }
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
        const resp = await fetch('https://mempool.space/api/v1/lightning/channels?public_key=026af41af0e3861ba170cc0eef8f45a1015125dac57c28df53752dcaeea793b28f&status=active&index=' + i).then(res => res.json())
        channelStats[i] = resp
        await new Promise(resolve => setTimeout(resolve, 100))
      }
      channelStats = channelStats.flat().slice(0, node.channels)
      const sumFee = channelStats.map(stat => stat.fee_rate).reduce((a, b) => a + b, 0)
      this.avgFeeRate = Math.round(sumFee / channelStats.length)

      // Finish loading data from Mempool
      this.mempoolLoading = false

      // Get stats from Amboss.Space, via BVN General Crawler
      // const ambossStats = await fetch('https://bvn-general-crawler.fly.dev/bitcoinvn_22').then(res => res.json())
      // const result = ambossStats.result // { avgOutgoingSats, avgIncomingSats }
      // this.avgOutgoing = result.avgOutgoingSats
      // this.avgIncoming = result.avgIncomingSats
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
