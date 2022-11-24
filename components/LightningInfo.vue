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
                content: 'The most popular cryptocurrency in the world today is, of course, the oldest one, Bitcoin. But there is still the question, "Will Bitcoin be able to handle millions of daily transactions as more people adopt the cryptocurrency?" The answer to this question might come in the form of the Lightning Network. The second layer technology for Bitcoin has the capability of boosting the number of transactions on the cryptocurrency per second while keeping the fees minuscule.'
             }   ,
             {
                title: 'Benefits of Lightning Network',
                img: '',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
             }   ,
             {
                title: 'How It Works',
                img: '',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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