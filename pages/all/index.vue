<template>
    <div class="container mx-auto flex flex-col-reverse md:flex-row lg:px-10 mt-10">
        <div class="w-full md:w-2/3 flex flex-wrap justify-around mt-16">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product" v-if="maxPrice > product.price"  />
            </div>
        </div>
        <div class="w-full md:w-1/3 p-5 mt-10">
           <h3 class="font-medium font-serif text-[19px]">Special Sale</h3>
           <p class="text-[17px] font-thin pr-5 lg:mr-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate veritatis voluptatem praesentium deleniti facilis deserunt molestias nemo, perferendis eligendi ad? Natus voluptatum perspiciatis placeat quidem ut enim, error atque!</p>
           <h2 class="text-xl font-sans mt-5">Filter by Price:</h2>
           <p class="text-[17px] font-thin">Max Price <span class="font-semibold">${{maxPrice}}</span></p>
           <input type="range" class="mt-5 h-1 mb-6 bg-blue-400 rounded-lg appearance-none cursor-pointer " max="600" v-model.number="maxPrice">
        </div>
    </div>
</template>

<script setup>
const {data: products} = await useFetch('https://fakestoreapi.com/products')
const maxPrice = ref(600)



</script>
