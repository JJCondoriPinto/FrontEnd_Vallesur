<template>
    <div
        class="modal fade modal-sm"
        id="Habitaciones"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-top">
            <div
                class="modal-content"
                style="background: var(--app-content-secondary-color)"
            >
                <div class="modal-header">
                    <h1
                        class="modal-title fs-5 text-white"
                        id="staticBackdropLabel"
                    >
                        Confirmar
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        id="close"
                    ></button>
                </div>

                <div class="modal-body">
                    <h5 class="text text-light">
                        Esta seguro que desea eliminar esta reserva?
                    </h5>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        id="cerrar"
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        class="btn btn-danger"
                        @click="eliminarReserva"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
    props: ["id"],
    data() {
        return {
            vueComponent: this,
        };
    },
    methods: {
        eliminarReserva() {
            axios
                .delete("api/reserva", {
                    params: {
                        id: this.id,
                    },
                })
                .then((value) => {
                    console.log(value);
                    $("#cerrar").click();
                    this.vueComponent.$router.push({
                        name: "recepcionista-reservas",
                    });
                })
                .catch((e) => {
                    console.log(e);
                    console.log(this.id);
                });
        },
    },
};
</script>
