import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ComponentsModule } from './lib/components/components.module';
import { HomeModule } from './views/home/home.module';
import { HttpClientModule } from '@angular/common/http';

import { NotFoundModule } from './views/not-found/not-found.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HomeModule,
    HttpClientModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
