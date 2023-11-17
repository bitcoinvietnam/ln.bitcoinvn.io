<template>
    <div class="flex text-gray-800 bg-yellow-300 sm:flex-row md:flex-col">
        <div class="px-8 py-4 md:py-20 md:px-48">
            <div class="md:float-left">
                <div class="flex flex-col">
                    <div class="text-2xl font-bold md:text-4xl">
                        Connect to the BitcoinVN<br>Lightning Node
                    </div>
                    <div class="py-4 md:py-6 md:font-bold text-md md:text-lg">
                        Do You Have a Lightning Node of Your Own?<br>
                        Connect With Ours.
                    </div>
                    <div class="flex flex-col py-3 space-y-3">
                        <div class="font-bold ">
                            BitcoinVN 22
                        </div>
                        <div class="">
                            <span class="break-all bg-white border-white md:border-8" v-clipboard:copy=nodeAddress>
                                {{ nodeAddress }}
                            </span>
                        </div>
                        <div class="text-xs md:text-sm">
                            Since <a href="https://twitter.com/Bitcoin_Vietnam/status/1718311319454306391" target="_blank"
                                class="underline">Oct/23
                                whitelist only</a>. Please contact us via <a href="https://twitter.com/Bitcoin_Vietnam/"
                                target="_blank" class="underline">Twitter</a> or support@bitcoinvn.io
                            to connect.
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:float-right">
                <div class="flex flex-row justify-center px-3 py-3 bg-white rounded-md">
                    <div class="flex flex-col text-center">
                        <div class="py-3">
                            BitcoinVN 22
                        </div>
                        <div>
                            <img src="~/assets/bitcoinvn-22-qr.png" />
                        </div>
                    </div>
                    <!-- Placeholder for one more Node
                        <div class="flex flex-col">
                            <div>
                                Address 2
                            </div>
                            <div>
                                QR Image 2
                            </div>
                        </div>
                    -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodeAddress: '026af41af0e3861ba170cc0eef8f45a1015125dac57c28df53752dcaeea793b28f'
        }
    }
}
</script>
