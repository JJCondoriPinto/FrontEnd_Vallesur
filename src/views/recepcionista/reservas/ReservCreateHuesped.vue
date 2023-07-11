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
                    <CreateUserForm :id="id">
                        
                    </CreateUserForm>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import CreateUserForm from '@/components/AdminReservasCreateHuesped.vue';


export default {
    name: 'ReservasCreateUser',
    data(){
        return{
            id:this.$route.params.id
        }
    },
    components: {
        SidebarComponent,
        ListSidebarRecepcionista,
        HeaderComponent,
        CreateUserForm,
    },

}
</script>