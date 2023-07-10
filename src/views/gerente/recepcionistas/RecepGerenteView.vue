<script setup>
    function deleteRecep(id) {
        if ( confirm('¿Está seguro que desea eliminar a este recepcionista?') ) {
            axios.delete('api/recepcionistas', {params: {id:id}})
            .then(res => {
                if (res.status == 200) {
                    document.getElementById(id).remove();
                }
            })
            .catch(err => {
                console.log(err);
            })  
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
            <template #title> Recepcionistas </template>-++
            <template #actions>
              <ActionsComponent />
            </template>
            <template #button-insert>
              <router-link :to="{ name: 'gerente-recepcionistas-create' }">
                <button class="app-content-headerButton">
                  Registrar recepcionista
                </button>
              </router-link>
            </template>
          </HeaderComponent>

          <table class="products-area-wrapper tableView">
            <div class="products-header">
                <div class="product-cell">
                  Identificacion
                  <button class="sort-button" onclick="sortList('identificacion')">
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
                  Nombres
                  <button class="sort-button" onclick="sortList('nombres')">
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
                    Apellidos
                    <button class="sort-button" onclick="sortList('apellidos')">
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
                <div class="product-cell stock">
                    Turno
                    <button class="sort-button" onclick="sortList('apellidos')">
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
                <div class="product-cell stock">
                    Telefono
                    <button class="sort-button" onclick="sortList('apellidos')">
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
                <div class="product-cell price">Accion</div>
            </div>

            <!-- Aquí la lista de recepcionistas -->
            <router-link :to="{ name:'gerente-recepcionistas-show', params: {id: recep._id} }" class="row-element" v-for="recep in recepcionistas" :key="recep._id" :id="recep._id">
              <tbody class="products-row">
                  <td class="product-cell identificacion">
                    <span class="value-row">{{ recep.dni }}</span>
                  </td>
                  <td class="product-cell nombres">
                    <span class="cell-label">Nombres:</span>
                    <span class="value-row">{{ recep.nombres }}</span>
                  </td>
  
                  <td class="product-cell apellidos">
                    <span class="cell-label">Apellidos:</span>
                    <span class="value-row">{{ recep.apellidos }}</span>
                  </td>
  
                  <td class="product-cell turno">
                    <span class="cell-label">Turno:</span>
                    <span class="value-row">{{ recep.turno }}</span>
                  </td>

                  <td class="product-cell telefono">
                    <span class="cell-label">Telefono:</span>
                    <span class="value-row">{{ recep.telefono }}</span>
                  </td>
  
                  <td class="product-cell action">
                    <button v-on:click.prevent="deleteRecep(recep._id)" class="raise btn-red">
                      Eliminar
                    </button>
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
import ListSidebarGerente from "@/components/ListSidebarGerente.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ActionsComponent from "@/components/ActionsComponent.vue";

import axios from "axios";

export default {
  name: "RecepGerenteView",
  data: () => ({
    recepcionistas: null,
  }),
  created() {
    // Peticion para lista de recepcionistas
    axios.get("api/recepcionistas").then((res) => {
      this.recepcionistas = res.data.data;
    });
  },
  components: {
    SidebarComponent,
    ListSidebarGerente,
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
