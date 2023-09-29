<template>
    <footer>
        <div class="w-full h-72 footer_image flex flex-col items-center justify-center px-10 mt-10">
            <h1 class="text-white text-2xl text-center">"The surprising styles of Skyline Ivy are advanced for
                all
                seasons."</h1>
            <p class="text-white font-thin mt-5">Hansel Andersen</p>
        </div>
        <!-- connections section  -->
        <div class="container px-10 mx-auto lg:px-24 h-52 flex items-center">
            <div class="w-full grid grid-cols-3 gap-1">
                <section class=" font-thin text-[17px]">
                    <p>About</p>
                    <p>Company</p>
                    <p>Location</p>
                    <p>Contact</p>
                    <p>Hours</p>
                </section>
                <section class=" font-thin text-[17px]">
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </section>
                <section>
                    <h2 class="font-semibold text-[18px]">Newsletter:</h2>
                    <input type="text" class="border border-black rounded w-10/12 h-8">
                </section>
            </div>
        </div>
        <!-- info section  -->
        <div class="bg-black">
            <p class="text-white text-center text-[18px] mx-5 py-7">This project is <span
                    class="font-semibold text-violet-300">open source on github</span>, hosted with <span
                    class="font-semibold text-violet-300">Netlify</span>, and made with love by Sarah Drasner,
                <span class="font-semibold text-violet-300">@sarah_edo (twitter)</span> & <span
                    class="font-semibold text-violet-300">@sdras (github)</span>
            </p>
        </div>
    </footer>
</template>

<style>
.footer_image {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)), url("https://cdn.cnn.com/cnnnext/dam/assets/200114150546-hanged-clothes--stock-full-169.jpg") no-repeat center center / cover;
}
</style>

