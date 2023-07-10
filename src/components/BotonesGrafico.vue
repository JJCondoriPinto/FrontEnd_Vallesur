<template>
  <div>
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap"
        rel="stylesheet"
      />
      <router-link :to="{ name: 'recepcionista-reportes' }">
        <button type="button" :class="{ 'first custom-font-size' : true, 'activo': isRouteActive('recepcionista-reportes') }">
        <span class="tamano">GENERALES</span>
        <svg-icon type="mdi" :path="path" id="icono"></svg-icon>
      </button></router-link>
      
 
    </div>

    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap"
        rel="stylesheet"
      />
      <router-link :to="{ name: 'recepcionista-reportes-precios' }">
        <button type="button" :class="{ 'second custom-font-size' : true, 'activo': isRouteActive('recepcionista-reportes-precios') }">
          <span class="tamano">PRECIOS</span>
          <svg-icon type="mdi" :path="path2" id="icono"></svg-icon>
        </button>
      </router-link>
    </div>

    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap"
        rel="stylesheet"
      />
      <router-link :to="{ name: 'recepcionista-reportes-personas' }">
        <button type="button" :class="{ 'third custom-font-size' : true, 'activo': isRouteActive('recepcionista-reportes-personas') }">
          <span class="tamano">PERSONAS</span>
          <svg-icon type="mdi" :path="path3" id="icono"></svg-icon>
        </button>
      </router-link>
    </div>
    
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChartAreaspline } from "@mdi/js";
import { mdiCurrencyUsd } from "@mdi/js";
import { mdiAccountMultipleCheck } from "@mdi/js";

export default {
  name: 'BotonesGraficos',
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiChartAreaspline,
      path2: mdiCurrencyUsd,
      path3: mdiAccountMultipleCheck,
    };
  },
  methods:{
    isRouteActive(routeName) {
            return this.$route.name === routeName;
        }
  }
};
</script>

<style>

.first {
/*     border-color: #1a2740;
    color: #fff;
    box-shadow: 0 0 40px 40px #1a2740 inset, 0 0 0 0 #1a2740; */
    background-color:#1a2740;
    border-color:#1a2740 ;
    color: #fff;
    transition: all 150ms ease-in-out;
    border-radius: 10px;
    width: 20em;
    height: 100px;
    font-family: "Mochiy Pop P One", sans-serif;
    text-align: left;
    /*-webkit-text-stroke: 1px black;*/ /*Le da borde a las letras */
    position: absolute;
    top: 100px;
    left: 340px;
  }

  .second {
/*     border-color: #1a2740;
    color: #fff;
    box-shadow: 0 0 40px 40px #1a2740 inset, 0 0 0 0 #1a2740; */
    background-color:#1a2740;
    border-color:#1a2740 ;
    color: #fff;
    transition: all 150ms ease-in-out;
    border-radius: 10px;
    width: 20em;
    height: 100px;
    font-family: "Mochiy Pop P One", sans-serif;
    text-align: left;
    /*-webkit-text-stroke: 1px black;*/ /*Le da borde a las letras */
    position: absolute;
    top: 100px;
    left: 685px;
  }
  
  .third {
/*     border-color: #1a2740;
    color: #fff;
    box-shadow: 0 0 40px 40px #1a2740 inset, 0 0 0 0 #1a2740; */
    background-color:#1a2740;
    border-color:#1a2740 ;
    color: #fff;
    transition: all 150ms ease-in-out;
    border-radius: 10px;
    width: 20em;
    height: 100px;
    font-family: "Mochiy Pop P One", sans-serif;
    /*-webkit-text-stroke: 1px black;*/ /*Le da borde a las letras */
    position: absolute;
    top: 100px;
    left: 1025px;
  }
  
  .tamano {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #icono {
    width: 55px;
    height: 55px;
    margin-left: 200px;
    color: #fff;
  }
  
  .app-content {
    font-family: "Mochiy Pop P One", sans-serif;
  }


.activo{
    background-color: #2c3d5e;
}

</style>