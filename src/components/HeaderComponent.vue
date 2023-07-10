<script setup>
  function changeTheme() {
    var modeSwitch = document.querySelector('.mode-switch');
    document.documentElement.classList.toggle('light');
    modeSwitch.classList.toggle('active');
  }
</script>
<template>
  <div class="app-content-header">
    <h1 class="app-content-headerText">
      <!-- Titulo de la pagina actual -->
      <slot name="title"></slot>

    </h1>
    <button class="mode-switch" v-on:click="changeTheme()" title="Switch Theme">
      <svg
        class="moon"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        width="24"
        height="24"
        viewbox="0 0 24 24"
      >
        <defs></defs>
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </svg>
    </button>

    <!-- Opcional - boton de inserción -->
    <slot name="button-insert"></slot>

  </div>
  <slot name="actions"> </slot>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
