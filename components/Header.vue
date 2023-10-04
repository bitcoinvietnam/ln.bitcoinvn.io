<template>
    <div class="grid py-3 bg-dark-blue place-items-center md:place-items-start md:px-48">
        <div class="flex items-center align-middle flex-rows">
            <div>
                <NuxtLink to="/">
                    <img src="~/assets/logo.webp" width="150" height="150" alt="BitcoinVN">
                </NuxtLink>
            </div>
            <!--
                            <div class="pt-1 text-xl font-black text-white">
                                Lightning
                            </div>
                        -->
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    components: { RouterLink }
}
</script>
