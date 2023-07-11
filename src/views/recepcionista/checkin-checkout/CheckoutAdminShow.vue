<template>
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarRecepcionista />
                </SidebarComponent>

                <div class="app-content">
                    <HeaderComponent>
                        <template #title> Detalles de Checkout</template>
                    </HeaderComponent>
                    <ShowDataCheckout :id=this.id>

                    </ShowDataCheckout> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import SidebarComponent from '@/components/SidebarComponent.vue';
import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ShowDataCheckout from '@/components/AdminShowDataCheckout.vue'; 


export default {
    name: "CheckinAdminShow",
    data(){
        return {
            id: this.$route.params.id,
            
        }
    },
    components: {
    SidebarComponent,
    ListSidebarRecepcionista,
    HeaderComponent,
    ShowDataCheckout
},
    mounted(){
        console.log(this.$route.params.id);
    },
    
}

</script>