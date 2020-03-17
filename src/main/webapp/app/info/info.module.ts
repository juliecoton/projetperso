import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JuliestoreSharedModule } from '../shared/shared.module';

import { INFO_ROUTE, InfoComponent } from './';

@NgModule({
  imports: [JuliestoreSharedModule, RouterModule.forRoot([INFO_ROUTE], { useHash: true })],
  declarations: [InfoComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JuliestoreAppInfoModule {}
