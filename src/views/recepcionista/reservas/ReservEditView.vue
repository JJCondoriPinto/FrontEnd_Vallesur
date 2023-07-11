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
                            Editar Reserva
                        </template>
                    </HeaderComponent>
                    <AdminEditarReserva :id=this.id>

                    </AdminEditarReserva>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import AdminEditarReserva from '@/components/AdminReservasEditar.vue';

export default {
    name: 'ReservasEditarRecepView',
    components: {
        SidebarComponent,
        ListSidebarRecepcionista,
        HeaderComponent,
        AdminEditarReserva,
    },
    data(){
        return {
            id: this.$route.params.id,
        }
    }

}
</script>
<style>
@import url('@/css/app.css');
</style>