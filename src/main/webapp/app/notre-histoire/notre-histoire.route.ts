import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { NotreHistoireComponent } from './notre-histoire.component';

export const NOTRE_HISTOIRE_ROUTE: Route = {
  path: 'notre-histoire',
  component: NotreHistoireComponent,
  data: {
    authorities: [],
    pageTitle: 'notre-histoire.title'
  },
  canActivate: [UserRouteAccessService]
};
