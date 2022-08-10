<template>
    <router-view :key="$route.path"/>
</template>

<script>
export default {
    name: "App",
    watch: {
        $route: {
            immediate: true,
            handler() {
                console.log("prova")
                document.title = "iFoodie | Il sito per il tuo ristorante"
            },
        },
    },
};
</script>
