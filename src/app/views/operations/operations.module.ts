import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations.component';
import { ItemComponent } from './item.component';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    OperationsRoutingModule
  ],
  declarations: [OperationsComponent,ItemComponent, ListComponent]
})
export class OperationsModule { }
