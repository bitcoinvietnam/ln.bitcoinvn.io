<template>
  <div id="home" class=" font-sans-serif">
    <!-- Header -->
    <Header />
    <div
      class="flex flex-col justify-center px-5 py-8 md:px-48 md:py-10 bg-gradient-to-r from-dark-blue via-dark-blue-2 to-dark-blue ">
      <!-- Information about Lightning Network -->
      <div class="px-4 py-2 space-y-2 bg-white rounded-lg min-h-fit h-[430px]">
        <div class="InfoTitle">
          Learn about Lightning Network
        </div>
        <div class="InfoText">
          <p>
            <span class="text-lg font-bold">Lightning Report 2022</span> - <a class="external-link" target="_blank"
              href="https://www.diamondhandsnode.com/">DiamondHands</a> - Vietnamese version translated
            by Team
            <a class="external-link" target="_blank"
              href="https://news.bitcoinvn.io/?utm_source=ln&utm_medium=author_link&utm_campaign=learn_page">BitcoinVN
              News</a>.
          </p>
          <p>
            Download: <a class="external-link" target="_blank"
              href="https://bitcoinvn.io/news/wp-content/uploads/2023/02/Lightning_Network_Report_EN_2022_230330.pdf?utm_source=ln&utm_medium=download_link&utm_campaign=learn_page">English
              version</a>/ <a class="external-link" target="_blank"
              href="https://bitcoinvn.io/news/wp-content/uploads/2023/02/Lightning_Network_Report_VI_2022.pdf?utm_source=ln&utm_medium=download_link&utm_campaign=learn_page">Vietnamese
              version</a>
          </p>
        </div>
        <div class="InfoText">
          <p>
            <span class="text-lg font-bold">Emergence of
              Token Layers on Bitcoin</span> - <a class="external-link" target="_blank"
              href="https://www.diamondhandsnode.com/">DiamondHands</a> - Vietnamese version translated
            by Team
            <a class="external-link" target="_blank"
              href="https://news.bitcoinvn.io/?utm_source=ln&utm_medium=author_link&utm_campaign=learn_page">BitcoinVN
              News</a>.
          </p>
          <p>
            Download: <a class="external-link" target="_blank"
              href="https://bitcoinvn.io/news/wp-content/uploads/2023/08/Final_EN_20230205_Tokens_on_Bitcoin.pdf?utm_source=ln&utm_medium=download_link&utm_campaign=learn_page">English
              version</a>/ <a class="external-link" target="_blank"
              href="https://bitcoinvn.io/news/wp-content/uploads/2023/08/Final_VI_20230828_Tokens_on_Bitcoin.pdf?utm_source=ln&utm_medium=download_link&utm_campaign=learn_page">Vietnamese
              version</a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LearnPage'
})
</script>
