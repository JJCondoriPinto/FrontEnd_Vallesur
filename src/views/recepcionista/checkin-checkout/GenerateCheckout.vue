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
            <AdminCheckOutCreate :id=this.id>
              
            </AdminCheckOutCreate>
          </div>
          
        </div>
      </div>
    </div>
  </template>

<script>
  
import SidebarComponent from "@/components/SidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ListSidebarRecepcionista from "@/components/ListSidebarRecepcionista.vue";
import AdminCheckOutCreate from "@/components/AdminCheckOutCreate";

export default {
  name: "GenerateCheckout",
  components: {
    SidebarComponent,
    ListSidebarRecepcionista,
    HeaderComponent,
    AdminCheckOutCreate,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>