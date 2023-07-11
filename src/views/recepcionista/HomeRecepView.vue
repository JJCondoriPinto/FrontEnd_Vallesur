<template>
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarRecepcionista />
                </SidebarComponent>

                <div class="app-content">
                    <HeaderComponent>
                        <template #title>
                            Bienvenido(a) {{ this.$store.state.user.nombres }}
                        </template>
                    </HeaderComponent>
                    <div class="container-fluid scrollable-content">
                        <div class="image-container">
                            <img
                                src="https://lh3.googleusercontent.com/p/AF1QipMPTmdNgB4yKSqEMHeYtmydE_eXebjo0tngyf7x=w1080-h608-p-no-v0"
                                alt="Descripción de la imagen"
                            />
                        </div>
                        <ul>
                            <li class="card-home-color">
                                <div
                                    class="card card-home-color card-green col-md-12"
                                >
                                    <p class="card-question">
                                        Early Check in: 6 a 12 Pm Late Check
                                        out: Hasta 08:00 Pm
                                    </p>
                                    <div class="card-separator"></div>
                                </div>
                            </li>

                            <li>
                                <div
                                    class="card card-home-color card-green col-md-12"
                                >
                                    <p class="card-question">
                                        SOLICITUD DE DATOS
                                    </p>
                                    <div class="card-separator"></div>
                                    <p class="card-fonter">
                                        1. Nombre completo
                                    </p>
                                    <div class="card-separator"></div>
                                    <div class="card-separator"></div>
                                    <p class="card-fonter">2. N° de DNIT</p>
                                    <div class="card-separator"></div>
                                    <div class="card-separator"></div>
                                    <p class="card-fonter">
                                        3. cantidad de personas que ingresaran a
                                        la habitación
                                    </p>
                                    <div class="card-separator"></div>
                                    <div class="card-separator"></div>
                                    <p class="card-fonter">
                                        4.Hora aproximada de ingreso
                                    </p>
                                    <div class="card-separator"></div>
                                    <div class="card-separator"></div>
                                    <p class="card-fonter">
                                        5. indicar si necesitara la reserva de
                                        un espacio en la cochera"
                                    </p>
                                    <div class="card-separator"></div>
                                </div>
                            </li>

                            <li>
                                <div
                                    class="card card-home-color card-blue col-md-12"
                                >
                                    <p class="card-question">
                                        NO OLVIDAR: MODIFICAR DISPONIBILIDAD EN
                                        BOOKING CUANDO SE CONFIRMEN RESERVAS POR
                                        LLAMADA, CORREO O WHATSAPP
                                    </p>
                                    <div class="card-separator"></div>
                                </div>
                            </li>

                            <li>
                                <div
                                    class="card card-home-color card-blue col-md-12"
                                >
                                    <p class="card-question">
                                        NO OLVIDAR: NO RECIBIR PERSONAS EN
                                        COMPLETO ESTADO ETILICO.
                                    </p>
                                    <div class="card-separator"></div>
                                </div>
                            </li>

                            <li>
                                <div
                                    class="card card-home-color card-red col-md-12"
                                >
                                    <p class="card-question">
                                        IMPORTANTE!: NO VENDER HABITACIONES
                                        DOBLES (206 Y 301) A MENOS DE S/180.00
                                    </p>
                                    <div class="card-separator"></div>
                                    <p class="card-fonter">
                                        se debe indicar al huesped que no debe
                                        utilizar ni colocar cosas sobre la cama
                                        de 11/2 plzs, de lo contrario se le
                                        cobrara la tarifa completa
                                    </p>
                                    <div class="card-separator"></div>
                                </div>
                            </li>

                            <li>
                                <div
                                    class="card card-home-color card-red col-md-12"
                                >
                                    <p class="card-question">
                                        MPORTANTE!: SUPERVISAR Y VERIFICAR QUE
                                        LAS HABITACIONES CUMPLAN CON LOS
                                        ESTANDARES DE CALIDAD.
                                    </p>
                                    <div class="card-separator"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ListSidebarRecepcionista from "@/components/ListSidebarRecepcionista.vue";

export default {
    name: "HomeRecepView",
    components: {
        SidebarComponent,
        ListSidebarRecepcionista,
        HeaderComponent,
    },
};
</script>

<style>
@import url("@/css/app.css");
</style>
