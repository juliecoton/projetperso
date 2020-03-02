import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JuliestoreSharedModule } from '../shared/shared.module';

import { NOTRE_HISTOIRE_ROUTE, NotreHistoireComponent } from './';

@NgModule({
  imports: [JuliestoreSharedModule, RouterModule.forRoot([NOTRE_HISTOIRE_ROUTE], { useHash: true })],
  declarations: [NotreHistoireComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JuliestoreAppNotreHistoireModule {}
