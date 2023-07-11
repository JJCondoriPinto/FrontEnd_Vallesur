<script setup>
    /* function deleteRecep(id) {
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
    } */
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
            </template>
            <template #button-insert>
              <router-link :to="{ name: 'gerente-recepcionistas-create' }">
                <button class="app-content-headerButton">
                  Registrar recepcionista
                </button>
              </router-link>
            </template>
          </HeaderComponent>

          <RecepcionistasTable>

          </RecepcionistasTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import ListSidebarGerente from "@/components/ListSidebarGerente.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import RecepcionistasTable from "@/components/GerenteRecepcionistasTable.vue";

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
    RecepcionistasTable
  },
};
</script>

<style scoped>
  @import url("@/css/app.css");
  a {
    text-decoration: none;
  }
</style>