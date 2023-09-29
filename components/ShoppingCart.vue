<template>
    <div class="fixed inset-0 shadow-md bg-black bg-opacity-80">
        <div class="bg-white w-11/12 mx-auto mt-16 rounded-2xl h-[80vh] p-5 overflow-y-auto scrollbar-hide">
             
            <slot/>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>

