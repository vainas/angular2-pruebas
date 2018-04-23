import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './nav/title.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [NavComponent, FooterComponent, TitleComponent],
  exports: [NavComponent,FooterComponent]
})
export class ComponentsModule { }
