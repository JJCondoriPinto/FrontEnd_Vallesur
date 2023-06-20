import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../LoginView.vue'
import AboutView from '../views/AboutView.vue'
import AboutRecep from '../views/AboutRecep.vue'
import AboutGerente from '../views/AboutGerente.vue'
import store from '../store'

const homePageUsers = {
  gerente: '/gerente',
  recepcionista: 'recepcionista',
}

function isAuth() {
  return store.state.auth;
}
function getHomeUser() {
  return homePageUsers[store.state.user.rol];
}

/**
 * Rutas protegidas: meta 'requireAuth'
 */
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: (to, from, next) => {
      if (isAuth()) {
        next(getHomeUser());
      } else {
        next();
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { requireAuth: true }
  },
  {
    path: '/gerente',
    name: 'gerente',
    meta: { requireAuth: true, authRole: 'gerente'},
    children: [
      {
        path: '/',
        component: AboutGerente,
      }
    ]
  },
  {
    path: '/recepcionista',
    name: 'recepcionista',
    meta: { requireAuth: true, authRole: 'recepcionista'},
    children: [
      {
        path: '/',
        component: AboutRecep,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/**
 * Middleware para rutas protegidas por autenticación
*/
router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requireAuth)) {
    if (!isAuth() && to.name !== 'Login') {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

/**
 * Middleware para autenticación de roles
 */
router.beforeEach((to, from, next) => {
  if (!to.meta.authRole) {
    next();
  } else {
    if (to.meta.authRole === store.state.user.rol) {
      next();
    } else {
      next(getHomeUser());
    }
  }
});

export default router
