<template>
    <div class="py-8 md:py-14">
        <div class="py-4 text-gray-800 bg-yellow-300 md:py-10">
            <div class="flex flex-col justify-center md:flex-row">
                <div v-for="number in nodeNumbers" :key="number.caption">
                    <div class="px-0 py-4 NumberBox sm:px-8 md:py-0">
                        <div v-if="loading" class="LoadingNumberBox">Loading...</div>
                        <div v-else class="Number">
                            {{ number.value | formatNumber  }}
                        </div>
                        <div class="Caption">
                            {{ number.caption }}
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
    loading: Boolean,
    channels: Number,
    capacity: Number,
    avgOutgoing: Number,
    avgIncoming: Number
  },
  data () {
    return {
      nodeNumbers: [
        {
          caption: 'Number of Channels',
          value: this.channels
        },
        {
          caption: 'Capacity',
          value: this.capacity
        },
        {
          caption: 'Average Outgoing',
          value: this.avgOutgoing
        },
        {
          caption: 'Average Incoming',
          value: this.avgIncoming
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
    @apply flex flex-col text-center;
}

.Number {
    @apply text-2xl font-bold
}

.LoadingNumberBox {
    @apply flex flex-col text-center px-5 italic;
}
</style>
