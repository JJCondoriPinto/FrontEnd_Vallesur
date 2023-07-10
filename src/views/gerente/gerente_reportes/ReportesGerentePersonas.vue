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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossorigin
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap"
                  rel="stylesheet"
                />
  
                DASHBOARD: REPORTES OPERATIVOS
              </template>
            </HeaderComponent>
  
            <BotonesGrafico></BotonesGrafico>
            <GraficoBarras2></GraficoBarras2>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import SidebarComponent from "@/components/SidebarComponent.vue";
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import ListSidebarRecepcionista from "@/components/ListSidebarRecepcionista.vue";
  import GraficoBarras2 from "@/components/GraficoBarras2";
  import BotonesGrafico from "@/components/BotonesGrafico";
  export default {
    name: "HomeRecepView",
    name2: "BarChart",
    components: {
      SidebarComponent,
      ListSidebarRecepcionista,
      HeaderComponent,
      GraficoBarras2,
      BotonesGrafico,
    },
    data() {
      return {
      
      };
    },
  };
  </script>
  
  <style>
 

  </style>