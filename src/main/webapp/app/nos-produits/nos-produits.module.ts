import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JuliestoreSharedModule } from '../shared/shared.module';

import { NOS_PRODUITS_ROUTE, NosProduitsComponent } from './';

@NgModule({
  imports: [JuliestoreSharedModule, RouterModule.forRoot([NOS_PRODUITS_ROUTE], { useHash: true })],
  declarations: [NosProduitsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JuliestoreAppNosProduitsModule {}
