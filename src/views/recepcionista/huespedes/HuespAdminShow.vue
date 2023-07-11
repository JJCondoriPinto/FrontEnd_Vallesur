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
                            Huespedes Registrados
                        </template>
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
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import ListSidebarRecepcionista from '@/components/ListSidebarRecepcionista.vue';
    import ShowData from '@/components/ShowDataHuesped.vue';
    export default{
        name: 'HuespedesRecepView',
        data(){
            return {
                id: this.$route.params.id,
            }
        },
        components: {
            SidebarComponent,
            ListSidebarRecepcionista,
            HeaderComponent,
            ShowData
        }
    }
</script>
<style>
    @import url('@/css/app.css');
</style>