<template>
    <div class="bg-dark-blue text-white text-center py-14 px-48 text-gray-400">
        <p class="float-left text-sm hover:text-white">
            © 2014 - {{ new Date().getFullYear() }} <a href="https://bitcoinvn.io" target="_blank" class="">
                BitcoinVN
            </a>
        </p>
        <p class="float-right">
            <span v-for="product in products" class="text-sm mx-2 hover:text-white">
                <a :href=product.url target="_blank">{{ product.caption }}</a>
            </span>
            <!-- 
                <span v-for="social in socials" class="text-sm">
                    <a :href=social.url><img :src=social.img width="20" height="20" class="fill-gray-300" /></a>
                </span>
            -->
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    caption: 'News',
                    url: 'https://news.bitcoinvn.io/'
                            },
                {
                    caption: 'Shop',
                    url: 'https://shop.bitcoinvn.io/'
                },
                {
                    caption: 'OTC',
                    url: 'https://otc.bitcoinvn.io/'
                },
                {
                    caption: 'BTM',
                    url: 'https://btm.bitcoinvn.io/'
                },
                {
                    caption: 'Brand',
                    url: 'https://bitcoinvietnam.zendesk.com/hc/en-us/articles/8861460486937-BitcoinVN-Brand'
                }
            ],
            socials: [{
                caption: 'Telegram',
                url: 'https://t.me/bitcoinvn_community',
               
            },
            {
                caption: 'Facebook',
                url: 'https://www.facebook.com/www.bitcoinvn.io',
                img: '~/assets/facebook.svg'
            },
            {
                caption: 'Twitter',
                url: 'https://twitter.com/Bitcoin_Vietnam'
            },
            {
                caption:'LinkedIn',
                url:'https://www.linkedin.com/company/bitcoin-vietnam'
            },
            {
                caption:'Gab',
                url:'https://gab.com/bitcoin_vietnam'
            },{
                caption: 'Odysee',
                url: 'https://odysee.com/@BitcoinVN:0'
            }
        ]
        }
    }
}
</script>