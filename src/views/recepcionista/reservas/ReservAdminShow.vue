<template>
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarRecepcionista />
                </SidebarComponent>

                <div class="app-content">
                    <HeaderComponent>
                        <template #title> Detalles de Reserva</template>
                    </HeaderComponent>
                    <ShowData :id=this.id>

                    </ShowData>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import SidebarComponent from '@/components/SidebarComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ShowData from '@/components/AdminShowDataReserva.vue';


export default {
    name: "ReservAdminShow",
    data(){
        return {
            id: this.$route.params.id,
            
        }
    },
    components: {
    SidebarComponent,
    ListSidebarRecepcionista,
    HeaderComponent,
    ShowData,
},
    mounted(){
        console.log(this.$route.params.id);
    },
    
    
}


</script>