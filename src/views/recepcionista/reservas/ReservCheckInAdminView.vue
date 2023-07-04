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
                    </HeaderComponent>
                    <AdminGenerateCheckin :id=this.id>

                    </AdminGenerateCheckin>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import AdminGenerateCheckin from '@/components/AdminGenerateCheckin.vue';

export default {
    
    components: {
        SidebarComponent,
        ListSidebarRecepcionista,
        HeaderComponent,
        AdminGenerateCheckin
    },
    data(){
        return {
            id: this.$route.params.id,
        }
    },
    mounted(){
        console.log(this.$route.params.id);
    }
}
</script>