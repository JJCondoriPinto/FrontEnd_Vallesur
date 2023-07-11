<template>
  <div class="graficolinear">
    <canvas id="myChart2" width="600" height="450"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import axios from 'axios';
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
             let url = '/api/grafico_linear_1'
             axios.get(url)
             .then(function(data) {
             data.data.forEach(element => {
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
  display: flex;
  justify-content: center;
  width: auto;
  padding: 20px;
  padding-top: 0;
  
}

#myChart2{
    background: #1a2740;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    width: 100%;
}

</style>
