<template>
    <div class="text-center p-2 w-64 h-[300px] my-3 ">
        <img :src="product.image" alt="product thumb" class="h-24 mx-auto block">
        <p class="text-gray-500 font-bold text-xs my-3 rounded h-10">{{product.title}}</p>
        <p class="text-[#D96528] font-semibold text-xl mb-4">${{product.price}}</p>
        <NuxtLink :to="`/all/${product.id}`">
            <p class="w-32 mx-auto border-2 border-gray-700 rounded py-2 text-gray-700 hover:bg-gray-700 hover:text-white duration-500">View Items</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const {product} = defineProps(['product'])


</script>