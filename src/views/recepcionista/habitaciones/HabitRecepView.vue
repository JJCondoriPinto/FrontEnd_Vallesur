<script setup>

</script>

<template>
  <div class="html">
    <div class="body-app">
      <div class="app-container">
        <SidebarComponent>
          <ListSidebarRecepcionista />
        </SidebarComponent>

        <div class="app-content">
          <HeaderComponent>
            <template #title> Habitaciones </template>-++
            <template #actions>
              <ActionsComponent />
            </template>
          </HeaderComponent>

          <table class="products-area-wrapper tableView">
            <div class="products-header">
                <div class="product-cell">
                  Nro habitación
                  <button class="sort-button" onclick="sortList('nroHabitacion')">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewbox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                      />
                    </svg>
                  </button>
                </div>
                <div class="product-cell status-cell">
                  Tipo
                  <button class="sort-button" onclick="sortList('tipo')">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewbox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                      />
                    </svg>
                  </button>
                </div>
                <div class="product-cell sales">
                  Precio
                  <button class="sort-button" onclick="sortList('precio')">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewbox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                      />
                    </svg>
                  </button>
                </div>
                <div class="product-cell stock">Estado</div>
            </div>

            <!-- Aquí la lista de habitaciones -->
            <router-link :to="{ name:'recepcionista-habitaciones-show', params: {id: hab._id} }" class="row-element" v-for="hab in habitaciones" :key="hab._id" :id="hab._id">
              <tbody class="products-row">
                  <td class="product-cell nroHabitacion">
                    <span class="value-row">{{ hab.nro_habitacion }}</span>
                  </td>
                  <td class="product-cell tipo">
                    <span class="cell-label">Tipo:</span>
                    <span class="value-row">{{ hab.tipo_habitacion }}</span>
                  </td>
  
                  <td class="product-cell precio">
                    <span class="cell-label">Precio:</span>
                    <span class="value-row">{{ hab.precio }}</span>
                  </td>
  
                  <td class="product-cell estado">
                    <span class="cell-label">Estado:</span>
                    <span class="value-row status" :class="hab.estado">{{ hab.estado }}</span>
                  </td>
  
              </tbody>
            </router-link>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import ListSidebarRecepcionista from "@/components/ListSidebarRecepcionista.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ActionsComponent from "@/components/ActionsComponent.vue";

import axios from "axios";

export default {
  name: "HabitRecepView",
  data: () => ({
    habitaciones: null,
  }),
  created() {
    // Peticion para lista de habitaciones
    axios.get("api/habitaciones").then((res) => {
      this.habitaciones = res.data.data;
    });
  },
  components: {
    SidebarComponent,
    ListSidebarRecepcionista,
    HeaderComponent,
    ActionsComponent,
  },
};
</script>

<style scoped>
  @import url("@/css/app.css");
  a {
    text-decoration: none;
  }
</style>
