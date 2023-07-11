<template>
  <div class="row">
    <div class="">
      <div class="table-container">
        <DataTable id="tabla"
          :data="CheckIn"
          :columns="columns"
          class="tablita"
          :options="{
            responsive: true,
            autoWidth: true,
            dom: 'Bfrtip',
            language: {
              search: 'Buscar...',
              zeroRecords: 'No hay registros para mostrar',
              info: 'Mostrando del _START_ a _END_ de _TOTAL_ registros',
              infoFiltered: '(Filtrados de _MAX_ registros.)',
              paginate: {
                first: 'Primero',
                previous: 'Anterior',
                next: 'Siguiente',
                last: 'Último',
              },
            },
            buttons: botones,
          }"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>#</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Pax</th>
              <th>Recepcionista</th>
              <th>Fecha Ingreso</th>
              <th>Habitación</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
        </DataTable>
      </div>
    </div>
  </div>
  <!-- <button id="eliminar" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button> -->
</template>

<script>
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTableLib from "datatables.net-vue3";
import Buttons from "datatables.net-buttons-bs5";
import ButtonsHtml5 from "datatables.net-buttons/js/buttons.html5";
import print from "datatables.net-buttons/js/buttons.print";
import pdfmake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "datatables.net-responsive-bs5";
import JsZip from "jszip";
import $ from "jquery";

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
  },
  data() {
    return {
      CheckIn: null,
      columns: [
        {
          data: "_id",
          visible: false,
        },
        {
          data: null,
          render: function (data, type, row, meta) {
            return `${meta.row + 1}`;
          },
        },
        { data: "reserva.huesped.nombres" },
        { data: "reserva.huesped.apellidos" },
        { data: "reserva.datosReserva.pax_reserva" },
        { data: "recepcionista.nombres" },
        { data: "fecha_ingreso" },
        { data: "reserva.habitacion.tipo_habitacion" },
        { data: "reserva.habitacion.precio" },
        {
          data: null,
          render: function () {
            return `<td>
                        <button id="check_out" class="btn btn-sm btn-primary"><i class="fa-solid fa-circle-right"></i></button>
                        <button id="editar" class="btn btn-sm btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
                        
                        </td>`;
          },
        },
      ],
      botones: [
        {
          title: "Reporte de Huespedes",
          extend: "excelHtml5",
          text: '<i class="fa-solid fa-file-excel" ></i> Excel',
          className: "btn btn-success",
        },
        {
          title: "Reporte de Huespedes",
          extend: "pdfHtml5",
          text: '<i class="fa-solid fa-file-pdf" ></i> PDF',
          className: "btn btn-danger",
        },
        {
          title: "Reporte de Huespedes",
          extend: "print",
          text: '<i class="fa-solid fa-print" ></i> Imprimir',
          className: "btn btn-dark",
        },
        {
          title: "Reporte de Huespedes",
          extend: "copy",
          text: '<i class="fa-solid fa-copy" ></i> Copiar Contenido',
          className: "btn btn-light",
        },
      ],
    };
  },
  methods: {
    getCheckins() {
      axios.get("/api/checkin").then((value) => {
        console.log(value);
        this.CheckIn = value.data.data;
      });
    },
    generateCheckOut(id) {
      console.log(id);
      this.$router.push({
        name: "recepcionista-check-out-generate",
        params: { id: id },
      });
    },
    onRowClick(id) {
      this.$router.push({ name: "checkin-reservas-show", params: { id: id } });
    },

    editarCheckin(id) {
      this.$router.push({
        name: "recepcionista-editar-checkin",
        params: { id: id },
      });
    },
  },
  // APARTIR DE AQUI ES DONDE DEBO CAMBIAR LA RUTA DE SALIDA
  mounted() {
    this.getCheckins();

    this.$nextTick(() => {
      const table = $("#tabla").DataTable();
      // Aun no se para que sirve
      table.on("click", "#editar", (event) => {
        event.stopPropagation();
        const rowData = table.row($(event.currentTarget).closest("tr")).data();
        console.log(`Editar registro con ID: ${rowData._id}`);
        this.editarCheckin(rowData._id);
      });
      // Boton que me envia al checkout
      table.on("click", "#check_out", (event) => {
        event.stopPropagation();
        const rowData = table.row($(event.currentTarget).closest("tr")).data();
        this.generateCheckOut(rowData._id);
      });

      table.on("click", "tr", (event) => {
        const rowData = table.row(event.currentTarget).data();
        if (rowData != null) {
          console.log(rowData);
          this.onRowClick(rowData._id);
        }
      });
    });
  },
};
</script>

<style>
@import url("@/css/app.css");
@import "datatables.net-bs5";

.table-responsive {
  max-height: 500px;
  color: white;
  padding-right: 15px;
  margin-top: 40px;
}
</style>
