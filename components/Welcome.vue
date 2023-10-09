<template>
  <div class="rounded-lg bg-gradient-to-br from-yellow-100 to-gray-100/90">
    <div class="text-gray-800">
      <div class="flex flex-col px-8 text-center md:float-left md:max-w-md">
        <div class="py-8 text-3xl font-bold text-left break-words md:py-10">
          Connect to the BitcoinVN Lightning Node
        </div>
        <div class="text-left ">
          Status:
          <span v-if="loading" class="text-2xl italic font-bold">Loading...</span>
          <span v-else-if="status === 1" class="text-2xl font-extrabold text-green-500">Online</span>
          <span v-else-if="status === 0" class="text-2xl font-bold text-red-500">Offline</span>
        </div>
        <div class="py-8 text-center md:text-left md:py-7">
          <NuxtLink to="#connect">
            <button
              class="w-48 px-3 py-3 font-bold text-gray-800 uppercase bg-yellow-300 border rounded-lg min-w-fit hover:border-yellow-300 hover:bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300">Connect
              Node</button>
          </NuxtLink>
        </div>
        <div class="text-xs text-center text-gray-600 md:text-left md:pb-7">
          <span>
            View on
            <a href="
                        https://mempool.space/lightning/node/026af41af0e3861ba170cc0eef8f45a1015125dac57c28df53752dcaeea793b28f"
              target="_blank" class="hover:text-black">
              Mempool.Space
              <ExternalLinkLogo class="ExternalLink" />
            </a>
            or
            <a href="https://twitter.com/Bitcoin_Vietnam/status/1595311782813663233" target="_blank"
              class="hover:text-black">
              Twitter
              <ExternalLinkLogo class="ExternalLink" />
            </a>
          </span>
        </div>
      </div>
      <div class="flex flex-col justify-end px-10 py-10 text-right md:float-right">
        <div v-for="info in mainInfo" :key="info.caption">
          <div class="NodeDetailCaption">
            {{ info.caption }}
          </div>
          <div class="NodeDetailText">
            {{ info.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalLinkLogo from '~/assets/external-link.svg'
export default {
  components: {
    ExternalLinkLogo
  },
  props: {
    status: Number,
    loading: Boolean
  },
  data() {
    return {
      mainInfo: [
        {
          caption: 'Node Name',
          value: 'BitcoinVN 22'
        },
        {
          caption: 'TOR Address',
          value: '026af41af0e3861ba170cc0eef8f45a1015125dac57c28df53752dcaeea793b28f@w45nnr3ypc3ry5mwyfagrw3vp7aj6rnwjh4ujzmehsnqtefo6vxh5uyd.onion:9735'
        },
        {
          caption: 'Node Public Key',
          value: '026af41af0e3861ba170cc0eef8f45a1015125dac57c28df53752dcaeea793b28f'
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

.NodeDetailCaption {
  @apply py-2 font-bold text-center text-dark-blue-2;
}

.NodeDetailText {
  @apply text-justify py-2 text-white bg-white text-dark-blue-2 px-2 rounded-lg break-all max-w-lg text-sm font-bold;
}

@media screen(md) {
  .NodeDetailCaption {
    @apply text-right;
  }

  .NodeDetailText {
    @apply text-right;
  }
}
</style>
