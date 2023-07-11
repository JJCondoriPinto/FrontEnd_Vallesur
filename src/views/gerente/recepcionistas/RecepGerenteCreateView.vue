<template>
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarGerente />
                </SidebarComponent>
                <div class="app-content">
                    <HeaderComponent>
                        <template #title> Registro de recepcionista </template>
                    </HeaderComponent>

                    <!-- aqui contenido de habitacion -->
                    <form v-on:submit.prevent="crear()">
                        <input
                            type="hidden"
                            v-model="this.recepcionista.rol"
                            name="rol"
                        />
                        <div class="form-parent card-show-parent">
                            <div class="form">
                                <div class="form-update">
                                    <div class="card-header">
                                        <p>Información recepcionista</p>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-group form-group">
                                            <label for="dni">DNI</label>
                                            <input
                                                class="form-input"
                                                placeholder="Número de DNI"
                                                type="number"
                                                name="dni"
                                                v-model="this.recepcionista.dni"
                                                required
                                            />
                                        </div>
                                        <div class="card-group form-group">
                                            <label for="nombres">Nombres</label>
                                            <input
                                                class="form-input"
                                                placeholder="Nombres de recepcionista"
                                                type="text"
                                                name="nombres"
                                                v-model="
                                                    this.recepcionista.nombres
                                                "
                                                required
                                            />
                                        </div>
                                        <div class="card-group form-group">
                                            <label for="apellidos"
                                                >Apellidos</label
                                            >
                                            <input
                                                class="form-input"
                                                placeholder="Apellidos de recepcionista"
                                                type="text"
                                                name="apellidos"
                                                v-model="
                                                    this.recepcionista.apellidos
                                                "
                                                required
                                            />
                                        </div>
                                        <div class="card-group form-group">
                                            <label for="telefono"
                                                >Telefono</label
                                            >
                                            <input
                                                class="form-input"
                                                placeholder="Telefono de recepcionista"
                                                type="tel"
                                                name="telefono"
                                                v-model="
                                                    this.recepcionista.telefono
                                                "
                                                required
                                            />
                                        </div>
                                        <div class="card-group form-group">
                                            <label
                                                for="turno"
                                                class="form-label label-radio"
                                                >Turno</label
                                            >
                                            <div class="form-radio">
                                                <div class="radio-group">
                                                    <input
                                                        class="form-input"
                                                        type="radio"
                                                        name="turno"
                                                        v-model="
                                                            this.recepcionista
                                                                .turno
                                                        "
                                                        value="Mañana"
                                                    />
                                                    <span>Mañana</span>
                                                </div>
                                                <div class="radio-group">
                                                    <input
                                                        class="form-input"
                                                        type="radio"
                                                        name="turno"
                                                        v-model="
                                                            this.recepcionista
                                                                .turno
                                                        "
                                                        value="Tarde"
                                                    />
                                                    <span>Tarde</span>
                                                </div>
                                                <div class="radio-group">
                                                    <input
                                                        class="form-input"
                                                        type="radio"
                                                        name="turno"
                                                        v-model="
                                                            this.recepcionista
                                                                .turno
                                                        "
                                                        value="Noche"
                                                    />
                                                    <span>Noche</span>
                                                </div>
                                                <div class="radio-group">
                                                    <input
                                                        class="form-input"
                                                        type="radio"
                                                        name="turno"
                                                        v-model="
                                                            this.recepcionista
                                                                .turno
                                                        "
                                                        value="FinesSemana"
                                                    />
                                                    <span>Otros</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form">
                                <div class="form-update">
                                    <div class="card-header">
                                        <p>Datos de usuario</p>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-group form-group">
                                            <label for="correo">Correo</label>
                                            <input
                                                class="form-input"
                                                placeholder="Correo de recepcionista"
                                                type="email"
                                                name="correo"
                                                v-model="
                                                    this.recepcionista.email
                                                "
                                                required
                                            />
                                        </div>
                                        <div class="card-group form-group">
                                            <label for="contrasena"
                                                >Contraseña</label
                                            >
                                            <input
                                                class="form-input"
                                                type="password"
                                                placeholder="Contraseña"
                                                name="contrasena"
                                                id="contrasena"
                                                v-model="
                                                    this.recepcionista.password
                                                "
                                                :class="{
                                                    wrong: !correctPassword(),
                                                }"
                                            />
                                        </div>
                                        <div class="card-group form-group">
                                            <label for="contrasena-confirm"
                                                >Confirmar Contraseña</label
                                            >
                                            <input
                                                class="form-input"
                                                type="password"
                                                placeholder="Confirmar contraseña"
                                                name="contrasena-confirm"
                                                id="contrasena-confirm"
                                                v-model="
                                                    this.recepcionista
                                                        .confirmPassword
                                                "
                                                :class="{
                                                    wrong: !correctPassword(),
                                                }"
                                            />
                                        </div>
                                        <div
                                            class="card-group form-group buttons"
                                        >
                                            <button
                                                class="raise btn-green"
                                                type="submit"
                                            >
                                                Registrar recepcionista
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import ListSidebarGerente from "@/components/ListSidebarGerente.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

import axios from "axios";

export default {
    name: "RecepGerenteCreateView",
    data: () => ({
        recepcionista: {
            rol: "recepcionista", // Inmodificable
            turno: "Mañana", // Por defecto
        },
    }),
    methods: {
        correctPassword() {
            return (
                this.recepcionista.password ===
                    this.recepcionista.confirmPassword ||
                (this.recepcionista.password ===
                    this.recepcionista.confirmPassword &&
                    this.recepcionista.password === "")
            );
        },
        crear() {
            if (this.correctPassword()) {
                axios
                    .post("api/recepcionistas", this.recepcionista)
                    .then((res) => {
                        if (res.status == 200) {
                            this.$router.push({ name: "gerente-recepcionistas" });
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                alert("Contraseñas no coinciden");
            }
        },
    },
    components: {
        SidebarComponent,
        ListSidebarGerente,
        HeaderComponent,
    },
};
</script>

<style>
@import url("@/css/app.css");
</style>
