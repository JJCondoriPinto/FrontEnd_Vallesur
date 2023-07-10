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
                CHECKOUT
              </template>
            </HeaderComponent>
            <BotonesCheck></BotonesCheck>
            <AdminCheckoutTable></AdminCheckoutTable>
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
import AdminCheckoutTable from "@/components/AdminCheckoutTable.vue"

export default {
    name: "CheckOut",
    components: {
      SidebarComponent,
      ListSidebarRecepcionista,
      HeaderComponent,
      BotonesCheck,
      AdminCheckoutTable
    },
    data() {
      return {

      };
    },
  };

</script>