<template>
    <div class="rounded bg-gradient-to-br from-yellow-100 to-gray-300">
        <div class="text-gray-800">
            <div class="flex flex-col px-8 md:float-left md:max-w-md">
                <div class="text-left font-bold text-3xl py-8 md:py-10 break-words">
                    Connect to the BitcoinVN Lightning Node
                </div>
                <div class="text-left ">
                    Status:
                    <span v-if="loading" class="font-bold text-2xl italic">Loading...</span>
                    <span v-else-if="status === 1" class="font-extrabold text-green-500 text-2xl">Online</span>
                    <span v-else-if="status === 0" class="font-bold text-red-500 text-2xl">Offline</span>
                </div>
                <div class="text-left py-8 md:py-7">
                    <a href="#connect">
                        <button
                            class="hover:border hover:border-yellow-300 hover:bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-yellow-300 text-gray-800 rounded py-3 px-3">Connect
                            to the
                            BitcoinVN Lightning
                            Node</button>
                    </a>
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
            <div class="flex flex-col justify-end px-10 text-right md:float-right py-10">
                <div v-for="info in mainInfo">
                    <div class="NodeDetailCaption">
                        {{ info.caption }}
                    </div>
                    <div class="NodeDetailText" v-clipboard:copy="info.value">
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
    data () {
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
                },
            ]
        }
    }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.ExternalLink {
    @apply inline w-3 h-3;
}

.NodeDetailCaption {
    @apply py-2 font-bold;
}

.NodeDetailText {
    @apply py-2 text-yellow-600 break-all max-w-lg text-sm;
}
</style>