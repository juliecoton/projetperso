import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { NosProduitsComponent } from './nos-produits.component';

export const NOS_PRODUITS_ROUTE: Route = {
  path: 'nos-produits',
  component: NosProduitsComponent,
  data: {
    authorities: [],
    pageTitle: 'nos-produits.title'
  },
  canActivate: [UserRouteAccessService]
};
