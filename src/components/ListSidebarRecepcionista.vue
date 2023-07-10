<template>
    <li :class="{ 'sidebar-list-item': true, 'active': isRouteActive('recepcionista-home') }">
        <router-link :to="{ name: 'recepcionista-home' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
        </router-link>
    </li>
    <li :class="{ 'sidebar-list-item': true, 'active': isRouteActive('recepcionista-huespedes') }">
        <router-link :to="{ name: 'recepcionista-huespedes' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-shopping-bag">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Huespedes</span>
        </router-link>
    </li>
    <li :class="{ 'sidebar-list-item': true, 'active': isRouteActive('recepcionista-habitaciones') }">
        <router-link :to="{ name: 'recepcionista-habitaciones' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-pie-chart">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
            <span>Habitaciones</span>
        </router-link>
    </li>
    <li :class="{ 'sidebar-list-item': true, 'active': isRouteActive('recepcionista-reservas') }">
        <router-link :to="{ name: 'recepcionista-reservas' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap=“round” stroke-linejoin="round"
                class="feather feather-book">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span>Reservas</span>
        </router-link>
    </li>
    <li :class="{ 'sidebar-list-item': true, 'active': isRouteActive('recepcionista-check') }">
        <router-link :to="{ name: 'recepcionista-check' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-clock">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Check-in/Check-out</span>
        </router-link>
    </li>
    <li :class="{ 'sidebar-list-item': true, 'active': isRouteActive('recepcionista-reportes') }">
        <router-link :to="{ name: 'recepcionista-reportes' }">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12v-2a4 4 0 0 0-3-3.87V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8" />
                <polyline points="22,12 18,12 15,21" />
                <line x1="10" y1="9" x2="10" y2="9" />
                <line x1="10" y1="13" x2="10" y2="13" />
                <line x1="14" y1="9" x2="14" y2="9" />
                <line x1="14" y1="13" x2="14" y2="13" />
            </svg>

            <span>Reportes</span>
        </router-link>
    </li>
    <li :class="{ 'sidebar-list-item': true, 'active': isRouteActive('recepcionista-cochera') }">
        <router-link :to="{ name: 'recepcionista-cochera' }">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 9v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
                <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6M12 2v6.01" />
            </svg>

            <span>Cochera</span>
        </router-link>
    </li>
    <li class="sidebar-list-item ">
        <button v-on:click="logout">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
            </svg>

            <span>Cerrar sesion</span>
        </button>
    </li>
</template>

<script>
export default {
    name: 'ListSidebarRecepcionista',
    methods: {
        async logout() {
            await this.$store.dispatch('logout');
            return this.$router.push('/login');
        },
        isRouteActive(routeName) {
            return this.$route.name === routeName;
        }
    }
}
</script>