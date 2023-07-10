<template>
    <div class="html">
      <div class="body-app">
        <div class="app-container">
          <SidebarComponent>
            <ListSidebarGerente />
          </SidebarComponent>
          <div class="app-content">
            <HeaderComponent>
              <template #title> Habitación 
                <span>{{ this.habitacion.nro_habitacion  }}</span>
              </template>
              <template #button-insert>
                <router-link :to="{ name: 'gerente-habitaciones-create' }">
                  <button class="app-content-headerButton">
                    Registrar habitación
                  </button>
                </router-link>
              </template>
            </HeaderComponent>

            <!-- aqui contenido de habitacion -->
            <div class="form-parent">
                <form v-on:submit.prevent="update(this)" class="form" method="POST">
                    <input type="hidden" v-model="this.habitacion.estado" name="estado">
                    <input type="hidden" v-model="this.habitacion._id" name="id">
                    <div class="sub-form">
                      <div class="subform-title">
                        <h3>General</h3>
                      </div>
                      <div class="form-group">
                          <input v-model="this.habitacion.nro_habitacion" class="form-input" type="number" name="nro_habitacion" placeholder="Nro de habitación" required :disabled="!this.statusEdit"/>
                      </div>
                      <div class="form-group">
                          <input v-model="this.habitacion.nro_piso" class="form-input" type="text" name="nro_piso" placeholder="Nro de piso" required :disabled="!this.statusEdit"/>
                      </div>
                      <div class="form-group">
                          <input v-model="this.habitacion.tipo_habitacion" class="form-input" type="text" placeholder="Tipo de habitación" name="tipo_habitacion" required :disabled="!this.statusEdit"/>
                      </div>
                      <div class="form-group">
                          <input v-model="this.habitacion.precio" class="form-input" type="number" placeholder="Precio de reserva" name="precio" step="0.01" required :disabled="!this.statusEdit"/>
                      </div>
                      <div class="form-group">
                          <input  v-model="this.habitacion.tamaño" class="form-input" type="text" placeholder="Tamaño de habitación ej.(1.0 m2)" name="tamaño" required :disabled="!this.statusEdit"/>
                      </div>
                      <div class="form-group">
                          <input v-model="this.habitacion.imagen" class="form-input" type="url" placeholder="URL de imagen" name="imagen" required :disabled="!this.statusEdit"/>
                      </div>
                      <div class="form-group form-image">
                          <img class="w-100" :src="this.habitacion.imagen" alt="habitacion">
                      </div>
                    </div>
                    <div class="sub-form">
                      <div class="subform-title">
                        <h3>Cotenido de habitación</h3>
                      </div>
                      <div class="form-group" id="caracteristicas">
                        <div class="form-subgroup px-3" v-for="(caracteristica, nombre) in habitacion.caracteristicas" :key="nombre">
                          <input class="form-input" type="text" placeholder="Nombre" required v-model="caracteristica.nombre" :disabled="!this.statusEdit">
                          <input class="form-input" type="number" placeholder="Cantidad" required v-model="caracteristica.cantidad" :disabled="!this.statusEdit">
                          <textarea class="form-input" name="" id="" rows="3" placeholder="Descripcion" required v-model="caracteristica.descripcion" :disabled="!this.statusEdit"></textarea>
                        </div>
                        <div class="form-button">
                          <button class="form-add me-1" v-on:click.prevent="addCharacteristic()" :disabled="!this.statusEdit">+</button>
                          <button class="form-add ms-1" v-on:click.prevent="removeCharacteristic()" :disabled="!this.statusEdit">-</button>
                        </div>
                      </div>
                      <div class="form-group">
                          <router-link :to="{name: 'recepcionista-habitaciones'}" class="button raise btn-red" type="button" :hidden="this.statusEdit">Volver</router-link>
                      </div>
                    </div>
                </form>
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
      habitacion: {},
      statusEdit: false,
    }),
    created() {
      // Peticion para lista de habitaciones
      axios.get(`api/habitaciones/${this.$route.params.id}`)
      .then((data) => {
        this.habitacion = data.data.data;
        this.habitacion.caracteristicas = Object.entries(this.habitacion.caracteristicas).map(([nombre, caracteristica]) => ({
          nombre,
          ...caracteristica
        }));
      });
    },
    methods: {
      trueEdit() {
        this.statusEdit = true;
      },
      falseEdit() {
        this.statusEdit = false;
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
  