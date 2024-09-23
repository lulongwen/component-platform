/**
 * @author lulongwen
 * Date: 2023-08-12 08:19
 * Description: 全局样式
 */

import React from 'react';
import { Navigate } from 'dumi';

const redirectData = [
  { from: '/components', to: '/components/e-charts' },
  { from: '/topology', to: '/reactflow' }
]

export const patchClientRoutes = ({ routes }: any) => {
  // console.log('app.tsx', routes)
  // routes.unshift({
  //   path: '/',
  //   element: <Navigate to="/index" replace />,
  // });

  const redirects = redirectData.map(it => ({
    path: it.from,
    element: <Navigate to={it.to} replace />,
  }));
  routes.unshift(...redirects);
};

// export function patchRoutes({ routes, routeComponents }) {
//   console.log('patchRoutes', routes, routeComponents)
// }
