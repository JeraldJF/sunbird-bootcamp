import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const GlobalMap = Loadable(lazy(() => import('views/Report')));
const Charts = Loadable(lazy(() => import('views/Report/Report')))


const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <GlobalMap />
    },
    {
      path: 'reports/:reportId',
      element: <Charts />
    },
  ]
};

export default MainRoutes;
