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
            autoWidth: false,
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
              <th>Nombres H.</th>
              <th>Apellidos H.</th>
              <th>Fecha Salida</th>
              <th>Descripicion Salida</th>
              <th>Nombre A.</th>
              <th>Turno</th>
             
            </tr>
          </thead>
        </DataTable>
      </div>
    </div>
  </div>
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
        { data: "checkin.reserva.huesped.nombres" },
        { data: "checkin.reserva.huesped.apellidos" },
        {
          data: "created_at",
          render: function (data) {
            // Crear un objeto Date a partir de la cadena de fecha
            const fecha = new Date(data);

            // Obtener el día del mes
            const dia = fecha.getDate();

            // Obtener el nombre del mes
            const mes = fecha.toLocaleString("es-ES", { month: "long" });

            // Obtener el año
            const anio = fecha.getFullYear();

            // Crear la cadena de fecha formateada
            const fechaFormateada = `${dia} de ${mes} de ${anio}`;
            return fechaFormateada;
          },
        },
        
        
        { data: "descripcion_salida" },
        { data: "recepcionista.nombres" },
        { data: "recepcionista.turno" },
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
    getCheckouts() {
      axios.get("/api/checkout").then((value) => {
        console.log(value);
        this.CheckIn = value.data.data;
      });
    },

    onRowClick(id) {
      this.$router.push({ name: "checkout-reservas-show", params: { id: id } });
    },

  },

  mounted() {
    this.getCheckouts();
    this.$nextTick(() => {
      const table = $("#tabla").DataTable();
      

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
