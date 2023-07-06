import HomeGerenteView from "@/views/gerente/HomeGerenteView.vue";
import HuespedesGerenteView from "@/views/gerente/huespedes/HuespGerentView.vue";
import HuespedesGerenteShow from "@/views/gerente/huespedes/HuespGerentShow.vue";
import HuespedesGerenteEdit from "@/views/gerente/huespedes/HuespGerentEdit.vue";
import HabitGerenteView from "@/views/gerente/habitaciones/HabitGerenteView.vue";
import HabitGerenteShowView from "@/views/gerente/habitaciones/HabitGerenteShowView.vue";
import HabitGerenteCreateView from "@/views/gerente/habitaciones/HabitGerenteCreateView.vue";

const routes_gerente = [
  {
    path: "",
    name: "gerente-home",
    component: HomeGerenteView,
  },
  {
    path: "huespedes",
    name: "gerente-huespedes",
    component: HuespedesGerenteView,
  },
  {
    path: "huespedes-show/:id",
    name: "gerente-huespedes-show",
    component: HuespedesGerenteShow,
  },
  {
    path: "huespedes-edit/:id",
    name: "gerente-huespedes-edit",
    component: HuespedesGerenteEdit,
  },
  {
    path: "habitaciones",
    children: [
      {
        path: "",
        name: "gerente-habitaciones",
        component: HabitGerenteView,
      },
      {
        path: ":id",
        name: "gerente-habitaciones-show",
        component: HabitGerenteShowView,
      },
      {
        path: "create",
        name: "gerente-habitaciones-create",
        component: HabitGerenteCreateView,
      },
    ],
  },
  {
    path: "recepcionistas",
    name: "gerente-recepcionistas",
  },
  {
    path: "reportes",
    name: "gerente-reportes",
  },
  {
    path: "",
    name: "gerente-create-habitacion",
  },
];

export default routes_gerente;
