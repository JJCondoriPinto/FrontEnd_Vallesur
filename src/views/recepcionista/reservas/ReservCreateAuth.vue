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
                            Ingresar Documento de Huesped
                        </template>
                    </HeaderComponent>
                    <AuthValidation>

                    </AuthValidation>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import AuthValidation from '@/components/AdminReservCreateAuth.vue';


export default {
    name: 'ReservasCreateAuth',
    components: {
        SidebarComponent,
        ListSidebarRecepcionista,
        HeaderComponent,
        AuthValidation
    },

}
</script>