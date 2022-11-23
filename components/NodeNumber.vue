<template>
    <div class="py-8 md:py-14">
        <div class="bg-yellow-300 text-gray-800 py-4 md:py-10">
            <div class="flex flex-col md:flex-row justify-center">
                <div v-for="number in nodeNumbers">
                    <div class="NumberBox px-0 sm:px-8 py-4 md:py-0">
                        <div v-if="loading" class="LoadingNumberBox">Loading...</div>
                        <div v-else class="Number">
                            {{ number.value | formatNumber }}
                        </div>
                        <div class="Caption">
                            {{ number.caption }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        loading: Boolean,
        channels: Number,
        capacity: Number
    },
    data () {
      return {
        nodeNumbers: [
            {
                caption: 'Number of Channels',
                value: this.$props.channels
            },
            {
                caption: 'Capacity',
                value: this.capacity
            },
            {
                caption: 'Some Index',
                value: 0
            },
            {
                caption: 'Some Index',
                value: 0
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

.NumberBox {
    @apply flex flex-col text-center;
}

.Number {
    @apply text-2xl font-bold
}

.Caption {}

.LoadingNumberBox {
    @apply flex flex-col text-center px-5 italic;
}
</style>