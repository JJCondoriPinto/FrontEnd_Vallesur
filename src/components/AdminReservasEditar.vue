<template>
    <div>
        <div class="form-parent card-show-parent">
            <div class="form">

                <form class="form-updateUser" @submit.prevent="updateReserva">
                    <input type="hidden" v-model="this.formData._id">
                    <div class="card-group form-group">
                        <label>Fecha Reserva Entrada</label>
                        <input class="form-input" type="date" v-model=formData.fecha_checkin :min="getFechaActual()"
                            required>
                    </div>
                    <div class="card-group form-group">
                        <label>Fecha Reserva Salida</label>
                        <input class="form-input" type="date" v-model=formData.fecha_checkout :min="getFormattedCheckInDate()" required>
                    </div>
                    <div class="card-group form-group">
                        <label>Acompañantes</label>
                        <input class="form-input" type="number" v-model=formData.pax_reserva required>
                    </div>
                    <div class="row">
                        <button class="btn btn-success px-5">Editar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
.form{
    /* max-width: 400px; */
    align-items: center;
    align-content: center;
    align-self: center;
}
.form label{
    align-content: start;
    text-align: left;
    align-items: start;
    align-self: self-start;
}
.container-edit {

    overflow: auto;
    
}
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1); /* Invierte el color del icono */
}
</style>
<script>
import axios from 'axios';

export default {

    data() {
        return {
            formData: {
                _id: null,
                fecha_checkin: '',
                fecha_checkout: '',
                pax_reserva: ''
            },
        };
    },
    props: ['id'],
    mounted() {
        this.getReserva();
    },
    methods: {
        updateReserva(){
            axios.put('/api/reserva/',this.formData).then((value)=>{
                console.log(value);
                 this.$router.push({name:'recepcionista-reservas'})
            })
        },  
        getFechaActual() {
            const today = new Date();
            const year = today.getFullYear();
            let month = today.getMonth() + 1;
            let day = today.getDate();

            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }

            return `${year}-${month}-${day}`;
        },
        getReserva() {
            axios.get('/api/reserva', {
                params: {
                    id: this.id
                }
            }).then((value) => {
                console.log(value.data.data[0]);
                this.formData._id = value.data.data[0]._id;
                this.formData.fecha_checkin = value.data.data[0].datosReserva.fecha_checkin;
                this.formData.fecha_checkout = value.data.data[0].datosReserva.fecha_checkout;
                this.formData.pax_reserva = value.data.data[0].datosReserva.pax_reserva;
                console.log(this.formData);
            })
        },
        getFormattedCheckInDate() {
            if (this.formData.fecha_checkin) {
                const checkInDate = new Date(this.formData.fecha_checkin);
                const yyyy = checkInDate.getFullYear();
                let mm = checkInDate.getMonth() + 1;
                let dd = checkInDate.getDate() + 2;

                if (mm < 10) {
                    mm = '0' + mm;
                }
                if (dd < 10) {
                    dd = '0' + dd;
                }

                return `${yyyy}-${mm}-${dd}`;
            } else {
                // Si el campo de check-in está vacío, se permite seleccionar cualquier fecha
                return '';
            }
        }
    }
}
</script>