<template>
  <div class="html">
    <div class="body-app">
      <div class="app-container">
        <SidebarComponent>
          <ListSidebarGerente />
        </SidebarComponent>

        <div class="app-content">
          <HeaderComponent>
            <template #title> Habitaciones </template>-++
            <template #actions>

            </template>
            <template #button-insert>
              <router-link :to="{ name: 'gerente-habitaciones-create' }">
                <button class="app-content-headerButton">
                  Registrar habitación
                </button>
              </router-link>
            </template>
          </HeaderComponent>
          <TablaHabitaciones>

          </TablaHabitaciones>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import ListSidebarGerente from "@/components/ListSidebarGerente.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import TablaHabitaciones from '@/components/GerenteHabitacionesTable.vue';

import axios from "axios";

export default {
  name: "HabitGerenteView",
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
    ListSidebarGerente,
    HeaderComponent,
    TablaHabitaciones
  },
};
</script>

<style scoped>
  @import url("@/css/app.css");
  a {
    text-decoration: none;
  }
</style>
