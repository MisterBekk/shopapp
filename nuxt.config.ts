// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

    app: {
        head: {
            title: "Online Shopping",

            meta: [
                {name: "description", content: "Nuxt Project Practice"}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            ]
        }
    },

})
