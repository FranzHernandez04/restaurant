<template>
    <div class="mx-auto container relative z-40 xl:px-0 px-4">
        <div class="flex items-center justify-center">
            <hr class="w-2.5 h-16 bg-color-orange" />
            <h1 class="text-4xl font-bold text-color-black pl-7">Dish<span class="text-2xl font-normal"> of the Day</span></h1>
        </div>
        <div class="flex items-center justify-center pt-12">
            <div class="relative">
                <img loading="lazy" v-bind:src="dish.image" class="relative" />
                <div class="flex items-center relative justify-center w-full lg:hidden block">
                    <div class="absolute flex items-center justify-center -mt-40 -ml-48 md:-mt-64 md:-ml-64">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/text-text.png" alt="" class="absolute md:w-48 w-40" />
                        <p class="lg:text-2xl text-xs font-bold text-white ml-8 mr-2 relative"> {{ dish.title }} </p>
                    </div>
                </div>
                <div class="absolute lg:block hidden bg-strip bottom-40 xl:left-20 left-10 xl:ml-8 xl:pt-0 pt-16">
                    <div class="flex items-center justify-center">
                        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/text-text.png" alt="" class="absolute" />
                        <div class="text-2xl font-bold text-white relative">{{dish.title}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dish: 
            {
                title: "EGG FENEL SALAD",
                image: "https://cdn.tuk.dev/assets/templates/foodies/dishofday.png"
            }
        }
    }
}
</script>