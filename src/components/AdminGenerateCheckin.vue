<template>
    <div class="container-edit">
        <div class="form-parent card-show-parent">
            <div class="form">
                <form class="form-update" @submit.prevent="hacerCheckIn">
                    <input type="hidden" name="estado" value="{{ }}">
                    <div class="card-header">
                        <p>Generar Check In</p>
                    </div>
                    <div class="card-content">
                        <div class="card-group form-group">
                            <label for="notas">Notas Adicionales</label>
                            <input class="form-input" type="text" v-model="formData.nota_adicionales" name="notas" required>
                        </div>

                        <div class="card-group form-group">
                            <label>Tipo documento </label>
                            <select class="form-input" v-model="formData.tipo_dni" required>
                                <option value="Dni">DNI</option>
                                <option value="Extranjeria">Extranjeria</option>
                            </select>
                        </div>

                        <div v-if="nro_pax>0">
                            <div class="card-group form-group d-inline">
                                <label>Escanear PAX</label>
                                <div class="mt-2">
                                    <button class="btn btn-primary" @click="scanPax" :disabled="isDisabled">
                                        Registrar Acompañante {{ count + 1 }}
                                    </button>
                                </div>
                                <!-- <div v-for="(n, index) in inputCount" :key="n">
                                    <button class="btn btn-primary mt-2" @click="scanPax">Escanear Acompañante Nro {{ index +
                                        1 }}</button>
                                </div> -->
                                <div class="progress mt-3">
                                    <div class="progress-bar" role="progressbar" :style="{ width: progressPercent + '%' }"
                                        :aria-valuenow="count" aria-valuemin="0" :aria-valuemax="nro_pax">
                                        {{ count }} / {{ nro_pax }}
                                    </div>
                                </div>
                                <button class="form-input " data-bs-toggle="modal" data-bs-target="#waitModal" id="abrirModal"
                                    hidden></button>
                                <button class="form-input " data-bs-toggle="modal" data-bs-target="#confirmarModal"
                                    id="abrirModalConfirmar" hidden></button>
                            </div>
    
                            <div class="card-group form-group">
                                <label>PAX</label>
                                <div v-for="(value, index) in values" :key="index">
                                    <!-- <input class="form-input" type="text" v-model="values[index].data" /> -->
                                    <div class="card bg-primary mb-3">
                                        <div class="card-header d-flex">
                                            <h4 class="me-auto text-center">PAX {{ index + 1 }}</h4>
                                            <button class="btn btn-success me-2" @click="eliminarPax(index)"><i
                                                    class="fa-solid fa-trash"></i></button>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text text-start">
                                                Nro de Documento: {{ values[index].numero_dni }}<br>
                                                Apellido paterno: {{ values[index].paterno }}<br>
                                                Apellido materno: {{ values[index].materno }}<br>
                                                Nombres: {{ values[index].nombres }}<br>
                                                Fecha de Nacimiento: {{ values[index].fecha_nacimiento }}<br>
                                                departamento: {{ values[index].departamento }}
                                                Provincia: {{ values[index].apellidos }}<br>
                                                Distrito: {{ values[index].distrito }}<br>
                                                Direccion: {{ values[index].direccion }}<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="confirmarModal" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content " style="background: var(--app-content-secondary-color);">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">
                                             Datos del acompañante 😎
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                            id="closeModalConfirmar"></button>
                                    </div>

                                <form class="form-update" >
                                    <div class="modal-body text-start">
                                        <div v-if="FotoEcaneada">
                                            <div class="card-group form-group">
                                                <label>numero de dni</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.numero_dni"
                                                     required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>apellido paterno</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.paterno"
                                                    required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>apellido materno</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.materno"
                                                    required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>nombres</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.nombres"
                                                    required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Fecha de Nacimiento</label>
                                                <input class="form-input" type="text"
                                                    v-model="resultadoEscaner.fecha_nacimiento" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>departamento</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.departamento"
                                                    required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>provincia</label>
                                                <input class="form-input" type="text"
                                                    v-model="resultadoEscaner.provincia" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>distrito</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.distrito"
                                                    required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Dirección</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.direccion"
                                                    required>
                                            </div>
                                            <div v-if="showAlertModal" class="alert alert-danger" role="alert">
                                                    Debes ingresar todos los datos del acompañante, ingresa los correctos
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                                    id="cerrar">Cancelar</button>
                                                <button type="button" class="btn btn-success"
                                                    @click="addValue(resultadoEscaner)">Confirmar Datos</button>
                                            </div>

                                            <!-- <button @click="addValue(resultadoEscaner)"> Añadir Pax</button> -->
                                        </div>

                                        <div v-else>
                                            <div class="card-group form-group">
                                                <label>Número de DNI</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.numero_dni" name="numero_dni" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Apellido Paterno</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.paterno" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Apellido Materno</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.materno" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Nombres</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.nombres" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Fecha de Nacimiento</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.fecha_nacimiento" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Departamento</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.departamento" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Provincia</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.provincia" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Distrito</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.distrito" required>
                                            </div>
                                            <div class="card-group form-group">
                                                <label>Dirección</label>
                                                <input class="form-input" type="text" v-model="resultadoEscaner.direccion" required>
                                            </div>
                                            <div v-if="showAlertModal" class="alert alert-danger" role="alert">
                                                    Debes ingresar todos los datos del acompañante, ingresa los correctos
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                                    id="cerrar">Cancelar</button>
                                                <button type="button" class="btn btn-success"
                                                    @click="confirmarDatos">Confirmar Datos</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                 </form>
                            </div>
                                    <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                            id="cerrar">Cancelar</button>
                                        <button type="button" class="btn btn-success"
                                            @click="addValue(resultadoEscaner)">Confirmar Datos</button>
                                    </div> -->
                        </div>
                    </div>
                        <div class="modal fade" id="waitModal" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered ">
                                <div class="modal-content " style="background: var(--app-content-secondary-color);">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">
                                            Esperando Escaneo
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                            id="closeModal" hidden></button>
                                    </div>

                                    <div class="modal-body">
                                        <div ref="lottieContainer"></div>
                                        <h4 class="text text-light text-center">Toma las fotografias al DNI</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="showAlert" class="alert alert-danger" role="alert">
                            Debes registrar todos los acompañantes
                        </div>
                        <div class="card-group form-group buttons">
                            <button class="raise btn-green" type="submit">Generar Checkin</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-group {
    display: flex;
    flex-direction: column;
}
</style>
<script>
import axios from 'axios';
import { io } from 'socket.io-client';
import $ from 'jquery';
import lottie from 'lottie-web';
import animationData from './loading.json';
export default {
    data() {
        return {
            showAlert:false,
            showAlertModal:false,
            count: 0,
            nombreHuesped: null,
            values: [],
            FotoEcaneada: false,
            resultadoEscaner: {
                numero_dni: null,
                tipo_documento : '',
                paterno: null,
                materno: null,
                nombres: null,
                fecha_nacimiento: null,
                departamento: null,
                provincia: null,
                distrito: null,
                direccion: null
            },
            nro_pax: null,
            mensajes: null,
            socket: null,
            notas: '',
            formData: {
                id_reserva: '',
                id_recepcionista: '',
                tipo_dni: '',
                paxs: [],
                fecha_ingreso: '',
                nota_adicionales: '',
            },
        };
    }, 
    props: ['id'],
    mounted() {
        console.log(this.nro_pax);
        this.loadAnimation();
        this.getReserva();
        this.socket = io('https://api.express.vallesur.bjrcode.com/', { transports: ['websocket'] });

        this.socket.on('connect', () => {
            console.log('Conexión establecida con el servidor Socket.IO');
        });

        this.socket.on('ping', (data) => {
            console.log("Mensaje Recibido: ", data);
            this.mensajes = data;
        })

        this.socket.on('disconnect', () => {
            console.log('Desconectado del servidor Socket.IO');
        });

        this.socket.on('sendToVue', (data) => {
            console.log(data);
            this.cerrarModal();
            this.resultadoEscaner.numero_dni = data.data.numero_dni;
            this.resultadoEscaner.paterno = data.data.paterno;
            this.resultadoEscaner.materno = data.data.materno;
            this.resultadoEscaner.nombres = data.data.nombres;
            this.resultadoEscaner.fecha_nacimiento = data.data.fecha_nacimiento;
            this.resultadoEscaner.departamento = data.data.departamento;
            this.resultadoEscaner.provincia = data.data.provincia;
            this.resultadoEscaner.distrito = data.data.distrito;
            this.resultadoEscaner.direccion = data.data.direccion;
            this.FotoEcaneada = true;
            this.mostrarModalConfirmar();
        });

        this.socket.on('cancelScan', (data) => {
            console.log(data);
            console.log('Se ha cancelado');
            this.cerrarModal();
        })
    },
    beforeUnmount() {
        this.socket.disconnect();
    },
    computed: {

        inputCount() {
            return new Array(this.nro_pax).fill(0);
        },
        isDisabled() {
            return this.count >= this.nro_pax;
        },
        progressPercent() {
            return (this.count / this.nro_pax) * 100;
        },
    },
    methods: {
        eliminarPax(index) {
            this.values.splice(index, 1);
            this.count--;
        },
        incrementCount() {
            this.count++;
        },
        addValue(value) {
            this.FotoEcaneada = false;
            this.values.push(value);
            this.formData.paxs.push(value);
            this.resultadoEscaner = {
                numero_dni: null,
                tipo_documento: 'DNI',
                paterno: null,
                materno: null,
                nombres: null,
                fecha_nacimiento: null,
                departamento: null,
                provincia: null,
                distrito: null,
                direccion: null
            };
            console.log(this.values);
            this.incrementCount();
            this.cerrarModalConfirmar();
        },
        loadAnimation() {
            lottie.loadAnimation({
                container: this.$refs.lottieContainer,
                animationData: animationData,
                renderer: 'svg', // Puedes elegir 'svg', 'canvas' o 'html' según tus necesidades
                loop: true, // Define si la animación debe repetirse
                autoplay: true, // Define si la animación debe reproducirse automáticamente al cargar
            });
        },
        mostrarModalConfirmar() {
            $('#abrirModalConfirmar').click();
        },
        cerrarModalConfirmar() {
            $('#closeModalConfirmar').click();
        },
        mostrarModal() {
            $('#abrirModal').click();
        },
        cerrarModal() {
            $('#closeModal').click();
        },

        confirmarDatos() {
        // Verificar si los campos obligatorios están completos
        if (
            this.resultadoEscaner.numero_dni &&
            this.resultadoEscaner.paterno &&
            this.resultadoEscaner.materno &&
            this.resultadoEscaner.nombres &&
            this.resultadoEscaner.fecha_nacimiento &&
            this.resultadoEscaner.departamento &&
            this.resultadoEscaner.provincia &&
            this.resultadoEscaner.distrito &&
            this.resultadoEscaner.direccion
        ) {
            this.showAlertModal = false;
            this.addValue(this.resultadoEscaner);
        } else {
            this.showAlertModal = true;
            console.log("Por favor complete todos los campos obligatorios");
        }
        },

        scanPax() {
        if (this.formData.tipo_dni === 'Dni') {
            // Lógica cuando el acompañante tiene DNI peruano
            console.log(this.nombreHuesped);
            this.socket.emit('sendToFlutter', this.nombreHuesped);
            this.mostrarModal();
        } else if (this.formData.tipo_dni === 'Extranjeria') {
            // Lógica cuando el acompañante NO tiene DNI peruano
            this.resultadoEscaner = {
                numero_dni: '',
                tipo_documento: 'Extranjeria',
                paterno: '',
                materno: '',
                nombres: '',
                fecha_nacimiento: '',
                departamento: '',
                provincia: '',
                distrito: '',
                direccion: '',
            };
            this.FotoEcaneada = false;
            this.mostrarModalConfirmar();
        }
        },
        send() {
            this.socket.emit("sendToFlutter", this.nro_pax)
        },
        hacerCheckIn() {
        const fechaActual = new Date().toLocaleString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).replace(/\//g, '-').replace(',', '');
        this.formData.fecha_ingreso = fechaActual;
        if (this.formData.tipo_dni === 'Extranjeria') {
            // Lógica cuando el acompañante NO tiene DNI peruano
            if (this.count < this.nro_pax) {
            this.showAlert = true;
            } else {
            this.showAlert = false;
            this.formData.paxs = this.values;
            console.log(this.formData);
            axios.post('/api/checkin', this.formData).then((value) => {
                console.log(value);
                this.$router.push({ name: 'recepcionista-reservas' });
            })
            }
        } else {
            // Lógica cuando el acompañante tiene DNI peruano
            if (this.count < this.nro_pax) {
            this.showAlert = true;
            } else {
            this.showAlert = false;
            this.formData.paxs = this.values;
            console.log(this.formData);
            axios.post('/api/checkin', this.formData).then((value) => {
                console.log(value);
                this.$router.push({ name: 'recepcionista-reservas' });
            })
            }
        }
            },
        getReserva() {
            axios.get('/api/reserva/'+this.id).then((value) => {
                console.log(value.data.data);
                this.formData.id_reserva = value.data.data._id;
                this.formData.id_recepcionista = this.$store.state.user._id;
                this.nro_pax = value.data.data.datosReserva.pax_reserva;
                this.nombreHuesped = value.data.data.huesped.nombres + " " + value.data.data.huesped.apellidos;
                console.log(this.nro_pax);
            });
        },
    }
}
</script>