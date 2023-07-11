<template>
    <div>
        <div class="form-parent card-show-parent">
            <div class="form">

                <form class="form-updateUser" @submit.prevent="updateCheckin">
                    <input type="hidden" v-model="this.formData._id">
                    <div class="card-group form-group">
                        <label class="form-label label-radio">Fecha Checkout</label>
                        <input class="form-input" type="date" v-model="this.formData.fecha_checkout" :min="getFormattedCheckOutDate()" required>
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
                _id: null,
                fecha_checkin: "",
                fecha_checkout: ''
            },
        };
    },
    props: ['id'],
    mounted() {
        this.getCheckin();
    },
    methods: {
        updateCheckin(){
            axios.put('/api/checkin/'+ this.formData._id,this.formData).then((value)=>{
                this.$router.push({name:'recepcionista-check'})
            })
        },  
        // Conversion de la fecha actual en formato de cadena
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
        getCheckin() {
            axios.get('/api/checkin/'+this.id).then((value) => {
                this.formData._id = value.data.data._id;
                this.formData.fecha_checkin = value.data.data.reserva.datosReserva.fecha_checkin;
                this.formData.fecha_checkout = value.data.data.reserva.datosReserva.fecha_checkout;
            })
        },
        getFormattedCheckOutDate() {
            if (this.formData.fecha_checkout) {
                const checkOutDate = new Date(this.formData.fecha_checkin);
                const yyyy = checkOutDate.getFullYear();
                let mm = checkOutDate.getMonth() + 1;
                let dd = checkOutDate.getDate() + 2;

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