import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { InfoComponent } from './info.component';

export const INFO_ROUTE: Route = {
  path: 'info',
  component: InfoComponent,
  data: {
    authorities: [],
    pageTitle: 'info.title'
  },
  canActivate: [UserRouteAccessService]
};
