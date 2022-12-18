<template>
    <div class="py-4 md:py-10">
        <div class="bg-white rounded-sm">
            <div v-for="info in infoList" class="even:bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100">
                <div class="InfoBox px-2 py-2 flex-col md:px-5 md:flex-row">
                    <div class="InfoTitle py-2 md:py-0 md:min-w-max md:float-left md:w-2/3 md:px-5">
                        {{ info.title }}
                    </div>
                    <div class="InfoContent sm:text-justify md:text-left md:float-right">
                        {{ info.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            infoList:[
             {
                title: 'What is the Lightning Network',
                img: '',
                content: 'The most popular cryptocurrency in the world today is, of course, the oldest one, Bitcoin. But there is still the question, "Will Bitcoin be able to handle millions of daily transactions as more people adopt the cryptocurrency?" The answer to this question might come in the form of the Lightning Network. The second layer technology for Bitcoin has the capability of boosting the number of transactions on the cryptocurrency per second while keeping the fees minuscule. For more information you can read a primer on the advantages of the Lightning Network on BitcoinVN News [hyperlink: https://news.bitcoinvn.io/lightning-networks-advantages-as-payment-technology/ '
             }   ,
             {
                 title: 'How It Works',
                 img: '',
                 content: 'The Bitcoin Blockchain is on purpose relatively low throughput in order to avoid centralization pressures compromising the security of the network. As such it is not very useful as a payments network. Furthermore the audibility of the Bitcoin blockchain reveals and broadcasts any single transaction to the whole world. While this guarantees for no hidden monetary inflation, the Bitcoin Blockchain is not a very privacy-preserving tool for value transfers. The Lightning Network remedies these issues in part by Storing payment information only with the peers in the Lightning Network (the Bitcoin blockchain serves solely as settlement layer) Keeping payment information private between the connected peers in the Lightning Network (no public visibility) The Lightning Network therefore circumvents the issue that otherwise every single payment would be stored on the Bitcoin Blockchain (requiring huge bandwidth and storage), while avoiding to announce such payments to the whole world. The TL, DR: The Lightning Network enhances the scalability and privacy of the Bitcoin Network while keeping the Bitcoin base layer unchanged.'
                }   ,
                {
                   title: 'Benefits of Lightning Network',
                   img: '',
                   content: 'Lightining Transactions settle generally within a few seconds maximum. You can see an example transaction in practice here [hyperlink: https://odysee.com/@FreedomVideos_and_more:2/tacos-in-vietnam-lightning-neutronpay:c] You can also fund any Vietnamese [hyperlink: https://bitcoinvn.io/?deposit=btcln&settle=vnd] or Russian bank account [hyperlink: https://bitcoinvn.io/?deposit=btcln&settle=rubbankcard] via the services of BitcoinVN. Thats for the two boxes (and maybe make that line here in bold: "The TL, DR: The Lightning Network enhances the scalibity and privacy of the Bitcoin Network while keeping the Bitcoin base layer unchanged.'
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

.InfoBox {
    @apply flex;
}

.InfoTitle {
    @apply font-bold text-xl text-yellow-600 max-w-lg;
}

.InfoContent {
    @apply max-w-md;
}
</style>