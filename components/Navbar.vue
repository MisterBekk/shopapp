<template>
    <nav class="py-3 px-5 fixed left-0 right-0 top-0 z-50 bg-white text-gray-500 font-thin flex justify-between shadow-md">
        <!-- Title  -->
        <h1 class="text-3xl font-medium "><nuxt-link to="/">Skyline Ivy</nuxt-link></h1>

        <div class="flex">
            <!-- Category Section  -->
            <div class="relative mr-5">
                <div class="w-44 flex justify-between p-2 bg-slate-100 cursor-pointer rounded" @click="chooseCategory">
                    <p>Choose Category</p>
                    <i class="material-icons" v-if="!showCategory">
                        expand_more
                    </i>
                    <i class="material-icons" v-else>
                        expand_less
                    </i>
                </div>
                <transition name="fade">
                    <div v-show="showCategory" class="z-10 w-44 rounded shadow bg-white absolute top-12">
                        <ul class="py-1 text-sm text-gray-700border">

                            <li>
                                <nuxt-link to="/all"
                                    class="block text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All
                                    Products
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/women"
                                    class="block text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Women's
                                    Products
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/men"
                                    class="block text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Men's
                                    Products
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>

            <div class="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100" @click="openCart">
                <i class="material-icons text-lg text-center">add_shopping_cart</i>
            </div>

            <ShoppingCart v-if="ModalView">
                <button @click="openCart">
                    Close Modal
                </button>
            </ShoppingCart>
        </div>
    </nav>
</template>

<script setup>
const showCategory = ref(false);
const ModalView = ref(false)

const chooseCategory = () => {
    showCategory.value = !showCategory.value
}

const openCart = () => {
    ModalView.value = !ModalView.value
    showCategory.value = false
}
</script>

<style>
.router-link-active {
    color: teal;
    font-weight: 600;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-out;
}
</style>
