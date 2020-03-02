import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JuliestoreSharedModule } from 'app/shared/shared.module';
import { JuliestoreCoreModule } from 'app/core/core.module';
import { JuliestoreAppRoutingModule } from './app-routing.module';
import { JuliestoreHomeModule } from './home/home.module';
import { JuliestoreEntityModule } from './entities/entity.module';
import { JuliestoreAppNotreHistoireModule } from './notre-histoire/notre-histoire.module';
import { JuliestoreAppNosProduitsModule } from './nos-produits/nos-produits.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JuliestoreSharedModule,
    JuliestoreCoreModule,
    JuliestoreHomeModule,
    JuliestoreAppNotreHistoireModule,
    JuliestoreAppNosProduitsModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JuliestoreEntityModule,
    JuliestoreAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JuliestoreAppModule {}
