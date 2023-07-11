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
          </HeaderComponent>
          <tablaHabitaciones>
            
          </tablaHabitaciones>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import ListSidebarRecepcionista from "@/components/ListSidebarRecepcionista.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import tablaHabitaciones from '@/components/AdminHabitacionesTable.vue';



export default {
  name: "HabitRecepView",
  data: () => ({
    habitaciones: null,
  }),
  created() {
    // Peticion para lista de habitaciones

  },
  components: {
    SidebarComponent,
    ListSidebarRecepcionista,
    HeaderComponent,
    tablaHabitaciones
  },
};
</script>

<style scoped>
  @import url("@/css/app.css");
  a {
    text-decoration: none;
  }
</style>
