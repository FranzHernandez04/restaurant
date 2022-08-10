<template>
    <div>
        <router-view :key="$route.path"/>
        <vue-final-modal v-model="show" classes="modal-container" content-class="modal-content">
            <span class="modal__title">Ti piace questa demo?</span>
            <div class="modal__content">
                <p>Questo sito, con i tuoi conenuti, può essere tuo a soli 250€, contattaci <a href="mailto:info@franzhernandez.it">qui</a></p>
            </div>
            <div class="modal__action">
                <a href="mailto:info@franzhernandez.it">Contattaci</a>
            </div>
        </vue-final-modal>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            timer: null,
            show: false
        }
    },
    mounted() {
        window.setInterval(() => {
            this.openModal()
        }, 10000)
    },
    methods: {
        openModal() {
            console.log("eeee")
            this.show = true
        }
    },
    beforeUnmount() {
        clearInterval(this.timer)
    },
    watch: {
        $route: {
            immediate: true,
            handler() {
                console.log("prova")
                document.title = "iFoody | Il sito per il tuo ristorante"
            },
        },
    },
};
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__action a  {
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
