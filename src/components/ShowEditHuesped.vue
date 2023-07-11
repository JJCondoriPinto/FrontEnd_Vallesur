<template>
    <div class="container-edit">
        <div class="form-parent card-show-parent">
            <div class="form">
                <form class="form-update" @submit.prevent="updateHuesped">
                    <input type="hidden" name="estado" value="{{ }}">
                    <div class="card-header">
                        <p>Información de Huesped</p>
                    </div>
                    <div class="card-content">
                        <div class="card-group form-group">
                            <label for="nombres">Nombres</label>
                            <input class="form-input" type="text" v-model="nombres" name="nombres" disabled required>
                        </div>
                        <div class="card-group form-group">
                            <label for="apellidos">Apellidos</label>
                            <input class="form-input" type="text" name="apellidos" v-model="apellidos" disabled required>
                        </div>
                        <div class="card-group form-group">
                            <label for="precio">Sexo</label>
                            <select class="form-input" name="sexo" v-model="sexo" disabled required>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div class="card-group form-group">
                            <label for="nacionalidad">Nacionalidad</label>
                            <select class="form-input" name="nacionalidad" v-model="nacionalidad" disabled required>
                                <option value="">Seleccionar</option>
                                <option value="peru">Perú</option>
                                <option value="chile">Chile</option>
                                <option value="brasil">Brasil</option>
                                <option value="argentina">Argentina</option>
                                <option value="espana">España</option>
                                <option value="bolivia">Bolivia</option>
                                <option value="uruguay">Uruguay</option>
                                
                            </select>
                        </div>
                        <div class="card-group form-group">
                            <label for="region">Región</label>
                            <input class="form-input" type="text" name="region" v-model="region" disabled required>
                        </div>
                        <div class="card-group form-group">
                            <label for="direccion">Dirección</label>
                            <input class="form-input" type="text" name="direccion" v-model="direccion" disabled required>
                        </div>
                        <div class="card-group form-group">
                            <label for="telefono">Teléfono</label>
                            <input class="form-input" type="number" name="telefono" v-model="telefono" disabled required>
                        </div>
                        <div class="card-group form-group">
                            <label for="correo">Correo</label>
                            <input class="form-input" name="correo" v-model="correo" disabled required>
                        </div>
                        <div class="card-group form-group buttons">
                            <button class="btn btn-success" id="btn-edit" type="submit" @click="showEditRecep">Editar
                                campos</button>
                            <button class="btn btn-success" id="btn-edit-store" type="submit">Guardar cambios</button>
                            <button class="btn btn-danger" id="btn-edit-cancel" type="submit"
                                @click="showEditRecepDisable">Cancelar</button>
                        </div>
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
            huesped: null,
            nombres: '',
            apellidos: '',
            sexo: '',
            nacionalidad: '',
            region: '',
            direccion: '',
            telefono: '',
            correo: ''
        }
    },
    props: ['id'],
    mounted() {
        this.getUser();
    },
    methods: {
        getUser() {
            axios.get("api/huesped", {
                params: {
                    tipo: "id",
                    id: this.id
                }
            }).then((value) => {
                console.log(value);
                this.huesped = value.data.data;
                this.nombres = this.huesped.nombres;
                this.apellidos = this.huesped.apellidos;
                this.sexo = this.huesped.sexo;
                this.nacionalidad = this.huesped.nacionalidad;
                this.region = this.huesped.region;
                this.direccion = this.huesped.direccion;
                this.telefono = this.huesped.telefono;
                this.correo = this.huesped.correo;
            })
        },
        showEditRecep(e) {
            e.preventDefault();
            let btn1 = document.getElementById('btn-edit-store');
            let btn2 = document.getElementById('btn-edit-cancel');
            let btn3 = document.getElementById('btn-edit');
            let campos = document.querySelectorAll(".form-update .card-content .card-group .form-input");
            campos.forEach((campo) => {
                campo.removeAttribute('disabled');
            })

            btn3.style.display = 'none';
            btn1.style.display = 'initial';
            btn2.style.display = 'initial';
        },
        showEditRecepDisable(e) {
            e.preventDefault();
            let btn1 = document.getElementById('btn-edit-store');
            let btn2 = document.getElementById('btn-edit-cancel');
            let btn3 = document.getElementById('btn-edit');
            let campos = document.querySelectorAll(".form-update .card-content .card-group .form-input");
            campos.forEach((campo) => {
                campo.setAttribute('disabled', true);
            })

            btn3.style.display = 'initial';
            btn1.style.display = 'none';
            btn2.style.display = 'none';
        },
        updateHuesped(){
            const params={
                    "nombre_huesped":this.nombres,
                    "apellido_huesped":this.apellidos,
                    "sexo_huesped":this.sexo,
                    "nacionalidad_huesped":this.nacionalidad,
                    "region_huesped":this.region,
                    "direccion_huesped":this.region,
                    "telefono_huesped":this.telefono,
                    "correo_huesped":this.correo
                };
            axios.put('api/huespedes/'+this.id,params).then(
                (value)=>{
                    console.log(value);
                    console.log(params);
                    this.$router.push({ name: 'recepcionista-huespedes' });
                }
            )
        }
    }
}
</script>
<style scoped>
@import url('@/css/app.css');
.form{
    /* max-width: 400px; */
    align-items: center;
    align-content: center;
    align-self: center;
}
.form label{
    max-width: 400px;
    text-align: left;
}
.container-edit {

    overflow: auto;
    
}

  /* Estilos para las opciones del combobox */
  option {
    background-color: #16114f; /* Color de fondo deseado */
  }
</style>