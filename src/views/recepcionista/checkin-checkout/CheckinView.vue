<template>
    <div class="html">
      <div class="body-app">
        <div class="app-container">
          <SidebarComponent>
            <ListSidebarRecepcionista />
          </SidebarComponent>
  
          <div class="app-content">
            <HeaderComponent>
              <template #title>
                CHECKIN
              </template>
            </HeaderComponent>
            <BotonesCheck></BotonesCheck>
            <AdminCheckinTable></AdminCheckinTable>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ListSidebarRecepcionista from "@/components/ListSidebarRecepcionista.vue";
import BotonesCheck from "@/components/BotonesCheck.vue";
import AdminCheckinTable from "@/components/AdminCheckinTable.vue";

export default {
    name: "CheckIn",
    components: {
      SidebarComponent,
      ListSidebarRecepcionista,
      HeaderComponent,
      BotonesCheck,
      AdminCheckinTable,
    },
    data() {
      return {

      };
    },
  };

</script>