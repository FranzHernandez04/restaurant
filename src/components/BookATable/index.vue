<template>
    <div class="book-widht relative mx-auto container mt-28 lg:block hidden" id="book">
        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/book-bg.png" class="absolute z-0 object-center object-fit h-full w-full" />
        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/book1.png" class="absolute left-0 top-0 -mt-24 -ml-24" />
        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/book-2.png" class="absolute right-0 bottom-0 -mb-24 -mr-28" />
        <div class="relative z-10">
            <div class="flex items-center justify-center pt-14">
                <hr class="w-2.5 h-16 bg-color-orange" />
                <h1 class="text-4xl font-bold text-color-black pl-7">Prenota<span class="text-2xl font-normal"> un tavolo </span></h1>
            </div>
            <div class="flex items-center justify-center pt-14">
               <label>L'invio della richiesta non corrisponde all'avvenuta prenotazione, bisogna aspettare una conferma da parte del ristorante</label>
            </div>
            <div class="flex flex-col items-center justify-center pt-16">
                <div class="flex items-start flex-wrap px-8">
                    <div class="flex flex-col">
                        <label class="text-2xl text-color-black pb-4">Data</label>
                        <input class="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                        <div class="flex flex-col pr-12 py-12">
                            <label class="text-2xl text-color-black pb-4">Nome</label>
                            <input class="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-2xl text-color-black pb-4">Orario</label>
                        <input class="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                        <div class="flex flex-col pr-12 py-12">
                            <label class="text-2xl text-color-black pb-4">Numero di cellulare</label>
                            <input class="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-2xl text-color-black pb-4">N ospiti</label>
                        <input class="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                        <div class="flex flex-col pr-12 py-12">
                            <label class="text-2xl text-color-black pb-4">Email</label>
                            <input class="py-5 w-64 pl-4 border rounded-lg border-color-black" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center py-12">
                <button class="py-3 px-12 border border-color-orange text-white bg-color-orange hover:opacity-90 b-r-10 focus:outline-none">Chiedi disponibilit??</button>
            </div>
        </div>
    </div>
    <!-- mobile -->
    <div class="lg:hidden block relative mx-auto container mt-44" id="book-mobile">
        <img loading="lazy" src="https://cdn.tuk.dev/assets/templates/foodies/book-bg.png" class="absolute z-0 object-center object-cover h-full" />
        <div class="relative z-10 px-4 flex flex-col items-center justify-center">
            <div class="flex items-center justify-center pt-14">
                <hr class="w-2.5 h-16 bg-color-orange" />
                <h1 class="text-4xl font-bold text-color-black pl-7"><span class="text-2xl font-normal">Prenota </span>un tavolo</h1>
            </div>
            <div class="flex items-center justify-center pt-14">
               <label class="text-justify">L'invio della richiesta non corrisponde all'avvenuta prenotazione, bisogna aspettare una conferma da parte del ristorante</label>
            </div>
            <div class="">
                <div class="flex flex-col mt-8">
                    <label class="mt-4 text-2xl text-color-black pb-4">Data</label>
                    <input class="py-3 w-full pl-4 border rounded-lg border-color-black" />
                </div>
                <div class="flex flex-col">
                    <label class="mt-4 text-2xl text-color-black pb-4">Orario</label>
                    <input class="py-3 w-full pl-4 border rounded-lg border-color-black" />
                </div>
                <div class="flex flex-col">
                    <label class="mt-4 text-2xl text-color-black pb-4">N ospiti</label>
                    <input class="py-3 w-full pl-4 border rounded-lg border-color-black" />
                </div>
                <div class="flex flex-col">
                    <label class="mt-4 text-2xl text-color-black pb-4">Nome</label>
                    <input class="py-3 w-full pl-4 border rounded-lg border-color-black" />
                </div>
                <div class="flex flex-col">
                    <label class="mt-4 text-2xl text-color-black pb-4">Numero di cellulare</label>
                    <input class="py-3 w-full pl-4 border rounded-lg border-color-black" />
                </div>
                <div class="flex flex-col">
                    <label class="mt-4 text-2xl text-color-black pb-4">Email</label>
                    <input class="py-3 w-full pl-4 border rounded-lg border-color-black" />
                </div>
            </div>
            <div class="flex items-center justify-center py-12">
                <button class="py-3 px-12 border border-color-orange text-white bg-color-orange hover:opacity-90 b-r-10 focus:outline-none">Chiedi disponibilit??</button>
            </div>
        </div>
    </div>
</template>