<template>
  <div class="row">
    <div class="">
      <div class="table-responsive">
        <DataTable
          :data="CheckIn"
          :columns="columns"
          class="table table-striped table-bordered display table-hover table-dark"
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
              <th>Acciones</th>
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
        {
          data: null,
          render: function () {
            return `<td>
                          <button id="eliminar" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button>
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
      axios.get("/api/checkout").then((value) => {
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
  },

  mounted() {
    this.getCheckins();
    this.$nextTick(() => {
      const table = $(".table").DataTable();
      table.on("click", "#editar", (event) => {
        event.stopPropagation();
        const rowData = table.row($(event.currentTarget).closest("tr")).data();
        console.log(`Editar registro con ID: ${rowData._id}`);
        this.editarReserva(rowData._id);
      });
      table.on("click", "#check_out", (event) => {
        event.stopPropagation();
        const rowData = table.row($(event.currentTarget).closest("tr")).data();
        this.generateCheckOut(rowData._id);
      });
      table.on("click", "#eliminar", (event) => {
        event.stopPropagation();
        const rowData = table.row($(event.currentTarget).closest("tr")).data();
        if (confirm("¿Estás seguro de que deseas eliminar este elemento?")) {
          axios.delete("api/huespedes-delete/" + rowData._id).then((value) => {
            console.log(value);
            location.reload();
          });
        } else {
          // El usuario hizo clic en "Cancelar"
          // No se realiza ninguna acción
        }
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
