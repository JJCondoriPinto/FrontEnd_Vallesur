<script setup>
    /* eslint-disable */

    import { useRouter } from 'vue-router';

    const router = useRouter();

    function create(target) {
      // Convertimos caracteristicas a json:
      const newCaracteristicas = {};
      const oldCaracteristicas = target.habitacion.caracteristicas;

      target.habitacion.caracteristicas.forEach(caracteristica => {
        newCaracteristicas[caracteristica.nombre] = {
          cantidad: caracteristica.cantidad,
          descripcion: caracteristica.descripcion
        };
      });

      target.habitacion.caracteristicas = newCaracteristicas;
      
      axios.post('api/habitaciones', target.habitacion)
      .then(res => {
        if (res.status == 200) {
          target.habitacion.caracteristicas = oldCaracteristicas;
          router.push({ name: 'gerente-habitaciones' });
        }
      })
      .catch(err => {
        console.log(err);
      })
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
              <template #title> Registro de habitacion 
              </template>
            </HeaderComponent>

            <!-- aqui contenido de habitacion -->
            <div class="form-parent">
                <form v-on:submit.prevent="create(this)" class="form" method="POST">
                    <input type="hidden" v-model="this.habitacion.estado" name="estado">
                    <div class="sub-form">
                      <div class="subform-title">
                        <h3>General</h3>
                      </div>
                      <div class="form-group">
                          <input v-model="this.habitacion.nro_habitacion" class="form-input" type="number" name="nro_habitacion" placeholder="Nro de habitación" required />
                      </div>
                      <div class="form-group">
                          <input v-model="this.habitacion.nro_piso" class="form-input" type="text" name="nro_piso" placeholder="Nro de piso" required />
                      </div>
                      <div class="form-group">
                          <input v-model="this.habitacion.tipo_habitacion" class="form-input" type="text" placeholder="Tipo de habitación" name="tipo_habitacion" required />
                      </div>
                      <div class="form-group">
                          <input v-model="this.habitacion.precio" class="form-input" type="number" placeholder="Precio de reserva" name="precio" step="0.01" required />
                      </div>
                      <div class="form-group">
                          <input  v-model="this.habitacion.tamaño" class="form-input" type="text" placeholder="Tamaño de habitación ej.(1.0 m2)" name="tamaño" required />
                      </div>
                      <div class="form-group">
                          <input v-model="this.habitacion.imagen" class="form-input" type="url" placeholder="URL de imagen" name="imagen" required />
                      </div>
                    </div>
                    <div class="sub-form">
                      <div class="subform-title">
                        <h3>Cotenido de habitación</h3>
                      </div>
                      <div class="form-group" id="caracteristicas">
                        <div class="form-subgroup px-3" v-for="(caracteristica, nombre) in habitacion.caracteristicas" :key="nombre">
                          <input class="form-input" type="text" placeholder="Nombre" required v-model="caracteristica.nombre">
                          <input class="form-input" type="number" placeholder="Cantidad" required v-model="caracteristica.cantidad">
                          <textarea class="form-input" name="" id="" rows="3" placeholder="Descripcion" required v-model="caracteristica.descripcion"></textarea>
                        </div>
                        <div class="form-button">
                          <button class="form-add me-1" v-on:click.prevent="addCharacteristic()">+</button>
                          <button class="form-add ms-1" v-on:click.prevent="removeCharacteristic()">-</button>
                        </div>
                      </div>
                      <div class="form-group">
                          <button type="submit" class="raise btn-green">Registrar habitación</button>
                          <router-link :to="{ name: 'gerente-habitaciones' }" class="raise btn-red button">Cancelar</router-link>
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
  
  import axios from 'axios';

  export default {
    name: "HabitGerenteCreateView",
    data() {
      return {
        habitacion: {
          nro_habitacion: null,
          nro_piso: "",
          tipo_habitacion: null,
          precio: null,
          tamaño: null,
          estado: 'Libre',
          imagen: null,
          
          caracteristicas: []
        },
      }
    },
    methods: {
      addCharacteristic() {
        const nuevaCaracteristica = {
          nombre: "",
          cantidad: null,
          descripcion: ""
        };
        this.habitacion.caracteristicas.push(nuevaCaracteristica);
      },
      removeCharacteristic() {
        if (this.habitacion.caracteristicas.length > 0) {
          this.habitacion.caracteristicas.pop();
        }
      }
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