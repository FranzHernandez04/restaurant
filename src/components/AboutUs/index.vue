<template>
    <div class="my-10">
        <div class="flex items-center justify-center mb-10">
            <hr class="w-2.5 h-16 bg-color-orange" />
            <h1 class="text-4xl font-bold text-color-black pl-7">Riguardo<span class="text-2xl font-normal"> noi</span></h1>
        </div>
        <div class="items-center justify-center xl:flex hidden">
            <div class="relative">
                <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-menu.png" class="absolute left-0 top-0 z-0 h-52 w-56" />
                <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-1.png" class="mt-8 ml-8 relative z-10 abt-us-img" />
                <div class="flex items-center transform -rotate-90 absolute left-0 bottom-0 -ml-20 mb-36">
                    <p class="text-lg font-semibold leading-snug text-justify text-color-orange mr-2">Ristorante</p>
                    <hr class="w-12 bg-color-orange h-1 border-color-orange mr-8" />
                </div>
            </div>
            <div class="about-us-card py-14 px-7 border border-color-black mx-10">
                <p class="text-2xl font-bold text-black text-center">Chi siamo</p>
                <p class="text-base leading-7 text-justify text-color-gray pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloribus alias iste eligendi est itaque ducimus atque voluptatem recusandae consectetur fugiat, inventore eos mollitia totam asperiores tenetur. Similique, laudantium mollitia.</p>
            </div>

            <div class="relative">
                <img loading="lazy" src="@/assets/img/chef.jpg" class="abt-us-img -mt-8 mr-8 relative z-10" />
                <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/bg-menu.png" class="absolute bottom-0 right-0 -mb-8 z-0 h-64" />
                <div class="flex items-center transform -rotate-90 absolute right-0 top-0 -mr-14">
                    <hr class="w-12 bg-color-orange h-1 border-color-orange mr-2" />
                    <p class="text-lg font-semibold leading-snug text-justify text-color-orange mr-8">Chef</p>
                </div>
            </div>
        </div>
        <!-- mobile -->
        <div class="items-center justify-center xl:hidden flex flex-col px-4">
            <div class="">
                <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/about-us-1.png" />
                <div class="flex items-center justify-end my-2">
                    <hr class="w-12 bg-color-orange h-1 border-color-orange mr-8" />
                    <p class="text-lg font-semibold leading-snug text-justify text-color-orange mr-2">Ristorante</p>
                </div>
            </div>
            <div class="py-14 px-7 border border-color-black my-4">
                <p class="text-2xl font-bold text-black text-center">Chi siamo</p>
                <p class="text-base leading-7 text-justify text-color-gray pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ab atque accusamus dolorum deleniti quaerat rerum voluptatum saepe iure perspiciatis placeat impedit, minus, non repudiandae qui dolores magnam? Sequi, numquam.</p>
            </div>

            <div class="">
                <img loading="lazy" src="@/assets/img/chef.jpg" />
                <div class="flex items-center justify-end right-0 top-0 my-2">
                    <hr class="w-12 bg-color-orange h-1 border-color-orange mr-8" />
                    <p class="text-lg font-semibold leading-snug text-justify text-color-orange">Chef</p>
                </div>
            </div>
        </div>
        <!-- mobile -->
    </div>
</template>