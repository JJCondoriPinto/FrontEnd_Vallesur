<template>
  <div>
    <div class="row align-items-start justify-content-start mt-1">
      <div class="col-auto">
        <router-link :to="{ name: 'recepcionista-check' }">
          <button
            type="button"
            :class="{
              'boton-checkin custom-font-size': true,
              activo: isRouteActive('recepcionista-check'),
            }"
          >
            <span class="tamano">CHECKIN</span>
          </button>
        </router-link>
      </div>
      <div class="col-auto">
        <router-link :to="{ name: 'recepcionista-check-out' }">
          <button
            type="button"
            :class="{
              'boton-checkout custom-font-size': true,
              activo: isRouteActive('recepcionista-check-out'),
            }"
          >
            <span class="tamano">CHECKOUT</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "BotonesGraficos",
  components: {},
  data() {
    return {};
  },
  methods: {
    isRouteActive(routeName) {
      return this.$route.name === routeName;
    },
  },
};
</script>

<style scoped>
.boton-checkin {
  background-color: #1a2740;
  width: 250px;
  height: 70px;
  border-radius: 10px;
}

.boton-checkout {
  background-color: #1a2740;

  width: 250px;
  height: 70px;
  border-radius: 10px;
}

.activo {
  background-color: #2c3d5e;
}
</style>
