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
                            Editar Checkin
                        </template>
                    </HeaderComponent>
                    <AdminCheckinEditar :id=this.id>

                    </AdminCheckinEditar>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import AdminCheckinEditar from "@/components/AdminCheckinEditar";

export default {
    name: 'CheckinEditarRecepView',
    components: {
        SidebarComponent,
        ListSidebarRecepcionista,
        HeaderComponent,
        AdminCheckinEditar,
        
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