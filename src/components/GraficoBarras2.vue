<template>
    <div id="graficobarras2">
     <canvas id="myChart5" width="600" height="450"></canvas>
    </div>
 </template>
 
 <script>
 import Chart from 'chart.js/auto';
 import axios from 'axios';
 export default{
 
 mounted() {
     console.log('Componente mounted.')
     var ctx = document.getElementById('myChart5');
     var myChart5 = new Chart(ctx, {
                 type:'bar',
                 data:{
                     datasets: [{
                         label: 'Huespedes por País',
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
             let url = '/api/graficos_barras_1'
             axios.get(url)
             .then(function(data) {
             data.data.forEach(element => {
                 myChart5.data['labels'].push(element.nacionalidad)
                 myChart5.data['datasets'][0].data.push(element.count)
                 myChart5.update()
             });
             
             })
             .catch(function(error) {
             
             console.error('Error:', error);
             console.log(element);    
         });
 
 myChart5;
 }
 }
 
 </script>
 
 <style>
 
 .graficobarras2 {
  display: flex;
  justify-content: center;
  grid-gap: 20px;
  width: auto;
  padding: 20px;
  padding-top: 0;
}

#myChart5 {
    background: #1a2740;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    width: 100%;
}
 </style>