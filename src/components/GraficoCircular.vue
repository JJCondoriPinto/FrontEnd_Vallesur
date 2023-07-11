<template>
    <div id="graficocircular">
     <canvas id="myChart4" width="600" height="450"></canvas>
    </div>
 </template>
 
 <script>
 import Chart from 'chart.js/auto';
 import axios from 'axios';
 
 export default{
 
 mounted() {
     console.log('Componente mounted.')
     var ctx = document.getElementById('myChart4').getContext('2d');
     var myChart4 = new Chart(ctx, {
                 type:'doughnut',
                 data:{
                     datasets: [{
                         label: 'Cantidad de Recepcionistas por turno',
                         backgroundColor: [
                             'rgba(255, 99, 132, 1)',
                             'rgba(255, 159, 64, 1)',
                             'rgba(255, 205, 86, 1)',
                             'rgba(54, 162, 235, 1)',
                             'rgba(54, 162, 235, 1)',
                             'rgba(153, 102, 255, 1)',
                             'rgba(201, 203, 207, 1)'
                             ],
                             borderColor: [
                             'rgb(255, 99, 132)',
                             'rgb(255, 159, 64)',
                             'rgb(255, 205, 86)',
                             'rgb(54, 162, 235, 1)',
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
             let url = '/api/grafico_circular_1'
             axios.get(url)
             .then(function(data) {
             data.data.forEach(element => {
                 myChart4.data['labels'].push(element.turno)
                 myChart4.data['datasets'][0].data.push(element.count)
                 myChart4.update()
             });
             
             })
             .catch(function(error) {
             
             console.error('Error:', error);
             console.log(element);    
         });
 
 myChart4;
 }
 }
 
 </script>
 
 <style>
 
 .graficocircular {
  display: flex;
  justify-content: center;
  grid-gap: 20px;
  width: auto;
  padding: 20px;
  padding-top: 0;
  /*margin-top: 10em;*/
}

#myChart4 {
    background: #1a2740;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    width: 100%;

}
 </style>