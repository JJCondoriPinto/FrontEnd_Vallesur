<template>
    <div class="modal fade modal-sm" id="ModalInfo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-top ">
            <div class="modal-content " style="background: var(--app-content-secondary-color);">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">
                        {{ title }}
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close"></button>
                </div>

                <div class="modal-body">
                    <h5 class="text text-light">{{body}}</h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="cerrar" @click="recargar">Aceptar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['body','title'],
    methods:{
        recargar(){
            return this.$router.push({name:"recepcionista-huespedes"})
        }
    }
}
</script>