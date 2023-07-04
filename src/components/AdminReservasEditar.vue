<template>
    <div>
        <div class="form-parent card-show-parent">
            <div class="form">

                <form class="form-updateUser" @submit.prevent="updateReserva">
                    <div class="card-group form-group">
                        <label class="form-label label-radio">Fecha Reserva Entrada</label>
                        <input class="form-input" type="date" v-model=formData.fecha_checkin :min="getFechaActual()"
                            required>
                    </div>
                    <div class="card-group form-group">
                        <label class="form-label label-radio">Fecha Reserva Salida</label>
                        <input class="form-input" type="date" v-model=formData.fecha_checkout :min="getFormattedCheckInDate()" required>
                    </div>
                    <div class="card-group form-group">
                        <label class="form-label label-radio">Acompañantes</label>
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
<script>
import axios from 'axios';

export default {

    data() {
        return {
            formData: {
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
            axios.put('/api/reserva/'+this.id).then((value)=>{
                console.log(value);
                this.$router.push({name:'recepcionista-reservas'});
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
                console.log(value.data.data);
                this.formData.fecha_checkin = value.data.data[0].datosReserva.fecha_checkin;
                this.formData.fecha_checkout = value.data.data[0].datosReserva.fecha_checkout;
                this.formData.pax_reserva = value.data.data[0].datosReserva.pax_reserva;
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