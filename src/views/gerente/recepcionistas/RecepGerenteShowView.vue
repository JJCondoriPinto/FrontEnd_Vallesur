<script setup>
    /* eslint-disable */

    function update(target) {

        axios.put('api/recepcionistas', { tipo: "update", ...target.recepcionista})
        .then(res => {
            if (res.status == 200) {
                target.statusEdit = false;
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    function updateUser(target) {
        if (target.correctPassword()) {

            axios.put('api/recepcionistas', { tipo: "updateUser", ...target.recepcionista})
            .then(res => {
                if (res.status == 200) {
                    target.statusEditUser = false;
                }
            })
            .catch(err => {
                console.log(err);
            });
            
        } else {

            alert('Contraseñas no coinciden');
            
        }
    }
</script>
<template>
    <div class="html">
      <div class="body-app">
        <div class="app-container">
          <SidebarComponent>
            <ListSidebarGerente />
          </SidebarComponent>
          <div class="app-content">
            <HeaderComponent>
              <template #title> 
                Recepcionista 
                <span>{{ this.recepcionista.nombres  }}</span>
              </template>
            </HeaderComponent>

            <!-- aqui contenido de habitacion -->
            <div class="form-parent card-show-parent">
                <div class="form">
                    <form class="form-update" v-on:submit.prevent="update(this)">
                        <input type="hidden" value="recepcionista" name="rol">
                        <div class="card-header">
                            <p>Información recepcionista</p>
                        </div>
                        <div class="card-content">
                            <div class="card-group form-group">
                                <label for="dni">DNI</label>
                                <input class="form-input" type="number" name="dni" v-model="this.recepcionista.dni" :disabled="!this.statusEdit" required>
                            </div>
                            <div class="card-group form-group">
                                <label for="nombres">Nombres</label>
                                <input class="form-input" type="text" name="nombres" v-model="this.recepcionista.nombres" :disabled="!this.statusEdit" required>
                            </div>
                            <div class="card-group form-group">
                                <label for="apellidos">Apellidos</label>
                                <input class="form-input" type="text" name="apellidos" v-model="this.recepcionista.apellidos" :disabled="!this.statusEdit" required>
                            </div>
                            <div class="card-group form-group">
                                <label for="telefono">Telefono</label>
                                <input class="form-input" type="tel" name="telefono" v-model="this.recepcionista.telefono" :disabled="!this.statusEdit" required>
                            </div>
                            <div class="card-group form-group">
                                <label for="turno" class="form-label label-radio">Turno</label>
                                <div class="form-radio">
                                    <div class="radio-group">
                                        <input class="form-input" :disabled="!this.statusEdit" type="radio" name="turno" v-model="this.recepcionista.turno" value="Mañana"
                                        :checked="this.recepcionista.turno === 'Mañana'"><span>Mañana</span>
                                    </div>
                                    <div class="radio-group">
                                        <input class="form-input" :disabled="!this.statusEdit" type="radio" name="turno" v-model="this.recepcionista.turno" value="Tarde"
                                        :checked="this.recepcionista.turno === 'Tarde'"><span>Tarde</span>
                                    </div>
                                    <div class="radio-group">
                                        <input class="form-input" :disabled="!this.statusEdit" type="radio" name="turno" v-model="this.recepcionista.turno" value="Noche"
                                        :checked="this.recepcionista.turno === 'Noche'"><span>Noche</span>
                                    </div>
                                    <div class="radio-group">
                                        <input class="form-input" :disabled="!this.statusEdit" type="radio" name="turno" v-model="this.recepcionista.turno" value="FinesSemana"
                                        :checked="this.recepcionista.turno === 'FinesSemana'"><span>Otros</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-group form-group buttons">
                                <button class="raise btn-green" type="button" :hidden="this.statusEdit" v-on:click="trueEdit()">Editar campos</button>
                                <button class="raise btn-green" type="submit" :hidden="!this.statusEdit">Guardar cambios</button>
                                <button class="raise btn-red" type="button" :hidden="!this.statusEdit" v-on:click="falseEdit()">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="form">
                    <form class="form-update" v-on:submit.prevent="updateUser(this)">
                        <div class="card-header">
                            <p>Datos de usuario</p>
                        </div>
                        <div class="card-content">
                            <div class="card-group form-group">
                                <label for="correo">Correo</label>
                                <input class="form-input" type="email" name="correo" v-model="this.recepcionista.email" :disabled="!this.statusEditUser" required>
                            </div>
                            <div class="card-group form-group">
                                <label for="contrasena">Contraseña</label>
                                <input class="form-input" type="password" placeholder="Contraseña" name="contrasena" id="contrasena" :disabled="!this.statusEditUser" v-model="this.recepcionista.password" :class="{ 'wrong': !correctPassword() }">
                            </div>
                            <div class="card-group form-group" v-if="this.statusEditUser">
                                <label for="contrasena-confirm">Confirmar Contraseña</label>
                                <input class="form-input" type="password" placeholder="Confirmar contraseña" name="contrasena-confirm" id="contrasena-confirm" :disabled="!this.statusEditUser" v-model="this.recepcionista.confirmPassword" :class="{ 'wrong': !correctPassword() }">
                            </div> 
                            <div class="card-group form-group buttons">
                                <button class="raise btn-green" type="button" :hidden="this.statusEditUser" v-on:click="trueEditUser()">Editar campos</button>
                                <button class="raise btn-green" type="submit" :hidden="!this.statusEditUser">Guardar cambios</button>
                                <button class="raise btn-red" type="button" :hidden="!this.statusEditUser" v-on:click="falseEditUser()">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
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
    name: "HabitGerenteShowView",
    data: () => ({
      recepcionista: {},
      statusEdit: false,
      statusEditUser: false,
    }),
    created() {
      // Peticion para obtener recepcionista
      axios.get(`api/recepcionistas/${this.$route.params.id}`)
      .then((data) => {
        this.recepcionista = data.data.data;
      });
    },
    methods: {
      trueEdit() {
        this.statusEdit = true;
      },
      falseEdit() {
        this.statusEdit = false;
      },
      trueEditUser() {
        this.statusEditUser = true;
      },
      falseEditUser() {
        this.statusEditUser = false;
      },
      correctPassword() {
        return this.recepcionista.password === this.recepcionista.confirmPassword ||
        (this.recepcionista.password === this.recepcionista.confirmPassword &&this.recepcionista.password === '');
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
  