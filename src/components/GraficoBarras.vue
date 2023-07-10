<template>
    <div class="graficobarras">
     <canvas id="myChart" ></canvas>
    </div>
 </template>
 
 <script>
 import Chart from 'chart.js/auto';
 
 export default{
 
 mounted() {
     console.log('Componente mounted.')
     var ctx = document.getElementById('myChart');
     var myChart = new Chart(ctx, {
                 type:'bar',
                 data:{
                     datasets: [{
                         label: 'Consumo promedio por Servicio',
                         backgroundColor: [
                             'rgba(255, 99, 132, 1)',
                             'rgba(255, 159, 64, 1)',
                             'rgba(255, 205, 86, 1)',
                             'rgba(75, 192, 192, 1)',
                             'rgba(54, 162, 235, 1)',
                             'rgba(153, 102, 255, 1)',
                             'rgba(201, 203, 207, 1)'
                             ],
                             borderColor: [
                             'rgb(255, 99, 132)',
                             'rgb(255, 159, 64)',
                             'rgb(255, 205, 86)',
                             'rgb(75, 192, 192)',
                             'rgb(54, 162, 235)',
                             'rgb(153, 102, 255)',
                             'rgb(201, 203, 207)'
                             ],
                         borderWidth:2
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
             let url = 'http://127.0.0.1:8000/api/grafico_barras_2'
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
                 myChart.data['labels'].push(element.tipo)
                 myChart.data['datasets'][0].data.push(element.costoPromedio)
                 myChart.update()
             });
             
             })
             .catch(function(error) {
             
             console.error('Error:', error);
             console.log(element);    
         });
 
 myChart;
 }
 }
 
 </script>
 
 <style>
 .graficobarras {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  padding-top: 0;
  margin-top: 10em;
}

#myChart{
    background: #1a2740;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    width: 100%;

}

 </style>