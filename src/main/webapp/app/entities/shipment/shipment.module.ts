import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JuliestoreSharedModule } from 'app/shared/shared.module';
import { ShipmentComponent } from './shipment.component';
import { ShipmentDetailComponent } from './shipment-detail.component';
import { ShipmentUpdateComponent } from './shipment-update.component';
import { ShipmentDeleteDialogComponent } from './shipment-delete-dialog.component';
import { shipmentRoute } from './shipment.route';

@NgModule({
  imports: [JuliestoreSharedModule, RouterModule.forChild(shipmentRoute)],
  declarations: [ShipmentComponent, ShipmentDetailComponent, ShipmentUpdateComponent, ShipmentDeleteDialogComponent],
  entryComponents: [ShipmentDeleteDialogComponent]
})
export class JuliestoreShipmentModule {}
