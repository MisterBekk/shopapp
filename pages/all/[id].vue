<template>
    <div class="mt-20">
        <ProductDetail :product="product"/>

    </div>
</template>

<script setup>
const {id} = useRoute().params
const url = 'https://fakestoreapi.com/products/' + id
const { data: product } = await useFetch(url, {key: id})
</script>
