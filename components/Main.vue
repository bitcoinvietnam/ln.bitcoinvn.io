<template>
  <div id="home" class="font-sans-serif">
    <!-- Header -->
    <Header />

    <!-- Main welcome section -->
    <div
      class="flex flex-col justify-center px-5 sm:px-10 md:px-48 sm:py-8 md:py-14 bg-gradient-to-r from-dark-blue via-dark-blue-2 to-dark-blue">
      <Welcome :status="this.status" :loading="this.loading" />

      <!-- Some numbers of Node -->
      <NodeNumber :loading="this.loading" :channels="this.channels" :capacity="this.capacity" :avgOutgoing="this.avgOutgoing" :avgIncoming="this.avgIncoming" />

      <!-- Information about Lightning Network -->
      <LightningInfo />

    </div>
    <!-- Call-To-Action Connect Node -->
    <ConnectNode />

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
  data () {
    return {
      loading: false,
      status: null,
      channels: null,
      capacity: null,
      avgOutgoing: null,
      avgIncoming: null,
      copiedMsg: 'Copied'
    }
  },
  activated () {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  async fetch () {
    this.loading = true

    // Get stats from Mempool.Space
    const mempoolStats = await fetch('https://mempool.space/api/v1/lightning/search?searchText=BitcoinVN').then(res => res.json())
    const node = mempoolStats.nodes[0] // Node BitcoinVN 22
    this.capacity = node.capacity
    this.channels = node.channels
    this.status = node.status

    // Get stats from Amboss.Space, via BVN General Crawler
    const ambossStats = await fetch('https://bvn-general-crawler.fly.dev/bitcoinvn_22').then(res => res.json())
    const result = ambossStats.result // { avgOutgoingSats, avgIncomingSats }
    this.avgOutgoing = result.avgOutgoingSats
    this.avgIncoming = result.avgIncomingSats

    this.loading = false
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
