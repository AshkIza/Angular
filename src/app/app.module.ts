import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './courses/components/list/list.component';
import { ViewComponent } from './courses/components/view/view.component';
import { AddAndEditComponent } from './courses/components/add-and-edit/add-and-edit.component';
import { ResourceInventoryComponent } from './resources/components/resource-inventory/resource-inventory.component';
import { AddAndEditTopicComponent } from './topics/components/add-and-edit-topic/add-and-edit-topic.component';
import { UserAddAndEditComponent } from './users/components/user-add-and-edit/user-add-and-edit.component';
import { UserLoginComponent } from './users/components/user-login/user-login.component';
import { UserProfileComponent } from './users/components/user-profile/user-profile.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ViewComponent,
    AddAndEditComponent,
    ResourceInventoryComponent,
    AddAndEditTopicComponent,
    UserAddAndEditComponent,
    UserLoginComponent,
    UserProfileComponent,
    HeaderComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
