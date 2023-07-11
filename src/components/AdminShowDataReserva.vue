<template>
    <div class="mg-6 profile-wrapper">

        <div class="profile-wrap">
            <div class="profile-maintitle"><span class="topic-title">{{ reserva ? 'Reserva de ' + reserva.huesped.nombres + ' ' + reserva.huesped.apellidos : 'Cargando' }}</span>
            </div>
            <div class="profile-subtitle">ID • {{ reserva ? reserva._id : 'Cargando' }}</div>
            <div class="profile-head-info">
                <router-link :to="{ name: 'recepcionista-editar-reservas', params: { id: id } }">

                    <button class="btn btn-success">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                </router-link>
<!--                 <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#Habitaciones">

                    <i class="fa-solid fa-trash"></i>

                </button> -->
            </div>
            <div class="profile-body">

                <div class="profile-left">

                    <div class="profile-details">
                        <div class="profile-detail">
                            <div class="profile-detail-small">Nombre Completo</div>
                            <div class="profile-detail-large">{{ reserva  ? reserva.huesped.nombres + " " + reserva.huesped.apellidos : 'Cargando' }}
                            </div>
                        </div>
                        <div class="profile-detail">
                            <div class="profile-detail-small">Cantidad de Dias Reserva</div>
                            <div class="profile-detail-large">{{ reserva ? reserva.datosReserva.cantidad_dias_reserva : 'Cargando' }}</div>
                        </div>
                        <div class="profile-detail">
                            <div class="profile-detail-small">Numero de Acompañantes</div>
                            <div class="profile-detail-large">
                                {{ reserva ? reserva.datosReserva.pax_reserva : 'Cargando' }}</div>
                        </div>
                        <div class="profile-detail">
                            <div class="profile-detail-small">Tipo de Reserva</div>
                            <div class="profile-detail-large">{{
                                reserva ? reserva.datosReserva.tipo_reserva : 'Cargando' }}</div>
                        </div>
                        <div class="profile-detail">
                            <div class="profile-detail-small">Destinatario Reserva</div>
                            <div class="profile-detail-large">{{ reserva ? reserva.datosReserva.destinatario_reserva : 'Cargando' }}</div>
                        </div>
                        <div class="profile-detail">
                            <div class="profile-detail-small">Peticiones Adicionales</div>
                            <div class="profile-detail-large">{{ reserva ? reserva.datosReserva.peticiones_adicionales??"No especificó" : 'Cargando' }}</div>
                        </div>
                        <div class="profile-detail">
                            <div class="profile-detail-small">Hora Llegada</div>
                            <div class="profile-detail-large">{{ reserva ? reserva.datosReserva.hora_llegada : 'Cargando' }}</div>
                        </div>
                        <div class="profile-detail">
                            <div class="profile-detail-small">Tipo de Habitación</div>
                            <div class="profile-detail-large">{{ reserva ? reserva.habitacion.tipo_habitacion : 'Cargando' }}</div>
                        </div>
                        <div class="profile-detail">
                            <div class="profile-detail-small">Fecha Check In</div>
                            <div class="profile-detail-large">{{ reserva ? reserva.datosReserva.fecha_checkin : 'Cargando' }}</div>
                        </div>
                        <div class="profile-detail">
                            <div class="profile-detail-small">Fecha Check Out</div>
                            <div class="profile-detail-large">{{ reserva ? reserva.datosReserva.fecha_checkout : 'Cargando' }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal :id=this.idSelected>

        </Modal>
    </div>
</template>
<script>
import axios from 'axios';
import Modal from '@/components/ModalConfirmar.vue';

export default {
    components:{
        Modal
    },
    data() {
        return {
            idSelected:this.id,
            reserva: null,
        }
    },
    props: ['id'],
    mounted() {
        this.getReserva();
    },
    methods: {
        editar(){
            this.$router.push({ name: 'recepcionista-editar-reservas', params: { id: this.id } });
        },
        getReserva() {
            axios.get("api/reserva", {
                params: {
                    id: this.id,
                }
            }).then((value) => {
                console.log(value);
                this.reserva = value.data.data[0];
            })
        }
    }
}

</script>
<style scoped>
.profile-maintitle {
    margin: 0 0 0;
    background: rgb(255, 106, 0);
    background: #151E2F;
    font-family: Raleway;
    font-size: 36px;
    font-weight: 100;
    color: #FFF;
    line-height: 150%;
    text-transform: uppercase;
    padding: 30px 50px 0;
}

.profile-subtitle {
    margin: 0 0 0;
    padding: 0 50px 30px;
    background: rgb(230, 184, 151);
    background: #151E2F;
    font-size: 10px;
    font-family: Raleway;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: left;
    color: #fff;
    font-weight: 700
}

.profile-maintitle a,
.profile-subtitle a {
    color: #eee
}

.profile-name {
    margin: -20px 0 20px;
    padding: 50px;
    color: #fff;
    font-family: Open Sans Condensed;
    font-weight: 100;
    font-size: 36px;
    line-height: 100%;
    background: rgb(18, 11, 6);
    background: linear-gradient(90deg, rgb(41, 19, 80) 15%, rgb(48, 22, 53) 87%);
}

.profile-wrap {
    width: 100%;
    max-height: 500px;

    padding: 20px;
    overflow: auto;
}

.profile-avatar-border {
    position: relative;
    z-index: 2;
    margin: -80px auto 0;
    box-sizing: content-box;
    width: 100px;
    height: 100px;
    border: 8px solid rgba(var(--accent), .9);
    box-shadow: 0 0 0 2px #fff;
    border-radius: 50%;
}



.profile-head-info {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    margin-top: 1px;
    background-color: #31405c;
    color: #fff;
    padding-top: 15px;
    padding-right: 45px;
    padding-bottom: 15px;
}

.profile-head-info button {
  margin-right: 20px;
}

.profile-head-info span,
.profile-head-info span a {
    color: rgba(var(--accent), 1);
}

.profile-head-info span {
    flex: 1 0;
    text-align: center;
    font-family: Open Sans Condensed;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .5px;
}

.profile-body {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    background: rgb(230, 184, 151);
    background: #1D283C;
    padding: 35px
}

.profile-left {
    flex: 1 0;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
}

.profile-details {
    flex: 1 0;
    display: flex;
    flex-wrap: wrap;
    padding: 15px 25px;
    background-color: #101827;
    border-radius: 20px;
}

.profile-detail {
    width: 50%;
}

.profile-detail-small {
    margin-top: 5px;
    color: #ffffff;
    font-size: 12px;
    font-family: Open Sans Condensed;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
}

.profile-detail-large {
    color: rgb(160, 158, 157);
    font-size: 16px;
    font-weight: 400;
    font-family: Raleway;
    text-transform: capitalize;
    margin: 5px auto 0;
    padding-right: 5px
}

.profile-relationship {
    margin-top: 15px;
    background-color: rgba(245, 245, 245, .9);
    height: 100px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    overflow: hidden
}

.profile-rgif {
    box-sizing: border-box;
    width: 100px;
    background: rgb(230, 184, 151);
    background: linear-gradient(90deg, rgba(230, 184, 151, 1) 15%, rgba(191, 208, 215, 1) 87%);
    padding: 10px;
    border-radius: 15px
}

.profile-rgif img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    object-fit: cover;
    object-position: center
}

.profile-relationship .profile-detail {
    margin-bottom: 15px;
    text-align: center;
    flex: 1 0
}

.profile-relationship .profile-detail-large {
    margin-top: 10px;
    font-size: 20px
}



.profile-mini {
    width: 200px;
    border-radius: 20px;
    overflow: hidden
}



.profile-mini-links a:hover,
.profile-maintitle .send-pm:hover ion-icon {
    animation: rubberBand;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

.profile-av-wrap {
    margin-top: -20px;
    width: 250px;
    height: 450px;
    background: var(--profileavatar) center/cover no-repeat;
    border-radius: 20px 20px 0 0
}

.profile-av {
    width: 200px;
    height: 320px;
    background: center/cover no-repeat;
    border-radius: 20px 20px 20px 20px
}

.profile-row {
    margin-top: 15px;
    flex-basis: 100%;
    display: flex;
    align-items: center;
}

.profile-aesthetic {
    width: 64px;
    height: 64px;
    border-radius: 10px;
    background-color: #ddd;
    margin-right: 5px
}

.profile-aesthetic:nth-of-type(1) {
    background-color: #bfd0d7, .9
}

.profile-aesthetic:nth-of-type(2) {
    background-color: #bfd0d7, .7
}

.profile-aesthetic:nth-of-type(3) {
    background-color: #bfd0d7, .5
}

.profile-aesthetic:nth-of-type(4) {
    background-color: #bfd0d7.3;
    margin-right: 15px;
}

.profile-player {
    flex: 1 0;
    background-color: rgba(245, 245, 245, .9);
    border-radius: 10px;
    text-align: center;
    padding: 8px 0
}

.profile-player .profile-detail-large {
    font-size: 18px
}

.profile-player .profile-contact {
    text-transform: none
}

.profile-nogo {
    margin-top: 15px;
    margin-bottom: -15px;
    color: #888;
    font-size: 9px;
    font-family: Raleway;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
}

.profile-nogo b {
    color: rgba(var(--accent), 1)
}

.profile-awards {
    padding: 20px;
    background: rgb(230, 184, 151);
    background: linear-gradient(90deg, rgba(230, 184, 151, 1) 15%, rgba(191, 208, 215, 1) 87%);
    text-align: center;
}

.profile-awards img {
    width: 30px;
    margin: 3px
}

.profile-awards br {
    display: none;
}</style>