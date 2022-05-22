import { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// configs
import { PATH, ROLE } from 'configs';

// layouts
import MainLayout from 'layouts/MainLayout';

// containers
import AuthGuard from 'guards/AuthGuard';
import GuestGuard from 'guards/GuestGuard';

// route
import RoleRoute from './RoleRoute';

// modules
const Error404View = lazy(() => import('pages/Error404View'));
const DenyView = lazy(() => import('pages/DenyView'));
const ProductAdd = lazy(() => import('pages/Product/ProductAdd'));
const ProductList = lazy(() => import('pages/Product/ProductList'));
const Users = lazy(() => import('pages/Users/UserList'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const Playbackground = lazy(() => import('pages/Playbackground'));
const Login = lazy(() => import('pages/Login'));
const Kanban = lazy(() => import('pages/Kanban'));

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to={PATH.DASHBOARD} />,
  },
  {
    exact: true,
    path: PATH.ERROR_404,
    component: Error404View,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: PATH.LOGIN,
    component: Login,
  },
  {
    exact: true,
    path: PATH.ERROR_403,
    component: DenyView,
  },
  {
    path: '/',
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: PATH.DASHBOARD,
        component: Dashboard,
        requireRoles: [ROLE.ADMIN, ROLE.LEAD],
      },
      {
        exact: true,
        path: PATH.PLAY_BACKGROUND,
        component: Playbackground,
        requireRoles: [ROLE.ADMIN, ROLE.LEAD],
      },
      {
        exact: true,
        path: PATH.PRODUCT_LIST,
        component: ProductList,
        requireRoles: [ROLE.ADMIN, ROLE.LEAD],
      },
      {
        exact: true,
        path: PATH.PRODUCT_ADD,
        component: ProductAdd,
        requireRoles: [ROLE.ADMIN],
      },
      {
        exact: true,
        path: PATH.KANBAN,
        component: Kanban,
        requireRoles: [ROLE.ADMIN, ROLE.LEAD],
      },
      {
        exact: true,
        path: PATH.USERS,
        component: Users,
        requireRoles: [ROLE.ADMIN, ROLE.LEAD],
      },
      {
        component: () => <Redirect to={PATH.ERROR_404} />,
      },
    ],
  },
  {
    path: '*',
    routes: [
      {
        exact: true,
        path: '/app',
        component: MainLayout,
      },
      {
        component: () => <Redirect to={PATH.ERROR_404} />,
      },
    ],
  },
];

// const routesConfig = [
//   {
//     exact: true,
//     path: '/',
//     component: () => <Redirect to={PATH.DASHBOARD} />,
//   },
//   {
//     exact: true,
//     guard: GuestGuard,
//     path: PATH.LOGIN,
//     component: Login,
//   },
//   {
//     path: '/',
//     guard: AuthGuard,
//     layout: MainLayout,
//     routes: [
//       {
//         exact: true,
//         path: PATH.DASHBOARD,
//         component: Dashboard,
//         requireRoles: [ROLE.ADMIN, ROLE.LEAD],
//       },
//       {
//         exact: true,
//         path: PATH.PRODUCT_LIST,
//         component: ProductList,
//         requireRoles: [ROLE.ADMIN, ROLE.LEAD],
//       },
//     ],
//   },
// ];

const renderRoutes = (routes) => {
  return (
    <>
      {routes ? (
        <Suspense fallback={<div />}>
          <Switch>
            {routes.map((route, idx) => {
              const Guard = route.guard || Fragment;
              const Layout = route.layout || Fragment;
              const Component = route.component;
              const requireRoles = route.requireRoles || [];

              return (
                <Route
                  key={`routes-${idx}`}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => (
                    <Guard>
                      <Layout>
                        {route.routes ? (
                          renderRoutes(route.routes)
                        ) : (
                          <RoleRoute requireRoles={requireRoles}>
                            <Component {...props} />
                          </RoleRoute>
                        )}
                      </Layout>
                    </Guard>
                  )}
                />
              );
            })}
          </Switch>
        </Suspense>
      ) : null}
    </>
  );
};

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
