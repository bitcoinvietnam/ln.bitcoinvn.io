<template>
  <div class="py-8 md:py-14">
    <div class="py-4 text-gray-800 bg-yellow-300 rounded-lg md:py-10">
      <div class="flex flex-col justify-center md:flex-row">
        <div v-for="number in nodeNumbers" :key="number.caption">
          <div class="px-0 py-5 space-y-2 NumberBox sm:px-8 md:py-0">
            <div class="text-xl ">
              {{ number.caption }}
            </div>
            <div v-if="(number.source === 'mempool' && mempoolLoading) || (number.source === 'amboss' && ambossLoading)"
              class="LoadingNumberBox">Loading...</div>
            <div v-else class="Number">
              {{ number.value | formatNumber }}
            </div>
            <div class="text-xs font-normal">
              {{ number.unit }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mempoolLoading: Boolean,
    ambossLoading: Boolean,
    channels: Number,
    capacity: Number,
    avgOutgoing: Number,
    avgIncoming: Number,
    avgChannelSize: Number,
    weightedAvgFeeRate: Number
  },
  data() {
    return {
      nodeNumbers: [
        {
          caption: 'Number of Channels',
          value: this.channels,
          unit: 'channels',
          source: 'mempool'
        },
        {
          caption: 'Capacity',
          value: this.capacity,
          unit: 'sats',
          source: 'mempool'
        },
        {
          caption: 'Average Channel Size',
          value: this.avgChannelSize,
          unit: 'sats',
          source: 'amboss'
        },
        {
          caption: 'Average Fee Rate',
          value: this.weightedAvgFeeRate,
          unit: 'sats ppm',
          source: 'amboss'
        }
      ]
    }
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.NumberBox {
  @apply flex flex-col text-center font-bold;
}

.Number {
  @apply text-2xl font-bold
}

.LoadingNumberBox {
  @apply flex flex-col text-center px-5 italic;
}
</style>
