<template>
<div>
    <div class="form-parent card-show-parent">
        <div class="form">

            <form class="form-updateUser" @submit.prevent="GenerarCheckout">
                
                <div class="card-group form-group">
                    <label class="form-label label-radio">Descripción Estadia</label>
                    <input class="form-input" type="text" placeholder="Descripcion Estadia" v-model=formData.descripcion_salida required>
                </div>
                <div class="row">
                    <button type="submit" class="btn btn-success px-5">Generar CHECKOUT</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'; 

    export default{
        data(){
            return{
                formData:{
                    id_checkin:this.id,
                    id_recepcionista:this.$store.state.user._id,
                    descripcion_salida:''
                }
            };
        },
        props:[
            "id"
        ],
        methods:{
            GenerarCheckout(){
                axios.post('/api/checkout',
                    this.formData
                ).then((value)=>{
                    console.log(value);
                    this.$router.push({name:'recepcionista-check'}) 

                }) 
                console.log(this.formData)
            }
        }
    }
</script>
<style>
option {
    background-color: #16114f;
    /* Color de fondo deseado */
}
</style>