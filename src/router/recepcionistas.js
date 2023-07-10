import HomeRecepView from '@/views/recepcionista/HomeRecepView.vue'
import RecepcionistaReservasView from '@/views/recepcionista/reservas/ReservAdminView.vue';
import RecepcionistaHuespedesView from '@/views/recepcionista/huespedes/HuespAdminView.vue';
import RecepcionistaReservaGenerateCheckInView from '@/views/recepcionista/reservas/ReservCheckInAdminView.vue';
import ReservasCreateAuth from '@/views/recepcionista/reservas/ReservCreateAuth.vue';
import ReservasCreateUser from '@/views/recepcionista/reservas/ReservCreateHuesped.vue'
import ReservasCreate from '@/views/recepcionista/reservas/ReservCreate.vue';
import ReservasEditarRecepView from '@/views/recepcionista/reservas/ReservEditView.vue';
import ReportesGerente from '@/views/gerente/gerente_reportes/ReportesGerente'
import ReportesGerentePrecios from '@/views/gerente/gerente_reportes/ReportesGerentePrecios'
import ReportesGerentePersonas from '@/views/gerente/gerente_reportes/ReportesGerentePersonas'
import CheckinView from '@/views/recepcionista/checkin-checkout/CheckinView'
import CheckOutView from '@/views/recepcionista/checkin-checkout/CheckoutView'
import GenerateCheckout from '@/views/recepcionista/checkin-checkout/GenerateCheckout'
import HabitRecepShowView from '@/views/recepcionista/habitaciones/HabitRecepShowView'
import HabitRecepView from '@/views/recepcionista/habitaciones/HabitRecepView'

const routes_recepcionista = [
  {
    path: "",
    name: "recepcionista-home",
    component: HomeRecepView,
  },
  {
    path: "huespedes",
    name: "recepcionista-huespedes",
    component: RecepcionistaHuespedesView
  },
  {
    path: "habitaciones",
    children: [
      {
        path: "",
        name: "recepcionista-habitaciones",
        component: HabitRecepView,
      },
      {
        path: ":id",
        name: "recepcionista-habitaciones-show",
        component: HabitRecepShowView,
      },
    ]
  },
  {
    path: "reservas",
    name: "recepcionista-reservas",
    component: RecepcionistaReservasView
  },
  {
    path: "reservas-editar/:id",
    name: "recepcionista-editar-reservas",
    component: ReservasEditarRecepView
  },
  {
    path: "reservas-create-1",
    name: "reservas-create-auth",
    component: ReservasCreateAuth
  },
  {
    path: "reservas-create-2",
    name: "reservas-create-huesped",
    component: ReservasCreateUser
  },
  {
    path: "reservas-create-3/:id",
    name: "reservas-create",
    component: ReservasCreate
  },
  {
    path: "reservas-checkin/:id",
    name: "recepcionista-generate-checkin",
    component: RecepcionistaReservaGenerateCheckInView
  },
  {
    path: "check",
    name: "recepcionista-check",
    component: CheckinView 
  },
  {
    path: "checkout",
    name: "recepcionista-check-out",
    component: CheckOutView
  },
  {
    path: "checkout-generate/:id",
    name: "recepcionista-check-out-generate",
    component: GenerateCheckout
  },

  {
    path: "reportes",
    name: "recepcionista-reportes",
    component: ReportesGerente,
  },

  {
    path: "reportes/precios",
    name: "recepcionista-reportes-precios",
    component: ReportesGerentePrecios,
  },

  {
    path: "reportes/personas",
    name: "recepcionista-reportes-personas",
    component: ReportesGerentePersonas,
  },

  {
    path: "cochera",
    name: "recepcionista-cochera",
  }

  
];

export default routes_recepcionista;