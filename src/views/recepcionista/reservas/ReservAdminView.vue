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
                            Reservas
                        </template>
                        <template #actions>
                            <ActionsReserva>

                            </ActionsReserva>
                        </template>
                    </HeaderComponent>
                    <BotonesReserva>

                    </BotonesReserva>
                    <AdminReservasTable>

                    </AdminReservasTable>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import AdminReservasTable from '@/components/AdminReservasTable.vue';
import ActionsReserva from '@/components/ActionsReserva.vue';
import BotonesReserva from '@/components/BotonesReserva.vue';

export default {
    name: 'ReservasRecepView',
    components: {
        SidebarComponent,
        ListSidebarRecepcionista,
        HeaderComponent,
        AdminReservasTable,
        ActionsReserva,
        BotonesReserva
    },
    

}
</script>
<style>
@import url('@/css/app.css');
</style>