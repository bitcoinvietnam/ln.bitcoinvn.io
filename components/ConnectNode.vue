<template>
    <div id="connect" class="flex sm:flex-row md:flex-col bg-yellow-300 text-gray-800">
        <div class="px-8 py-4 md:py-20 md:px-48">
            <div class="md:float-left">
                <div class="flex flex-col">
                    <div class="font-bold text-2xl md:text-4xl">
                        Connect to the BitcoinVN<br>Lightning Node
                    </div>
                    <div class="py-4 md:py-6 md:font-bold text-md md:text-lg">
                        Do You Have a Lightning Node of Your Own?<br>
                        Connect With Ours.
                    </div>
                    <div class="font-bold py-2 md:py-5">
                        BitcoinVN 22
                    </div>
                    <div class="">
                        <span class="sm:py-4 md:py-0 bg-white md:border-8 border-white break-all"
                            v-clipboard:copy=nodeAddress>
                            {{ nodeAddress }}
                        </span>
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
    data () {
        return {
            nodeAddress: '026af41af0e3861ba170cc0eef8f45a1015125dac57c28df53752dcaeea793b28f'
        }
    }
}
</script>