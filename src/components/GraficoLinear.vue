<template>
  <div class="graficolinear">
    <canvas id="myChart2" width="750" height="500"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
    mounted() {
     console.log('Componente mounted.')
     var ctx = document.getElementById('myChart2').getContext('2d');
     var myChart2 = new Chart(ctx, {
                 type:'line',
                 data: {
                        labels: [], 
                        datasets: [{
                            label: 'Cantidad de CheckIns por Año',
                            data: [], 
                            borderColor: 'rgba(54, 162, 235, 1)',
                            backgroundColor: 'rgba(54, 162, 235, 1)',
                            fill: true
                        }]
                    },
                 options:{
                     responsive: false,
                     scales:{
                         y:{
                             beginAtZero: true
                         }
                     }   
                 }
             })
             var element;
             let url = 'http://127.0.0.1:8000/api/grafico_linear_1'
             fetch(url)
             .then(function(response) {
                 if (response.ok) {
                 return response.json();
                 } else {
                 throw new Error('Error en la petición. Código de estado:', response.status);
                 }
             })
             .then(function(data) {
             data.forEach(element => {
                 myChart2.data['labels'].push(element.año)
                 myChart2.data['datasets'][0].data.push(element.count)
                 myChart2.update()
             });
             
             })
             .catch(function(error) {
             
             console.error('Error:', error);
             console.log(element);    
         });
 
 myChart2;
 }
 }
</script>

<style>
 .graficolinear {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  padding-top: 0;
  margin-top: 10em;
}

#myChart2{
    background: #1a2740;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    width: 100%;
}

</style>
