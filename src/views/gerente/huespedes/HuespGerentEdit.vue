<template>
    <div class="html">
        <div class="body-app">
            <div class="app-container">
                <SidebarComponent>
                    <ListSidebarGerente />
                </SidebarComponent>
                <div class="app-content">
                    <HeaderComponent>
                        <template #title> Huespedes Registrados</template>
                    </HeaderComponent>
                    <ShowEditHuesped :id=this.id>

                    </ShowEditHuesped>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import ListSidebarGerente from '@/components/ListSidebarGerente.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ShowEditHuesped from '@/components/ShowEditHuesped.vue';


export default {
    name: "HuespedesGerenteShow",
    data(){
        return {
            id: this.$route.params.id,
        }
    },
    components: {
        SidebarComponent,
        ListSidebarGerente,
        HeaderComponent,
        ShowEditHuesped
    },
    mounted(){
        console.log(this.$route.params.id);
    },
    
}
</script>