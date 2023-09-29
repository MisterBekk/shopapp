<template>
    <div>
        <div class="container mx-auto mt-5 flex flex-col md:flex-row lg:px-32">
            <div class="p-7 md:w-2/5">
                <img :src="product.image" alt="product img " class="mx-auto mt-5 w-52">
            </div>
            <div class="p-5 md:w-3/5 md:p-7">
                <h2 class="text-4xl my-3">{{ product.title }}</h2>
                <p class="text-[#D96528] font-semibold text-xl my-7">${{ product.price }}</p>
                <h3 class="font-bold border-b-2 pb-2">Product Description:</h3>
                <p class="mt-5">{{ product.description }}</p>

                <div class="flex mt-5">
                    <button class="bg-black px-5 h-10 text-white" @click="decreaseItemAmount()">
                        -
                    </button>
                    <input type="text" disabled  class="border w-16 border-black mx-2 pl-6" v-model.number="productCount">
                    <button class="bg-black px-5 h-10 text-white" @click="productCount++">
                        +
                    </button>
                </div>

                <button class="bg-gray-700 px-3 py-3 rounded text-white flex mt-5">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span @click="addToCart">Add to Card</span>
                </button>
            </div>
        </div>

        <div class="container mx-auto mt-10 p-5 lg:px-10">
            <div class="border-t-2">
                <h2 class="font-medium text-2xl font-serif mt-5">Reviews</h2>
                <p class="font-medium text-[#D96528] text-[17px] mt-2">Category - <span class="font-normal">
                        {{ product.category }}</span>
                </p>
                <p class="font-thin text-[17px] mt-3">Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Praesentium consequatur
                    esse veniam, beatae quas nobis magni possimus dolorem aliquam tempora
                    accusantium quibusdam. Tempore itaque suscipit deleniti, quas beatae
                    voluptates nam.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
const productCount = ref(1)

const decreaseItemAmount = () => {
    productCount.value = productCount.value - 1
    if (productCount.value < 1) {
        productCount.value = 1
    }
}
</script>

