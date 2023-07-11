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
                            Registrar Reserva
                        </template>
                    </HeaderComponent>
                    <FormReserva :id=this.id>

                    </FormReserva>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import FormReserva from '@/components/AdminReservasCreate.vue';


export default {
    name: 'ReservasCreate',
    data(){
        return {
            id: this.$route.params.id,
        }
    },
    components: {
        SidebarComponent,
        ListSidebarRecepcionista,
        HeaderComponent,
        FormReserva
    },

}
</script>