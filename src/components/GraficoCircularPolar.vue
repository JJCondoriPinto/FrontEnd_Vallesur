<template>
    <div id="graficocircularpolar">
      <canvas id="myChart3" width="750" height="500"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from "chart.js/auto";
  
  export default {
      mounted() {
       console.log('Componente mounted.')
       var ctx = document.getElementById('myChart3').getContext('2d');
       var myChart3 = new Chart(ctx, {
                   type:'polarArea',
                   data: {
                          labels: [], 
                          datasets: [{
                              label: 'Cantidad de CheckIns por Año',
                              data: [], 
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
               let url = 'http://127.0.0.1:8000/api/grafico_circular_polar'
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
                   myChart3.data['labels'].push(element.nombre_empresa)
                   myChart3.data['datasets'][0].data.push(element.cantidad_personas)
                   myChart3.update()
               });
               
               })
               .catch(function(error) {
               
               console.error('Error:', error);
               console.log(element);    
           });
   
   myChart3;
   }
   }
  </script>
  
  <style>
  #graficocircularpolar {
    position: absolute;
     top: 250px;
     left: 350px;
  }
  </style>
  