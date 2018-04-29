import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations.component';
import { ItemComponent } from './item.component';
import { ListComponent } from './list.component';
import { NewComponent } from './new.component';

import { FormsModule } from "@angular/forms";
import { OperationsService } from './operations.service';

@NgModule({
  imports: [
    CommonModule,
    OperationsRoutingModule,
    FormsModule
  ],
  declarations: [OperationsComponent,ItemComponent, ListComponent, NewComponent],
  providers: [OperationsService]
})
export class OperationsModule { }
