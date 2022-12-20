<template>
    <div class="py-8 text-center text-white text-gray-400 bg-dark-blue md:py-14 md:px-48">
        <p class="text-sm hover:text-white md:float-left ">
        © 2014 - {{ new Date().getFullYear() }} BitcoinVN
        </p>
        <p class="md:float-right">
            <span v-for="branch in branches" class="mx-2 text-sm hover:text-white" :key="branch.name">
                <a :href=branch.url target="_blank">{{ branch.name }}</a>
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
  data () {
    return {
      branches: [
        {
          name: 'Exchange',
          url: 'https://bitcoinvn.io/'
        },
        {
          name: 'News',
          url: 'https://news.bitcoinvn.io/'
        },
        {
          name: 'Shop',
          url: 'https://shop.bitcoinvn.io/'
        },
        {
          name: 'OTC',
          url: 'https://otc.bitcoinvn.io/'
        },
        {
          name: 'BTM',
          url: 'https://btm.bitcoinvn.io/'
        },
        {
          name: 'Status',
          url: 'https://status.bitcoinvn.io/'
        },
        {
          name: 'Newsletter',
          url: 'https://newsletter.bitcoinvn.io/'
        }
      ],
      socials: [{
        name: 'Telegram',
        url: 'https://t.me/bitcoinvn_community'

      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/www.bitcoinvn.io',
        img: '~/assets/facebook.svg'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/Bitcoin_Vietnam'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/bitcoin-vietnam'
      },
      {
        name: 'Gab',
        url: 'https://gab.com/bitcoin_vietnam'
      }, {
        name: 'Odysee',
        url: 'https://odysee.com/@BitcoinVN:0'
      }
      ]
    }
  }
}
</script>
