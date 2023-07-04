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
                            <input class="form-input" type="text" v-model="formData.nota_adicionales" name="notas"
                                required>
                        </div>

                        <div class="card-group form-group">
                            <label>Supuesto Pax</label>
                            <input class="form-input" v-model="formData.paxs" type="text" required>
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
<style></style>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            notas: '',
            formData: {
                id_reserva: '',
                id_recepcionista: '',
                paxs: '',
                fecha_ingreso: '',
                nota_adicionales: '',
            },
        };
    },
    props: ['id'],
    mounted() {
        this.getReserva();
    },
    methods: {
        hacerCheckIn() {
            const fechaActual = new Date().toLocaleString('es-ES', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }).replace(/\//g, '-').replace(',', '');
            this.formData.fecha_ingreso = fechaActual
            console.log(this.formData);
            axios.post('/api/checkin',this.formData).then((value)=>{
                console.log(value);
                this.$router.push({ name: 'recepcionista-reservas'});
            })
        },
        getReserva() {
            axios.get('/api/reserva', {
                "id": this.id
            }).then((value) => {
                console.log(value.data.data[0]);
                this.formData.id_reserva = value.data.data[0]._id;
                this.formData.id_recepcionista = this.$store.state.user._id;
            });
        }
    }
}
</script>