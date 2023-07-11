<template>
    <div class="row">
        <div class="">
            <div class="table-container" >
                <DataTable :data="products" :columns="columns" id="tabla"
                    class="tablita" :options="{
                        responsive: true, autoWidth: true, dom: 'Bfrtip', language: {
                            search: 'Buscar...',
                            zeroRecords: 'No hay registros para mostrar',
                            info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
                            infoFiltered: '(Filtrados de _MAX_ registros.)',
                            paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Último' }
                        }, buttons: botones
                    }">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>#</th>
                            <th>Nro de Habitacion</th>
                            <th>Tipo de Habitacion</th>  
                            <th>Precio</th>
                            <th>Estado</th>
                            <th>Tiempo Reservado</th>
                        </tr>
                    </thead>
                </DataTable>
                <ModalEliminar :id="selectedID">
                    
                </ModalEliminar>
                <ModalInfo :title="titleModal" :body="bodyModal">

                </ModalInfo>
                <button hidden data-bs-toggle="modal" data-bs-target="#ModalInfo" id="ModalInfoAbrir"></button>
            </div>
        </div>
    </div>
</template>
<style >
@import url('@/css/app.css');
@import 'datatables.net-bs5';

.table-responsive {
    max-height: 500px;
    color: white;
    padding-right: 15px;
    margin-top: 50px;
}
.tablita {
    background-color: var(--app-bg);
    text-align: center;
    text-transform: capitalize;
    border-collapse: collapse;
    border: 1px solid #000;

}
.dataTables_filter input {
  margin-bottom: 20px !important;
  margin-top: 30px;
  color: white;
  background-color: rgb(35, 43, 72);
  border-color: #000;
}

.pagination .paginate_button{
    cursor: pointer;
    border: 1px solid #000 !important;
    border: #000 !important;
} 
.tablita th {
    color: #fff;
    /* Color de texto para los encabezados de columna */
    font-weight: bold;
    /* Fuente en negrita para los encabezados de columna */
}

.tablita td {
    color: #fff;
    /* Color de texto para las celdas de datos */
}

.tablita tr {
    transition: background-color 0.3s ease;
    /* Transición de 0.3 segundos con aceleración */
}

.tablita {
    border-spacing: 5px;
    /* Ajusta el valor según el espacio deseado entre las celdas */
}
.dataTables_paginate a{
    background-color: rgb(35, 43, 72) !important;
    color: rgb(255, 255, 255) !important;
    border: 1px solid #000 !important;
    cursor: pointer !important;
}
.tablita{
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}


.tablita th,
.tablita td {
    padding: 10px;
    /* Ajusta el valor de padding según sea necesario */
}

tr {
    background-color: rgb(30, 30, 62);
}

.tablita tbody tr:hover {
    background-color: #130f2b;
    cursor: pointer;
}
.tablita tbody tr td {
  border-bottom: 1.5px solid rgb(30, 30, 62);
}

.tablita tbody tr {
    background-color: #130f2b;
    cursor: pointer;
    border-bottom: 1px solid #9e3c3c !important;
}

.table-responsive {
    max-height: 500px;
    color: white;
    padding-right: 15px;
    margin-top: 50px;

}
.tablita tr{
    border-bottom: 5px solid #9e3c3c !important;
}
.btn.boton-acciones{
    background-color: rgb(35, 43, 72);
}
.disponible-container{
    background-color: rgb(52, 103, 86);
    border-radius: 30px;
}
</style>
<script>
import axios from 'axios';
import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-vue3';
import Buttons from 'datatables.net-buttons-bs5';
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
import print from 'datatables.net-buttons/js/buttons.print';
import pdfmake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import 'datatables.net-responsive-bs5';
import JsZip from 'jszip';
import $ from 'jquery';
import ModalInfo from '@/components/ModalInfo.vue';
import ModalEliminar from '@/components/ModalConfirmarEliminarHuesped.vue';


pdfmake.vfs = pdfFonts.pdfMake.vfs;

window.JSZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);
DataTable.use(print);
DataTable.use(Buttons)

export default {
    components: {
        DataTable,
        ModalInfo,
        ModalEliminar,
    },
    data() {
        return {
            titleModal:'Atención',
            bodyModal:'',
            selectedID:null,
            products: null,
            columns: [
                {
                    data: '_id',
                    visible: false
                },
                {
                    data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
                },
                { data: 'nro_habitacion' },
                { data: 'tipo_habitacion' },
                { data: 'precio' },
                { data: 'estado'},
                { data: null,render:
                    function(data,type,row){
                        let inicio=row.reservado_desde;
                        let fin=row.reservado_hasta;
                        if(inicio!=null && fin!=null && inicio!="" && fin !=""){

                            return `${inicio} hasta ${fin}`
                        }else{
                            return `No disponible`
                        }
                        //return `<button @click='imprimir(${row})'>Printear</button>`
                    }
                },

            ],
            botones: [
                {
                    title: 'Reporte de Huespedes',
                    extend: 'excelHtml5',
                    text: '<i class="fa-solid fa-file-excel" ></i> Excel',
                    className: 'btn boton-acciones rounded-0'
                },
                {
                    title: 'Reporte de Huespedes',
                    extend: 'pdfHtml5',
                    text: '<i class="fa-solid fa-file-pdf" ></i> PDF',
                    className: 'btn boton-acciones rounded-0'
                },
                {
                    title: 'Reporte de Huespedes',
                    extend: 'print',
                    text: '<i class="fa-solid fa-print" ></i> Imprimir',
                    className: 'btn boton-acciones rounded-0'
                },
                {
                    title: 'Reporte de Huespedes',
                    extend: 'copy',
                    text: '<i class="fa-solid fa-copy" ></i> Copiar Contenido',
                    className: 'btn boton-acciones rounded-0'
                },

            ]
        }
    },
    mounted() {
        this.getProducts();
        this.$nextTick(() => {
            const table = $('#tabla').DataTable();
            table.on('click', 'tr', (event) => {
                const rowData = table.row(event.currentTarget).data();
                if (rowData != null) {
                    console.log(rowData);
                    this.onRowClick(rowData._id);
                }
            });
        });
    },
    methods: {
        imprimir(data){
            console.log(data);
        },
        getProducts() {
            axios.get("api/habitaciones").then(
                response => (
                    console.log(response),
                    this.products = response.data.data
                )
            );
        },

        onRowClick(id) {
            this.$router.push({ name: 'recepcionista-habitaciones-show', params: { id: id } });
        }
    }
}

</script>