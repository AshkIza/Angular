import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './courses/components/list/list.component';
import { ViewComponent } from './courses/components/view/view.component';
import { AddAndEditComponent } from './courses/components/add-and-edit/add-and-edit.component';
import { ResourceInventoryComponent } from './resources/components/resource-inventory/resource-inventory.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ViewComponent,
    AddAndEditComponent,
    ResourceInventoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
