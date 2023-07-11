<template>
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarGerente />
                </SidebarComponent>

                <div class="app-content">
                    <HeaderComponent>   
                        <template #title> Inicio </template>
                        <template #button-insert>
                            <button class="app-content-headerButton" v-on:click="addRemind()" data-bs-toggle="modal" data-bs-target="#newRemind" data-bs-whatever="@mdo">
                                Añadir recordatorio
                            </button>
                        </template>
                    </HeaderComponent>

                    <!-- Contenido del dashboard -->
                    <div class="container mt-4 gap-3 card-home">    
                        <StatisticsHomeComponent> </StatisticsHomeComponent>
                        <ReminderHomeComponent ref="ReminderHomeComponent"> </ReminderHomeComponent>
                    </div>
                    <!-- Fin del contenido del dashboard -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import ListSidebarGerente from "@/components/ListSidebarGerente.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import StatisticsHomeComponent from "@/components/StatisticsHomeComponent.vue"
import ReminderHomeComponent from "@/components/ReminderHomeComponent.vue";

export default {
    name: "HomeGerenteView",
    components: {
        SidebarComponent,
        ListSidebarGerente,
        HeaderComponent,
        StatisticsHomeComponent,
        ReminderHomeComponent
    },
    methods: {
        addRemind() {
            this.$refs.ReminderHomeComponent.addRemind();
        }
    }
};
</script>

<style>
@import url("@/css/app.css");
</style>
