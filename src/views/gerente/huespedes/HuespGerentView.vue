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

                    <GerenteHuespedesHeader></GerenteHuespedesHeader>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import SidebarComponent from '@/components/SidebarComponent.vue';
    import ListSidebarGerente from '@/components/ListSidebarGerente.vue';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import GerenteHuespedesHeader from '@/components/GerenteHuespedesTable';

    export default{
        name:"HuespedesGerenteView",
        components: {
            SidebarComponent,
            ListSidebarGerente,
            HeaderComponent,
            GerenteHuespedesHeader,
        }
    }
</script>
<style scoped>
    @import url('@/css/app.css');
</style>