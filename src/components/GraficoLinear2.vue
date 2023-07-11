<template>
    <div class="graficolinear2">
        <canvas id="myChart7" width="600" height="450"></canvas>
    </div>
</template>

<script>
import axios from "axios";
import Chart from "chart.js/auto";

export default {
    mounted() {
        console.log("Componente mounted.");
        var ctx = document.getElementById("myChart7").getContext("2d");
        var myChart7 = new Chart(ctx, {
            type: "line",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "Cantidad de CheckOuts por Año",
                        data: [],
                        borderColor: "rgba(255, 99, 132)",

                        fill: true,
                    },
                ],
            },
            options: {
                responsive: false,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
        var element;
        let url = "/api/grafico_linear_2";
        axios
            .get(url)
            .then(function (data) {
                data.data.forEach((element) => {
                    myChart7.data["labels"].push(element.año);
                    myChart7.data["datasets"][0].data.push(element.count);
                    myChart7.update();
                });
            })
            .catch(function (error) {
                console.error("Error:", error);
                console.log(element);
            });

        myChart7;
    },
};
</script>

<style>
.graficolinear2 {
    display: flex;
    justify-content: center;
    width: auto;
    padding: 20px;
    padding-top: 0;
}

#myChart7 {
    background: #1a2740;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    width: 100%;
}
</style>
