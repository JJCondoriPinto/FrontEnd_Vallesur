<template>
    <div class="row">
        <div class="">
            <div class="table-container">
                <DataTable :data="reservas" :columns="columns" id="tabla"
                    class="tablita" :options="{
                        responsive: true, autoWidth: false, dom: 'Bfrtip', language: {
                            search: 'Buscar...',
                            zeroRecords: 'No hay registros para mostrar',
                            info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
                            infoFiltered: '(Filtrados de _MAX_ registros.)',
                            paginate: { first: 'Primero', previous: 'Anterior', next: 'Siguiente', last: 'Último' }
                        }, buttons: botones, select:true
                    }">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>#</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Correo</th>
                            <th>Tipo Habitación</th>
                            <th>Fecha Llegada</th>
                            <th>Canal</th>
                            <th>Empresa</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                </DataTable>
            </div>
            <div>
                
                <Modal :id=this.idSelected>

                </Modal>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import DataTable from 'datatables.net-vue3';
import DataTableLib from 'datatables.net-vue3';
import Buttons from 'datatables.net-buttons-bs5';
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
import print from 'datatables.net-buttons/js/buttons.print';
import pdfmake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import 'datatables.net-select';
import 'datatables.net-responsive-bs5';
import JsZip from 'jszip';
import $ from 'jquery';
import Modal from '@/components/ModalConfirmar.vue';


pdfmake.vfs = pdfFonts.pdfMake.vfs;

window.JSZip = JsZip;
DataTable.use(DataTableLib);
DataTable.use(pdfmake);
DataTable.use(ButtonsHtml5);
DataTable.use(print);
DataTable.use(Buttons);
export default {
    components: {
        DataTable,
        Modal
    },
    data() {
        return {
            idSelected:null,
            reservas: null,
            columns: [
                {
                    data: '_id',
                    visible: false
                },
                {
                    data: null, render: function (data, type, row, meta) { return `${meta.row + 1}` }
                },
                { data: 'huesped.nombres' },
                { data: 'huesped.apellidos' },
                { data: 'huesped.correo' },
                { data: 'habitacion.tipo_habitacion' },
                {
                    data: 'datosReserva.fecha_checkin',
                    render: function (data) {
                        const dateParts = data.split('-');
                        const year = parseInt(dateParts[0]);
                        const month = parseInt(dateParts[1]) - 1;
                        const day = parseInt(dateParts[2]);

                        const formattedDate = new Date(year, month, day).toLocaleDateString('es-PE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });

                        return formattedDate;
                    }

                },
                { data: 'datosReserva.tipo_reserva' },
                { data: 'datosReserva.empresa',render:
                    function(data){
                        return data.razon_social==null?'No Aplicó':data.razon_social;
                    }
                }, 
                { data: 'estado' },
                {
                    data: null, render: function () {
                        return `<td>
                        <button id="check_in" class="btn btn-sm btn-primary"><i class="fa-solid fa-circle-right"></i></button>
                        <button id="editar" class="btn btn-sm btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
                        </td>`;
                    }
                    /* <button id="eliminar" data-bs-toggle="modal" data-bs-target="#Habitaciones" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button> */
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
        const vueComponent = this;
        this.getReservas();
        this.$nextTick(() => {
            const table = $('#tabla').DataTable();
            table.on('click', '#editar', (event) => {
                event.stopPropagation();
                const rowData = table.row($(event.currentTarget).closest('tr')).data();
                console.log(`Editar registro con ID: ${rowData._id}`);
                this.editarReserva(rowData._id);

            });
            table.on('click', '#check_in', (event) => {
                event.stopPropagation();
                const rowData = table.row($(event.currentTarget).closest('tr')).data();
                this.generateCheckIn(rowData._id);
            });
            table.on('click', '#eliminar', (event) => {
                event.stopPropagation();
                const rowData = table.row($(event.currentTarget).closest('tr')).data();
                this.idSelected=rowData._id;
                console.log("ID RESERVA: ",rowData._id)
            });
            table.on('select', function (e, dt, type, indexes) {
                var rowData = table.rows(indexes).data().toArray();

                console.log(rowData[0]);
                vueComponent.$router.push({name:'recepcionista-reservas-show',params:{id:rowData[0]._id}});
            })
            
        });
    },
    methods: {
        
        editarReserva(id) {
            this.$router.push({ name: 'recepcionista-editar-reservas', params: { id: id } });
        },
        generateCheckIn(id) {
            this.$router.push({ name: 'recepcionista-generate-checkin', params: { id: id } });
        },
        getReservas() {
            axios.get("/api/reserva").then(
                response => (
                    console.log(response),
                    this.reservas = response.data.data
                )
            ).catch((error)=>{
                console.log(error);

            })
            ;
        },
        onRowClick(id) {
            this.$router.push({ name: 'recepcionista-huespedes-show', params: { id: id } });
        }
    }
}


</script>